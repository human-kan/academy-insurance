import { Router, type IRouter } from "express";

const router: IRouter = Router();

function toE164(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

router.post("/vapi-call", async (req, res) => {
  const { name, phone, email, subject, message } = req.body as {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!phone) {
    res.status(400).json({ error: "Phone number is required to initiate a call." });
    return;
  }

  const e164 = toE164(phone);
  if (!e164) {
    res.status(400).json({ error: "Please provide a valid US phone number." });
    return;
  }

  const privateKey = process.env["VAPI_PRIVATE_KEY"];
  const assistantId = process.env["VAPI_AGENT_ID"];
  const phoneNumberId = process.env["VAPI_PHONE_NUMBER_ID"];

  if (!privateKey || !assistantId || !phoneNumberId) {
    req.log.error("Vapi credentials are not configured");
    res.status(500).json({ error: "Call service is not configured." });
    return;
  }

  try {
    const response = await fetch("https://api.vapi.ai/call/phone", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${privateKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assistantId,
        phoneNumberId,
        customer: {
          number: e164,
          name,
        },
        assistantOverrides: {
          variableValues: {
            name,
            email,
            subject,
            message,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      req.log.error({ status: response.status, body: errorBody }, "Vapi API error");
      res.status(502).json({ error: "Failed to initiate call. Please try again." });
      return;
    }

    const data = await response.json();
    req.log.info({ callId: (data as { id?: string }).id, phone: e164 }, "Vapi call initiated");
    res.json({ success: true, callId: (data as { id?: string }).id });
  } catch (err) {
    req.log.error({ err }, "Vapi call request failed");
    res.status(500).json({ error: "Failed to initiate call. Please try again." });
  }
});

export default router;
