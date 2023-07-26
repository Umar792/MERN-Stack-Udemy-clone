import React from "react";
import video from "../../Assets/video/intro.mp4";

const VideoSection = () => {
  return (
    <div className="my-[50px] px-[30px] py-[10px]">
      <h1 className="text-center text-4xl font-serif md:text-3xl sm:text-2xl lg:text-4xl font-bold">
        Video Tutorial
      </h1>

      {/* ===================== video  */}
      <video autoPlay src={video} width="100%" />
    </div>
  );
};

export default VideoSection;
