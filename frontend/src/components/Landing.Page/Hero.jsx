import React from "react";
import { bgvideo, heroImg, apply } from "../../assets";

const Hero = () => {
  return (
    <div className="video relative h-screen ">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={bgvideo}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full "
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="absolute w-full inset-0 py-24 text-white ">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[540px]">
          <div className="flex flex-col justify-start gap-4">
            <h1 className="py-2 text-4xl text-[#9FF3C1] font-bold">
              Bridging Futures, Creating Opportunities
            </h1>
            <p className="md:leading-[44px] py-4 md:text-lg text-1xl font-medium ">
              <span className="text-[#9FF3C1]">Welcome to EduConnect,</span>{" "}
              where we are more than just an educational platform; we are
              architects of futures and creators of opportunities. Our
              commitment is to bridge the gap between students and their dreams,
              educators and their goals, and institutions and the innovative
              future of learning. <br /> <br />
              At EduConnect, we believe in the transformative power of
              education. We are dedicated to breaking down barriers and ensuring
              that quality education is accessible to all. Join us in shaping a
              brighter future for learners worldwide
            </p>
          </div>
          <img src={heroImg} className="rounded-lg h-[auto] " />
        </div>
        <div className="w-full">
          <div className="md:max-w-[1480px] max-w-[540px] m-auto py-20 flex justify-center">
            <button className="border border-[#47DEFF] flex items-center px-8 py-4 rounded-md bg-black text-white text-2xl gap-4 font-bold transition transform hover:bg-[#47DEFF] animate animate-bounce hover:scale-105">
              <img src={apply} alt="Apply Icon" />
              Apply!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;