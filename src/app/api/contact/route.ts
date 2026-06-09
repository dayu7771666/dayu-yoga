import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ContactFormData {
  name: string;
  email: string;
  brand?: string;
  product: string;
  quantity: string;
  message: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function validateForm(data: Partial<ContactFormData>): string | null {
  if (!data.name?.trim()) return "Name is required.";
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "A valid email address is required.";
  if (!data.product?.trim()) return "Please select a product type.";
  if (!data.quantity?.trim()) return "Please select an estimated quantity.";
  if (!data.message?.trim()) return "Production brief is required.";
  return null;
}

// ── Notion ────────────────────────────────────────────────────────────────────

async function saveToNotion(data: ContactFormData): Promise<void> {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    console.warn("Notion env vars not set, skipping database save.");
    return;
  }

  const body = {
    parent: { database_id: databaseId },
    properties: {
      // Title field (required by Notion) — use name as the page title
      名称: {
        title: [{ text: { content: data.name } }],
      },
      Email: {
        email: data.email,
      },
      "Brand Name": {
        rich_text: [{ text: { content: data.brand ?? "" } }],
      },
      "Product Type": {
        select: { name: data.product },
      },
      Quantity: {
        select: { name: data.quantity },
      },
      Brief: {
        rich_text: [{ text: { content: data.message.slice(0, 2000) } }],
      },
      "Submitted At": {
        date: { start: new Date().toISOString() },
      },
      Status: {
        select: { name: "New" },
      },
    },
  };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Notion save failed:", err);
    throw new Error(`Notion error: ${err.message}`);
  }
}

// ── Resend ────────────────────────────────────────────────────────────────────

async function sendEmailNotification(data: ContactFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "tidelineswim@swimsuitcustom.com";

  if (!apiKey) {
    console.warn("RESEND_API_KEY not set, skipping email.");
    return;
  }

  const resend = new Resend(apiKey);

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #fafaf8; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border: 1px solid #e8e8e4; }
    .header { background: #1a1a1a; padding: 32px 40px; }
    .header h1 { color: #fff; font-size: 20px; font-weight: 300; letter-spacing: 0.1em; margin: 0; }
    .header span { color: rgba(255,255,255,0.4); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; }
    .body { padding: 40px; }
    .field { margin-bottom: 24px; border-bottom: 1px solid #f0f0ec; padding-bottom: 20px; }
    .field:last-child { border-bottom: none; margin-bottom: 0; }
    .label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #3d6b5a; font-weight: 600; margin-bottom: 6px; }
    .value { font-size: 15px; color: #1a1a1a; line-height: 1.6; }
    .badge { display: inline-block; background: #3d6b5a; color: #fff; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; }
    .footer { background: #f5f5f2; padding: 20px 40px; text-align: center; }
    .footer p { font-size: 11px; color: #999; letter-spacing: 0.1em; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <span>New Inquiry</span>
      <h1>Zenlume Yoga — Production Request</h1>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(data.name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color:#3d6b5a;">${escapeHtml(data.email)}</a></div>
      </div>
      ${data.brand ? `
      <div class="field">
        <div class="label">Brand Name</div>
        <div class="value">${escapeHtml(data.brand)}</div>
      </div>` : ""}
      <div class="field">
        <div class="label">Product Type</div>
        <div class="value"><span class="badge">${escapeHtml(data.product)}</span></div>
      </div>
      <div class="field">
        <div class="label">Estimated Quantity</div>
        <div class="value">${escapeHtml(data.quantity)}</div>
      </div>
      <div class="field">
        <div class="label">Production Brief</div>
        <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
      </div>
    </div>
    <div class="footer">
      <p>Submitted via Zenlume Yoga · ${new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai", dateStyle: "long", timeStyle: "short" })} CST</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  await resend.emails.send({
    from: "Zenlume Yoga <noreply@yogaoh.com>",
    to: [toEmail],
    replyTo: data.email,
    subject: `New Inquiry: ${data.product} — ${data.name}`,
    html,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Route Handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<ContactFormData>;

    // Validate
    const error = validateForm(body);
    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const data = body as ContactFormData;

    // Run Notion save and email notification in parallel
    const results = await Promise.allSettled([
      saveToNotion(data),
      sendEmailNotification(data),
    ]);

    // Log any partial failures (don't block the user response)
    results.forEach((result, i) => {
      if (result.status === "rejected") {
        console.error(`Task ${i === 0 ? "Notion" : "Resend"} failed:`, result.reason);
      }
    });

    // As long as at least one succeeded, return success
    const allFailed = results.every((r) => r.status === "rejected");
    if (allFailed) {
      return NextResponse.json(
        { success: false, error: "Failed to submit inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
