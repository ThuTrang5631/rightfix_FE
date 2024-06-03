import {
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Link, redirect } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { handleCreateUser } from "../../utils/handler";
import moment from "moment";

const SignUp = () => {
  const [form] = ProForm.useForm();

  const handleSignUp = async () => {
    await form.validateFields();

    const valForm = form.getFieldsValue();
    console.log("valForm", valForm);

    const dataCreate = {
      fullName: valForm?.fullName,
      gender: valForm?.gender,
      dob: moment(valForm?.dob).format("YYYY-MM-DD"),
      email: valForm?.email,
      password: valForm?.password,
    };
    console.log("dataCreate", dataCreate);

    try {
      const res = await handleCreateUser(dataCreate);
      console.log("res", res);
      if (res?.data) {
        redirect(ROUTES.login);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateConfirmPassword = (_: any, value: string) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("The two passwords do not match!"));
  };

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
