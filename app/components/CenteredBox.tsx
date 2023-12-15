import { Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Centeredbox({ children }: React.PropsWithChildren) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} minW={"md"} py={6} px={6}>
        {children}
      </Stack>
    </Flex>
  );
}
