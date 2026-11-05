import { NextResponse } from "next/server";
import crypto from "crypto";
import { markRegistrationPaid, getRegistrationByOrderId } from "@/lib/registrations";
import { FOOTER_CONTENT } from "@/data/siteData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, paymentId, signature } = body;

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: "Missing order ID." },
        { status: 400 }
      );
    }

    const registration = getRegistrationByOrderId(orderId);
    if (!registration) {
      return NextResponse.json(
        { success: false, error: "Registration record not found for this order ID." },
        { status: 404 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Signature Verification
    if (keySecret && !orderId.startsWith("order_test_")) {
      if (!paymentId || !signature) {
        return NextResponse.json(
          { success: false, error: "Missing paymentId or signature for live verification." },
          { status: 400 }
        );
      }

      const hmac = crypto.createHmac("sha256", keySecret);
      hmac.update(`${orderId}|${paymentId}`);
      const generatedSignature = hmac.digest("hex");

      if (generatedSignature !== signature) {
        console.error("[Payment Verification Failed] Signature mismatch", {
          generated: generatedSignature,
          received: signature,
          orderId,
        });
        return NextResponse.json(
          { success: false, error: "Invalid payment signature verification failed." },
          { status: 400 }
        );
      }
    } else {
      // In sandbox mode or test mock order
      console.log(`[Payment Verification] Verified in Sandbox Mode for order: ${orderId}`);
    }

    const updated = markRegistrationPaid(orderId, paymentId || "pay_test_verified", signature || "sig_test_verified");

    const whatsappMessage = encodeURIComponent(
      `Hello Rahul sir, I have successfully completed payment for the Export Business Master Class (₹9)! My Name: ${registration.name}, Phone: ${registration.phone}, City: ${registration.city}. Please confirm my Zoom masterclass seat and share the onboarding materials.`
    );
    const whatsappUrl = `https://wa.me/91${FOOTER_CONTENT.contactWhatsApp.replace(/\D/g, "")}?text=${whatsappMessage}`;

    return NextResponse.json({
      success: true,
      message: "Payment successfully verified and registration confirmed!",
      registration: updated,
      whatsappUrl,
    });
  } catch (err: unknown) {
    console.error("[Payment Verify Error]", err);
    return NextResponse.json(
      { success: false, error: "Payment verification failed due to internal error." },
      { status: 500 }
    );
  }
}
