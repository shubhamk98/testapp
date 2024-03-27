import Template from "../components/Auth/Template";
import signupImg from "../assets/Images/signup.webp";

const Signup = () => {
  return (
    <div className="h-full">
      <Template
        title="Join the millions of learners and educators, empowering you to code effortlessly. Sign up now for free!"
        image={signupImg}
        formType="signup"
      />
    </div>
  );
};

export default Signup;
