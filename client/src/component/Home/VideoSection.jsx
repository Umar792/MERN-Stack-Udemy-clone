import React from "react";
import video from "../../Assets/video/intro.mp4";

const VideoSection = () => {
  return (
    <div className="my-[50px] px-[30px] py-[10px]">
      <h1 className="text-center text-4xl font-serif md:text-3xl sm:text-2xl lg:text-4xl font-bold">
        Video Tutorial
      </h1>

      {/* ===================== video  */}
      <div className="w-full p-6 flex justify-center align-middle">
        <video
          // autoPlay
          controls
          src={video}
          className="w-[60%]  shadow-black-6xl border-2 border-gray"
        />
      </div>
    </div>
  );
};

export default VideoSection;
