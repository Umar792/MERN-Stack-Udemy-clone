import React from "react";
import { GiTireIronCross } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navebar = ({ shownavebar, setShoenavebar }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-[100vh] bg-[#1A2238] z-20 w-[300px] border-r-2 border-l-white transform ${
        shownavebar ? "translate-x-0" : "-translate-x-full"
      } transition text-white`}
    >
      <div className="flex justify-between place-items-center align-middle px-2 py-4 mb-6">
        <h2 className="text-2xl font-bold">
          Your<span className="text-[red]">Course</span>
        </h2>
        <GiTireIronCross
          className="cursor-pointer text-2xl"
          onClick={() => setShoenavebar(false)}
        />
      </div>
      {/* ========================== */}
      <div className="px-[15px] my-5">
        <NavLink to="/">
          <li
            onClick={() => setShoenavebar(false)}
            className="p-3 font-bold list-none active:text-[red] "
          >
            Home
          </li>
        </NavLink>
        <NavLink to="/allcourses">
          <li
            onClick={() => setShoenavebar(false)}
            className="p-3 font-bold list-none active:text-[red] "
          >
            All Cources
          </li>
        </NavLink>
        <NavLink to="/requestcourse">
          <li
            onClick={() => setShoenavebar(false)}
            className="p-3 font-bold list-none active:text-[red] "
          >
            Request a course
          </li>
        </NavLink>
        {/* <NavLink to="/">
          <li
            onClick={() => setShoenavebar(false)}
            className="p-3 font-bold list-none active:text-[red] "
          >
            About
          </li>
        </NavLink> */}
      </div>
      <div className="my-[50px] px-3 py-2 flex justify-center gap-[10px] place-items-center">
        <NavLink to="/login">
          <button
            className="border-2 border-[white] px-[30px] py-1 mr-1"
            onClick={() => setShoenavebar(false)}
          >
            Login
          </button>
        </NavLink>
        <p className="text-[red] font-bold">Or</p>
        <button
          className="border-2 border-[white] px-[30px] py-1 ml-1"
          onClick={() => setShoenavebar(false)}
        >
          SignUp
        </button>
      </div>
      <button
        className="border-t-2 border-b-2 border-[white] py-2 w-full"
        onClick={() => setShoenavebar(false)}
      >
        DashBoard
      </button>
    </div>
  );
};

export default Navebar;
