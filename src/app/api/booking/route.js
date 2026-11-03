import { NextResponse } from "next/server";
import { validateBooking } from "@/lib/validate";

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const errors = validateBooking(body);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const booking = { ...body, notes: (body.notes || "").slice(0, 500), receivedAt: new Date().toISOString() };
  console.log("New booking:", booking);

  const hook = process.env.BOOKING_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(booking) });
    } catch (e) { console.error("Webhook failed", e); }
  }
  return NextResponse.json({ ok: true });
}
