import React, { useState } from "react";
import FormRow from "../components/FormRow";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";
import { registerUser, loginUser } from "../Features/users/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  isUser: false,
};

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [isUser, setIsUser] = React.useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (!email || !password || (!isUser && !name)) {
      toast.error("fill all required fields", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!isUser) {
      dispatch(registerUser({ name, email, password }));
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  React.useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="h-screen w-full bg-[#fbfbfb] flex justify-center items-center">
      <div className="bg-white rounded shadow-md py-6 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[25%]">
        <form className="flex flex-col p-3" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2 justify-center mb-3">
            <img src={logo} alt="logo" />
            <p className="font-extrabold text-xl text-[#fd5732]">HuntTrackr</p>
          </div>
          <h2 className="text-center text-2xl mb-4">
            {isUser ? "Login" : "Register"}
          </h2>
          {!isUser && (
            <FormRow
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <FormRow
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormRow
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="mb-4"></div>
          <button
            type="submit"
            className="bg-[#fd5732] text-white px-2 py-1 rounded hover:bg-[#fd5732e4] text-center"
          >
            {isUser
              ? isLoading
                ? "Logging in..."
                : "Login"
              : isLoading
              ? "Creating User..."
              : "Register"}
          </button>
        </form>
        <p className="px-3">
          {isUser ? "Not yet registered?" : "Already registered?"}{" "}
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
