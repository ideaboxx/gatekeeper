"use server";

import { z } from "zod";

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function loginUser(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const data = userLoginSchema.parse(raw);
  console.log(formData);
}
