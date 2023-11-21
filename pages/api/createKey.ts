import { prisma } from "@/lib/db";
import { isUniqueKeyName } from "@/lib/key-helper";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const user = z.object({
  email: z.string().email("Invalid Email format"),
  name: z.string(),
  password: z.string().min(6, "password must be 6 chars long"),
});

const key = z.object({
  name: z.string().min(5, "Key name should be 5 chars long"),
  val: z.string().min(10).optional(),
  apps: z.array(z.string()),
  users: z.array(
    z.object({
      email: z.string().email("Invalid email address"),
      isAdmin: z.boolean().default(false),
    })
  ),
});

async function createKey(data: z.infer<typeof key>) {
  await prisma.key.create({
    data: {
      icon: "",
      name: data.name,
      value: JSON.parse(data.val || "{}"),
      UserKey: {
        create: data.users.map((u) => ({
          role: u.isAdmin ? "ADMIN" : "USER",
          user: {
            create: {
              email: u.email,
              password: "temp:resetpassword",
            },
          },
        })),
      },
      AppKey: {
        create: data.apps.map((id: string) => ({ appId: id })),
      },
    },
  });
}

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const data = key.parse(req.body);
    if (await isUniqueKeyName(data.name)) {
      await createKey(data);
    } else {
      res.status(400).send({
        error: {
          message: "",
        },
      });
    }
  }
}
