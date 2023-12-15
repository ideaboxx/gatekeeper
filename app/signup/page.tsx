"use client";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Centeredbox from "../components/CenteredBox";
import Logo from "../components/logo";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data: any) => console.log(data);

  const validatePassword = (current: string, formValues: any) => {
    return current == formValues.pass1;
  };

  return (
    <Centeredbox>
      <Logo />
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Create a new account</Heading>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" {...register("name")} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("pass1")} />
            </FormControl>
            <FormControl id="confirm-password" isInvalid={errors.pass2 != null}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                {...register("pass2", { validate: validatePassword })}
              />
              <FormErrorMessage>Password doesn't match</FormErrorMessage>
            </FormControl>
            <Stack spacing={4} paddingTop={4}>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Account
              </Button>
              <Link
                href="/"
                className="text-center opacity-60 hover:opacity-90"
              >
                Already have an account? Sign in here
              </Link>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Centeredbox>
  );
}
