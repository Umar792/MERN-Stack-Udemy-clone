import React from "react";
import image from "../../Assets/images/hero.png";

const category = [
  {
    id: 1,
    value: "Web Development",
  },
  {
    id: 2,
    value: "MERN Stack Development",
  },
  {
    id: 3,
    value: "ReactNative Development",
  },
  {
    id: 5,
    value: "Paython Development",
  },
  {
    id: 4,
    value: "Wordpress Development",
  },
  {
    id: 6,
    value: "React.js",
  },
  {
    id: 7,
    value: "Node.js",
  },
  {
    id: 8,
    value: "Mongodb",
  },
  {
    id: 9,
    value: "Express.js",
  },
];

const course = [
  {
    id: 1,
    title: "Web Development",
    owner: "michle",
    views: 12,
    leacture: 12,
    image: image,
  },
  {
    id: 2,
    title: "Web Development",
    owner: "michle",
    views: 12,
    leacture: 12,
    image: image,
  },
  {
    id: 3,
    title: "Web Development",
    owner: "michle",
    views: 12,
    leacture: 12,
    image: image,
  },
  {
    id: 4,
    title: "Web Development",
    owner: "michle",
    views: 12,
    leacture: 12,
    image: image,
  },
];
const Courses = () => {
  return (
    <div className="flex flex-col justify-center place-items-center p-4">
      <h2 className="text-center py-3 mb-3 text-5xl font-bold">All Courses</h2>
      {/* =============== */}
      <div className="flex gap-[10px] my-3 w-[800px] overflow-auto py-4">
        {category &&
          category.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-[200px] text-center hidescroll cursor-pointer hover:bg-[gray] hover:text-white shrink-0 border-2 border-[gray]"
              >
                <p>{item.value}</p>
              </div>
            );
          })}
      </div>
      {/* ---------------------- */}
      <div className="">
        <ShowcourseCrda data={course} />
      </div>
    </div>
  );
};

export default Courses;

const ShowcourseCrda = ({ data }) => {
  return (
    <div className="flex w-[850px] gap-[20px] flex-wrap justify-center place-items-center">
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[250px] border-2 cursor-pointer hover:shadow-2xl  border-[gray] hover:border-0 p-[10px]"
            >
              <img
                src={item.image}
                alt=""
                className="w-[full] h-[200px] object-contain"
              />
              <p>Course Name : {item.title}</p>
              <p>Total Leacture : {item.leacture}</p>
              <p>View : {item.views}</p>
              <p>Owner : {item.owner}</p>
              <button className="w-full bg-[gray] text-white py-2 text-center my-2 font-bold">
                Watch now
              </button>
              <p className="w-full py-2 px-1 font-bold">Add to playlist</p>
            </div>
          );
        })}
    </div>
  );
};
