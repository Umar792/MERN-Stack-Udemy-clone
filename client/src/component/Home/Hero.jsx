import React, { useEffect, useState } from "react";
import HeroImg from "../../Assets/images/hero.png";
import { BiMenuAltRight } from "react-icons/bi";

const Hero = () => {
  const [scroll, setscroll] = useState(false);

  const handleScroll = () => {
    const ScrollY = window.screenY || document.documentElement.scrollTop;
    const hy = window.innerHeight;
    if (ScrollY >= hy) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white w-full h-[100vh] flex justify-center gap-3 items-center py-[30px] px-[30px] bg-gray-500">
      {/* <div className="hamburger"> */}
      <BiMenuAltRight
        className={`fixed top-[10px] left-[20px] text-3xl cursor-pointer ${
          scroll ? "text-black" : "text-white"
        } `}
      />
      {/* </div> */}
      <div className="hero_left">
        <h2 className="text-[50px] w-[350px] my-3 font-bold font-serif">
          Your Course To Success
        </h2>
        <p className="my-2 w-[550px] ">
          Loo you mug lurgy baking cakes boot cracking goal morish up the duff
          haggle hotpot faff about no biggie burke, is bleeder bamboozled bite
          your.
        </p>
        <button className="border-[#4075E3] font-serif border-2 px-[30px] py-[6px] my-[20px] hover:bg-[#4075E3] hover:text-white hover:border-black hover:border-2 ">
          Enroll now
        </button>
      </div>
      <div className="hero_right">
        <img
          src={HeroImg}
          alt=""
          className="w-[500px] object-contain animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default Hero;
