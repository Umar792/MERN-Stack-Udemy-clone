import React from "react";
import { GiTireIronCross } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navebar = () => {
  return (
    <div className="fixed left-0 top-0 h-[100vh] bg-gray-500 w-[300px] border-r-2 border-l-white">
      <div className="flex justify-between place-items-center align-middle px-2 py-4 mb-6">
        <h2 className="text-2xl font-bold">
          Your<span className="text-[red]">Course</span>
        </h2>
        <GiTireIronCross className="cursor-pointer text-2xl" />
      </div>
      {/* ========================== */}
      <div className="px-[15px] my-5">
        <NavLink to="/">
          <li className="p-3 font-bold list-none active:text-[red]">Home</li>
        </NavLink>
        <NavLink to="/">
          <li>All Cources</li>
        </NavLink>
        <NavLink to="/">
          <li>Request a course</li>
        </NavLink>
        <NavLink to="/">
          <li>About</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navebar;
