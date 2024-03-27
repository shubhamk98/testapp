import Template from "../components/Auth/Template";
import loginImg from "../assets/Images/login.webp";

const Login = () => {
  return (
    <div className="h-100% mb-10">
      <Template
        title="Welcome Back"
        image={loginImg}
        formtype="login"
      />
    </div>
  );
};

export default Login;
