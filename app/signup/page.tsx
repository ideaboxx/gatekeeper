import UserForm from "../components/user-form";

interface UserFormType {
  title: string;
  description: string;
  action: "login" | "signup";
}

export default function LoginForm({
  title,
  description,
  action,
}: UserFormType) {
  return (
    <div className="pt-28">
      <UserForm
        title={"Sign up"}
        description={"Create a new account using your email"}
        action={"signup"}
      />
    </div>
  );
}
