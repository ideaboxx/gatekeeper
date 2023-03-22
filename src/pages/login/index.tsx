import Root from "@/layout/Root";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { NextPageContext } from "next";
import Link from "next/link";

export function getServerSideProps(context: NextPageContext) {
  return {
    props: { title: context.query },
  };
}

export default function Home(props: any) {
  return (
    <Root>
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        Sign in to
        <Box color={"primary.400"} className={"text-lg"}>
          www.google.com
        </Box>
      </h1>

      <form>
        <VStack spacing={"4"}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="John@email.com" type={"email"} required />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input placeholder="**************" type={"password"} required />
          </FormControl>
          <Button colorScheme={"primary"} w="full" type="submit">
            Login
          </Button>
          <Link href={""}>
            Don't have an account?{" "}
            <Box as="span" color={"primary.400"} textDecoration="underline">
              Signup
            </Box>
          </Link>
        </VStack>
      </form>
    </Root>
  );
}
