import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Login = () => {
  return (
    <div className="login flex h-[100vh]">
      <div className="login-wrap-form w-[50%] flex flex-col justify-center items-center">
        <div className="flex-col justify-center px-[40px] w-[500px]">
          <h1 className="login-title mb-[20px]">SIGN IN</h1>
          <ProForm
            className="login-form"
            submitter={{
              searchConfig: {
                submitText: "Sign In",
              },
              submitButtonProps: {
                style: {
                  width: "100%",
                },
              },
              resetButtonProps: {
                style: {
                  display: "none",
                },
              },
            }}
          >
            <ProFormText
              name="username"
              label="Username"
              placeholder="Username"
              rules={[{ required: true, message: "Please enter username" }]}
            />
            <ProFormText.Password
              name="password"
              label="Password"
              placeholder="Password"
              rules={[{ required: true, message: "Please enter password" }]}
            />
            <ProFormCheckbox>Remember me</ProFormCheckbox>
          </ProForm>
        </div>
      </div>
      <div className="login-right w-[50%] h-[100%]">
        <h2 className="login-welcome-title mb-[20px]">Welcome to login</h2>
        <p className="login-desc mb-[30px]">Don't have an account?</p>
        <Link className="login-sign-up" to={ROUTES.signUp}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
