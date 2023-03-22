import post from "./customFetch";

export default function createUser(userdata: {
  email: string;
  password: string;
  cpassword: string;
  file?: { text: string };
}) {
  if (!userdata.email) {
    return { error: "Invalid Email address" };
  } else if (userdata.password != userdata.cpassword) {
    return { error: "Password doesn't match" };
  }
  return post("/api/signup", userdata);
}
