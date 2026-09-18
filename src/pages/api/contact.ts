import type { NextApiRequest, NextApiResponse } from "next";
import { processContactRequest } from "@/lib/contact";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
};

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    return forwarded.split(",")[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await processContactRequest({
    method: req.method,
    ip: getClientIp(req),
    body: req.body,
    env: {
      webhookUrl: process.env.CONTACT_N8N_WEBHOOK_URL,
      webhookSecret: process.env.CONTACT_WEBHOOK_SECRET,
    },
  });

  if (result.headers) {
    for (const [key, value] of Object.entries(result.headers)) {
      res.setHeader(key, value);
    }
  }

  res.status(result.status).json(result.body);
}
