import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().default(""),
  phone: z.string().trim().max(60).optional().default(""),
  service: z.string().trim().max(120).optional().default("Not specified"),
  message: z.string().trim().min(5).max(4000),
});

const NOTIFY_TO = "hello@triyashmedia.com";
const FROM_ADDRESS = "Triyash Studio <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function notificationHtml(data: z.infer<typeof ContactSchema>) {
  return `
  <div style="font-family:Georgia,serif;max-width:600px;margin:auto;background:#faf7f2;padding:32px;border-radius:12px;color:#2A2A2A">
    <h1 style="color:#8B7538;font-family:Georgia,serif;margin:0 0 8px">New enquiry — Triyash Media</h1>
    <p style="color:#666;margin:0 0 24px;font-size:14px">Received from the website contact form.</p>
    <table style="width:100%;border-collapse:collapse;font-size:15px">
      <tr><td style="padding:8px 0;color:#888;width:120px">Name</td><td style="padding:8px 0"><strong>${escapeHtml(data.name)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(data.email)}" style="color:#8B7538">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:8px 0;color:#888">Company</td><td style="padding:8px 0">${escapeHtml(data.company || "—")}</td></tr>
      <tr><td style="padding:8px 0;color:#888">Phone</td><td style="padding:8px 0">${escapeHtml(data.phone || "—")}</td></tr>
      <tr><td style="padding:8px 0;color:#888">Interest</td><td style="padding:8px 0">${escapeHtml(data.service)}</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #e5ddc8;margin:24px 0" />
    <p style="color:#888;margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:0.15em">Message</p>
    <p style="white-space:pre-line;line-height:1.7">${escapeHtml(data.message)}</p>
  </div>`;
}

function confirmationHtml(data: z.infer<typeof ContactSchema>) {
  return `
  <div style="font-family:Georgia,serif;max-width:600px;margin:auto;background:#faf7f2;padding:40px;border-radius:12px;color:#2A2A2A">
    <h1 style="color:#8B7538;font-family:Georgia,serif;margin:0 0 16px;font-size:28px">Thank you, ${escapeHtml(data.name.split(" ")[0])} ✦</h1>
    <p style="line-height:1.7;font-size:16px">
      Your note has landed at the Triyash Media studio. Someone from our team will read it personally and reply within one business day.
    </p>
    <p style="line-height:1.7;font-size:16px;margin-top:20px">
      In the meantime — if it's urgent — reply to this email or reach us on WhatsApp at <strong>+91 90000 00000</strong>.
    </p>
    <hr style="border:none;border-top:1px solid #e5ddc8;margin:32px 0" />
    <p style="color:#666;margin:0;font-size:13px">Triyash Media · Pune · Mumbai · Worldwide<br/>hello@triyashmedia.com</p>
  </div>`;
}

async function sendViaResend(payload: {
  from: string; to: string[]; subject: string; html: string; reply_to?: string;
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    throw new Error("Email is not configured yet — Resend API key is missing.");
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Email provider error (${res.status}): ${body}`);
  }
  return res.json();
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }),
      POST: async ({ request }) => {
        const cors = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        };
        try {
          const json = await request.json().catch(() => null);
          const parsed = ContactSchema.safeParse(json);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ ok: false, error: "Please check your form and try again." }),
              { status: 400, headers: cors },
            );
          }
          const data = parsed.data;

          // Notification to studio
          await sendViaResend({
            from: FROM_ADDRESS,
            to: [NOTIFY_TO],
            reply_to: data.email,
            subject: `New enquiry — ${data.name}${data.company ? ` · ${data.company}` : ""}`,
            html: notificationHtml(data),
          });

          // Confirmation to sender (fire-and-forget; don't fail the request on this)
          sendViaResend({
            from: FROM_ADDRESS,
            to: [data.email],
            subject: "We've received your note — Triyash Media",
            html: confirmationHtml(data),
          }).catch((err) => console.error("[contact] confirmation email failed:", err));

          return new Response(JSON.stringify({ ok: true }), { status: 200, headers: cors });
        } catch (err) {
          console.error("[contact] failed:", err);
          const msg = err instanceof Error ? err.message : "Unknown error";
          return new Response(
            JSON.stringify({ ok: false, error: msg }),
            { status: 500, headers: cors },
          );
        }
      },
    },
  },
});