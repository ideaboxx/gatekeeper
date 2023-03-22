import { getTokenData, isValidToken } from "@/lib/crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error?: string;
  redirectUrl?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password, file } = req.body;
  if (!email || !password) {
    return res.status(200).json({ error: "Invalid email or password" });
  }
  if (req.query.token && !isValidToken(req.query.token as string)) {
    return res.status(200).json({ redirectUrl: "/" });
  }
  res.status(200).json({ error: "In work" });
}
