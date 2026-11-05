import fs from "fs";
import path from "path";

export interface Registration {
  id: string;
  orderId: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  interest?: string;
  amount: number;
  currency: string;
  status: "pending" | "paid" | "failed";
  paymentId?: string;
  signature?: string;
  createdAt: string;
  paidAt?: string;
}

// In-memory cache for fast lookups across serverless invocations
let memoryRegistrations: Registration[] = [];

const dataFilePath = path.join(process.cwd(), "src", "data", "registrations.json");

function loadRegistrations(): Registration[] {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, "utf-8");
      memoryRegistrations = JSON.parse(data);
    }
  } catch (err) {
    console.error("[Registrations] Failed to read registrations.json:", err);
  }
  return memoryRegistrations;
}

function saveRegistrations(): void {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(memoryRegistrations, null, 2), "utf-8");
  } catch (err) {
    // In serverless / read-only disk environments (e.g. Vercel runtime), filesystem write might fail;
    // in-memory registrations will still serve the immediate session.
    console.warn("[Registrations] Note: Unable to persist to disk (normal on serverless read-only disk):", err);
  }
}

// Initialize on module load
loadRegistrations();

export function findExistingRegistration(email: string, phone: string): Registration | undefined {
  const normEmail = email.trim().toLowerCase();
  const cleanPhone = phone.replace(/\D/g, "");

  return memoryRegistrations.find((r) => {
    const rEmail = r.email.trim().toLowerCase();
    const rPhone = r.phone.replace(/\D/g, "");
    return (rEmail === normEmail || (cleanPhone.length >= 10 && rPhone.includes(cleanPhone.slice(-10)))) && r.status === "paid";
  });
}

export function createPendingRegistration(data: Omit<Registration, "id" | "status" | "createdAt">): Registration {
  const reg: Registration = {
    ...data,
    id: `reg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  memoryRegistrations.push(reg);
  saveRegistrations();
  return reg;
}

export function getRegistrationByOrderId(orderId: string): Registration | undefined {
  return memoryRegistrations.find((r) => r.orderId === orderId);
}

export function markRegistrationPaid(
  orderId: string,
  paymentId: string,
  signature?: string
): Registration | null {
  const reg = memoryRegistrations.find((r) => r.orderId === orderId);
  if (!reg) return null;

  reg.status = "paid";
  reg.paymentId = paymentId;
  reg.signature = signature;
  reg.paidAt = new Date().toISOString();

  saveRegistrations();
  return reg;
}
