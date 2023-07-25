import React from "react";
import HeroImg from "../../Assets/images/hero.png";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center gap-3 items-center py-[30px] px-[30px]">
      <div className="hero_left">
        <h2 className="text-[50px] w-[350px] my-3 font-bold font-serif">
          Your Course To Success
        </h2>
        <p className="my-2 w-[550px]">
          Loo you mug lurgy baking cakes boot cracking goal morish up the duff
          haggle hotpot faff about no biggie burke, is bleeder bamboozled bite
          your.
        </p>
        <button className="border-[#4075E3] border-2 px-[30px] py-[6px] my-[20px] hover:bg-[#4075E3] hover:text-white ">
          Enroll now
        </button>
      </div>
      <div className="hero_right">
        <img
          src={HeroImg}
          alt=""
          className="w-[500px] object-contain animate-spin-slow "
        />
      </div>
    </div>
  );
};

export default Hero;
