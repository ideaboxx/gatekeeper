import FileUpload from "@/components/FileUpload";
import Root from "@/layout/Root";
import createUser from "@/lib/createUser";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useReducer, useState } from "react";

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: { title: context.query },
  };
}

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Home(props: any) {
  const [formdata, setFormdata] = useReducer(formReducer, {});
  const [file, setFile] = useState();
  const [error, setError] = useState<string>();

  const router = useRouter();

  const submit = async (e: any) => {
    e.preventDefault();
    setError("");
    if (props.isMasterkeyRequired && file == null) {
      setError("Master key file is required");
    } else {
      const { error, redirectUrl } = await createUser(formdata);
      if (error) setError(error);
      else router.replace(redirectUrl);
    }
  };

  return (
    <Root>
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        Create an account
      </h1>
      <Alert bg={"red.600"} hidden={!error} rounded="md">
        {error}
      </Alert>
      <form onSubmit={submit}>
        <VStack spacing={"4"}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              placeholder="John@email.com"
              type={"email"}
              required
              onChange={setFormdata}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              placeholder="**************"
              type={"password"}
              required
              onChange={setFormdata}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              name="cpassword"
              placeholder="**************"
              type={"password"}
              required
              onChange={setFormdata}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Upload key file</FormLabel>
            <FileUpload onLoad={setFile} />
          </FormControl>
          <Button colorScheme={"primary"} w="full" type="submit">
            Signup
          </Button>
          <Link href={"/login"}>
            Already have an account?{" "}
            <Box as="span" color={"primary.400"} textDecoration="underline">
              Signin
            </Box>
          </Link>
        </VStack>
      </form>
    </Root>
  );
}
