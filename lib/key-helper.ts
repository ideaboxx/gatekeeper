import { prisma } from "./db";

export async function isUniqueKeyName(name: string) {
  const key = await prisma.key.findFirst({
    select: { id: true },
    where: {
      name,
    },
  });
  return key == null;
}
