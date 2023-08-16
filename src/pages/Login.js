import React from "react";
import Button from "../components/Button";
import FormRow from "../components/FormRow";

const Login = () => {
  const [isUser, setIsUser] = React.useState(false);
  return (
    <div className="h-screen w-full bg-[#fbfbfb] flex justify-center items-center">
      <div className="bg-white rounded shadow-md py-6 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[25%]">
        <form className="flex flex-col p-3">
          <h2 className="text-center text-2xl mb-4">{isUser ? 'Login': 'Register'}</h2>
          {!isUser && <FormRow name="name" placeholder="enter your name" />}
          <FormRow name="email" placeholder="enter your email" />
          <FormRow
            type="password"
            name="password"
            placeholder="enter password"
          />
          <div className="mb-4"></div>
          <Button type="submit" text="Login" link="/dashboard" />
        </form>
        <p className="px-3">
          {isUser ? 'Not yet registered?' : 'Already registered?' }
          {" "}
          <span
            className="cursor-pointer font-bold text-[#c21d03]"
            onClick={() => setIsUser(!isUser)}
          >
            {isUser ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
