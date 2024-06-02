import {
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const SignUp = () => {
  return (
    <div className="sign-up flex h-[100vh]">
      <div className="sign-up-wrap-form w-[60%] flex flex-col justify-center items-center py-[40px]">
        <h1 className="sign-up-title mb-[20px]">Sign Up</h1>
        <ProForm
          submitter={{
            searchConfig: {
              submitText: "Create Account",
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
          <ProFormText
            name="email"
            label="Email"
            placeholder="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              { required: true, message: "Please enter email" },
            ]}
          />
          <ProFormText.Password
            name="password"
            label="Password"
            placeholder="Password"
            rules={[{ required: true, message: "Please enter password" }]}
          />
          <ProFormText.Password
            name="confirm_password"
            label="Confirm password"
            placeholder="Confirm password"
            rules={[
              { required: true, message: "Please enter confirm password" },
            ]}
          />
          <ProForm.Group>
            <ProFormSelect
              name="gender"
              label="Gender"
              placeholder="Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
              rules={[{ required: true, message: "Please select gender" }]}
            />
            <ProFormDatePicker
              placeholder="Birthday"
              name="birthday"
              label="Birthday"
              rules={[{ required: true, message: "Please enter birthday" }]}
            />
          </ProForm.Group>
        </ProForm>
        <div className="sign-up-login mt-[20px]">
          <p className="sign-up-login-desc">
            Already have an account? <Link to={ROUTES.login}>Log In</Link>
          </p>
        </div>
      </div>
      <div className="sign-up-right w-[40%] h-[100%] px-[20px]">
        <h2 className="sign-up-welcome-title mb-[20px]">Welcome to RIGHTFIX</h2>
      </div>
    </div>
  );
};

export default SignUp;
