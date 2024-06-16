import {
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import moment from "moment";
import { Link, redirect, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/signup.svg";
import { ROUTES } from "../../utils/constants";
import { handleCreateUser } from "../../utils/handler";

const SignUp = () => {
  const [form] = ProForm.useForm();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    await form.validateFields();

    const valForm = form.getFieldsValue();

    const dataCreate = {
      fullName: valForm?.fullName,
      username: valForm?.username,
      gender: valForm?.gender,
      dob: moment(valForm?.dob).format("YYYY-MM-DD"),
      email: valForm?.email,
      password: valForm?.password,
    };

    try {
      const res = await handleCreateUser(dataCreate);
      if (res?.status === 200) {
        console.log("hi");

        navigate(ROUTES.login);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateConfirmPassword = (_: string, value: string) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("The two passwords do not match!"));
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up flex">
        <div className="sign-up-right w-[40%] h-[100%] px-[20px]">
          <img src={signUpImage} alt="sign up image" />
        </div>
        <div className="sign-up-wrap-form w-[60%] flex flex-col justify-center items-center py-[40px]">
          <h1 className="sign-up-title mb-[20px]">SIGN UP</h1>
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
            onFinish={handleSignUp}
            form={form}
          >
            <ProFormText
              name="fullName"
              label="Full Name"
              placeholder="Full Name"
              rules={[{ required: true, message: "Please enter full name" }]}
              width="md"
            />
            <ProFormText
              name="username"
              label="UserName"
              placeholder="UserName"
              rules={[{ required: true, message: "Please enter full name" }]}
              width="md"
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
              width="md"
            />
            <ProFormText.Password
              name="password"
              label="Password"
              placeholder="Password"
              rules={[{ required: true, message: "Please enter password" }]}
              width="md"
            />
            <ProFormText.Password
              name="confirm_password"
              label="Confirm password"
              placeholder="Confirm password"
              rules={[
                { required: true, message: "Please enter confirm password" },
                {
                  validator: validateConfirmPassword,
                },
              ]}
              width="md"
            />
            <div className="flex justify-between">
              <ProFormSelect
                name="gender"
                label="Gender"
                placeholder="Gender"
                options={[
                  { label: "Male", value: "MALE" },
                  { label: "Female", value: "FEMALE" },
                  { label: "Other", value: "OTHER" },
                ]}
                rules={[{ required: true, message: "Please select gender" }]}
              />
              <ProFormDatePicker
                placeholder="Birthday"
                name="dob"
                label="Birthday"
                rules={[{ required: true, message: "Please enter birthday" }]}
              />
            </div>
          </ProForm>
          <div className="sign-up-login mt-[20px]">
            <p className="sign-up-login-desc">
              Already have an account?{" "}
              <Link to={ROUTES.login}>
                <strong>Sign In</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
