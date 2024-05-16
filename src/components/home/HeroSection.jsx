import React from "react";
import heroimg from "../../../src/assets/heroimg.jpg";
function HeroSection() {
  return (
    <div className="height home-div flex justify-end flex-col flex-wrap sm:flex-row w-full h-[90vh] p-10 bg-[#DCDDE1]">
      <div className="padding w-full sm:w-[50%] pl-20  mt-20">
        <h1 className="text-6xl font-semibold">Find your</h1>
        <h1 className="text-6xl font-semibold sm:ml-16">Dream job</h1>
        <h1 className="text-6xl font-semibold">in our Platform</h1>
        <p className="text-xl mt-10">
          Explore diverse opportunities in various industries. Find your dream
          job with ease. Welcome to our Job Portal!
        </p>
      </div>
      <div className=" sm:flex w-[50%] justify-end">
        <img
          className="imgdiv h-[80%] object-cover object-center inline-block pr-20"
          src={heroimg}
        />
      </div>
    </div>
  );
}

export default HeroSection;
