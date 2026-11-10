import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { WEBINAR_PRICE_CONFIG } from "@/data/siteData";
import { findExistingRegistration, createPendingRegistration } from "@/lib/registrations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, city, profession, interest } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanPhone = phone ? String(phone).replace(/\D/g, "") : "";
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit WhatsApp phone number." },
        { status: 400 }
      );
    }

    if (!profession || typeof profession !== "string" || profession.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please specify your current profession or background." },
        { status: 400 }
      );
    }

    // 2. Duplicate Check
    const existing = findExistingRegistration(email, phone);
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          isDuplicate: true,
          error: "You are already registered for this masterclass! Your seat is already confirmed.",
          registration: existing,
        },
        { status: 200 }
      );
    }

    const amountInPaise = Math.round(WEBINAR_PRICE_CONFIG.amount * 100);
    const currency = WEBINAR_PRICE_CONFIG.currency;

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    let orderId: string;
    let isSandbox = false;

    if (keyId && keySecret) {
      try {
        const razorpay = new Razorpay({
          key_id: keyId,
          key_secret: keySecret,
        });

        const order = await razorpay.orders.create({
          amount: amountInPaise,
          currency: currency,
          receipt: `rcpt_${Date.now().toString().slice(-8)}`,
          notes: {
            name: name.trim(),
            email: email.trim(),
            phone: cleanPhone,
            city: city.trim(),
            profession: profession.trim(),
            product_interest: (interest || "").trim(),
          },
        });

        orderId = order.id;
      } catch (rzpErr: unknown) {
        const errorMsg = rzpErr instanceof Error ? rzpErr.message : "Unknown Razorpay error";
        console.error("[Razorpay API Error]", rzpErr);
        return NextResponse.json(
          {
            success: false,
            error: "Unable to initiate Razorpay payment order. Please try again or reach out on WhatsApp.",
            details: errorMsg,
          },
          { status: 500 }
        );
      }
    } else {
      // Sandbox fallback when Razorpay keys are not configured in environment
      isSandbox = true;
      orderId = `order_test_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      console.warn(
        "[Payment Notice] RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET not detected in environment. Running in test sandbox mode."
      );
    }

    // 3. Store pending registration
    createPendingRegistration({
      orderId,
      name: name.trim(),
      email: email.trim(),
      phone: cleanPhone,
      city: city.trim(),
      profession: profession.trim(),
      interest: (interest || "").trim(),
      amount: WEBINAR_PRICE_CONFIG.amount,
      currency,
    });

    return NextResponse.json({
      success: true,
      orderId,
      amount: amountInPaise,
      currency,
      keyId: keyId || "rzp_test_placeholder",
      isSandbox,
      user: {
        name: name.trim(),
        email: email.trim(),
        phone: cleanPhone,
      },
    });
  } catch (err: unknown) {
    console.error("[Payment Order Error]", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing registration." },
      { status: 500 }
    );
  }
}
