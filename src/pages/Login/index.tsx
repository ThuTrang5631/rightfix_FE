import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Link, useNavigate } from "react-router-dom";
import logInImage from "../../assets/login.svg";
import { ROUTES } from "../../utils/constants";
import { handleSignIn, setToken, validatePassword } from "../../utils/handler";

const Login = () => {
  const [form] = ProForm.useForm();
  const navigate = useNavigate();

  const handleFormLogin = async () => {
    await form.validateFields();

    const valForm = form.getFieldsValue();
    const dataLogin = {
      username: valForm?.username,
      password: valForm?.password,
    };

    try {
      const res = await handleSignIn(dataLogin);
      if (res?.data) {
        setToken(res?.data);
        navigate(ROUTES.home);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login flex">
        <div className="login-right w-[50%] h-[100%]">
          <img src={logInImage} alt="login image" />
        </div>
        <div className="login-wrap-form w-[50%] flex flex-col justify-center items-center">
          <div className="flex-col justify-center px-[40px] mb-[10px]">
            <h1 className="login-title mb-[20px] text-center">SIGN IN</h1>
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
              form={form}
              onFinish={handleFormLogin}
            >
              <ProFormText
                name="username"
                label="Username"
                placeholder="Username"
                rules={[{ required: true, message: "Please enter username" }]}
                width="md"
              />

              <ProFormText.Password
                name="password"
                label="Password"
                placeholder="Password"
                rules={[
                  { required: true, message: "Please enter password" },
                  { validator: validatePassword },
                ]}
                width="md"
              />
              <ProFormCheckbox>Remember me</ProFormCheckbox>
            </ProForm>
          </div>
          <div className="login-content-signup flex">
            <p className="login-desc mr-[5px]">Don't have an account?</p>
            <Link className="login-sign-up" to={ROUTES.signUp}>
              <strong>Sign Up!</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
