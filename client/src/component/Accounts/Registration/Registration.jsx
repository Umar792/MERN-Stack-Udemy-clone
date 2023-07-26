import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Registration = () => {
  const [data, setdata] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [avatar, setavatar] = useState("");
  const [imagepreview, setimagepreview] = useState("");

  const datachange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const imagechangehandler = (e) => {
    const file = e.target.files[0];
    const render = new FileReader();

    render.readAsDataURL(file);

    render.onloadend = () => {
      setimagepreview(render.result);
      setavatar(file);
    };
  };

  const submitdata = () => {};
  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 class="font-bold text-center text-2xl mb-5">Create an account</h1>
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div class="px-5 py-7">
            <label class="font-semibold text-sm text-gray-600 pb-1 block">
              Name
            </label>
            <input
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="name"
              value={data.name}
              onChange={datachange}
            />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              type="email"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="email"
              value={data.email}
              onChange={datachange}
            />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              name="password"
              value={data.password}
              onChange={datachange}
            />

            <div className="flex justify-between place-items-center mt-1 mb-5 gap-2">
              {imagepreview ? (
                <img
                  src={imagepreview}
                  className="text-2xl  w-[60px] h-[60px] rounded-[50%] object-contain border-2 border-[gray] "
                  alt=""
                />
              ) : (
                <RxAvatar className="text-4xl" />
              )}
              <input
                type="file"
                class="border rounded-lg px-3 py-2  text-sm w-full "
                accept=".jpg,.jpeg, .png,"
                onChange={imagechangehandler}
              />
            </div>
            <button
              onClick={submitdata}
              type="button"
              class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span class="inline-block mr-2">Signup</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-right  whitespace-nowrap">
                <NavLink to="/login">
                  <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <span class="inline-block ml-1">login</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
