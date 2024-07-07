import UserForm from "../components/user-form";
import { loginUser } from "./action";

export default function LoginForm() {

  return (
    <div className="pt-36">
      <form action={loginUser}>
        <UserForm
          title={"Login"}
          description={"Enter your email below to login to your account"}
          action={"login"}
        />
      </form>
    </div>
  );
}
