import * as jwt from "jsonwebtoken";

const KEY = "SuperrandomAphaString4578954632114";

export function isValidToken(token: string) {
  try {
    jwt.verify(token, KEY);
    return true;
  } catch {
    return false;
  }
}

export function createToken(data: string, expiry: string) {
  return jwt.sign(
    {
      exp: expiry || Math.floor(Date.now() / 1000) + 10 * 60,
      data,
    },
    KEY
  );
}

export function getTokenData(token: string) {
  return jwt.verify(token, KEY);
}
