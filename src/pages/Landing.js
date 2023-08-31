import React, { useEffect } from "react";
import Button from "../components/Button";
import landing from "../assets/jobhunt.svg";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="bg-[#fbfbfb] py-10 px-4 h-screen">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <p className="font-extrabold text-xl text-[#fd5732]">HuntTrackr</p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:items-center  lg:w-full lg:px-10 lg:gap-7">
        <motion.div
          className="mb-6"
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1 className="text-3xl lg:text-5xl lg:gap-4 mb-3 font-bold text-[#232121] mt-10 lg:mt-0">
            Job Application <span className="text-[#fd5732]">Tracking</span> App
          </h1>
          <p className="lg:2/3 mb-4 text-[#232121]">
            Hunt Trakr is an innovative job tracking app designed to empower
            individuals on their professional journey. Whether you're a seasoned
            professional seeking new opportunities or a fresh graduate taking
            your first steps into the workforce, Hunt Trakr is here to guide you
            every step of the way.
          </p>
          <Button text="Get Started" link="/login" />
        </motion.div>
        <motion.div
          className="w-2/3 m-auto"
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <img src={landing} alt="job hunt" />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
