import React from "react";
import Button from "../components/Button";
import landing from "../assets/jobhunt.svg";

const Landing = () => {
  return (
    <div className="bg-[#fbfbfb] py-10 px-4 lg:grid lg:grid-cols-2 lg:items-center h-screen lg:w-full lg:px-10 lg:gap-7">
      <div className="mb-6">
        <h1 className="text-3xl lg:text-5xl lg:gap-4 mb-3 font-bold text-[#232121]">
          Job Application <span className="text-[#fd5732]">Tracking</span> App
        </h1>
        <p className="lg:2/3 mb-4 text-[#232121]">
          Role Scout is an innovative job tracking app designed to empower
          individuals on their professional journey. Whether you're a seasoned
          professional seeking new opportunities or a fresh graduate taking your
          first steps into the workforce, Role Scout is here to guide you every
          step of the way.
        </p>
        <Button text="Get Started" link="/login" />
      </div>
      <div className="w-2/3 m-auto">
        <img src={landing} alt="job hunt" />
      </div>
    </div>
  );
};

export default Landing;
