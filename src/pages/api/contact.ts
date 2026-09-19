import type { NextApiRequest, NextApiResponse } from "next";
import { processContactRequest, resolveClientIp } from "@/lib/contact";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16kb",
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await processContactRequest({
    method: req.method,
    ip: resolveClientIp({
      headers: req.headers,
      remoteAddress: req.socket?.remoteAddress,
    }),
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
