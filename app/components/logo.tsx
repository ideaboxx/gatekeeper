import { Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function Logo() {
  return (
    <Stack align={"center"}>
      <Image src={"/logo.png"} width={48} height={48} alt={"logo"} />
      <Heading fontSize={"medium"}>Gatekeeper</Heading>
    </Stack>
  );
}
