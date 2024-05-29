import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import loginImage from "../../assets/welcome-concept-illustration_114360-22393.jpg";

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
              label="Username"
              placeholder="Username"
              rules={[{ required: true, message: "Please enter username" }]}
            />
            <ProFormText.Password
              label="Password"
              placeholder="Password"
              rules={[{ required: true, message: "Please enter password" }]}
            />
            <ProFormCheckbox>Remember me</ProFormCheckbox>
          </ProForm>
        </div>
      </div>
      <div className="login-image w-[50%] h-[100%]">
        <img src={loginImage} alt="image login" />
      </div>
    </div>
  );
};

export default Login;
