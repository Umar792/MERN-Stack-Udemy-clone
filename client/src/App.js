import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import { BiMenuAltRight } from "react-icons/bi";
import Navebar from "./component/Navebar/Navebar";
import Courses from "./component/AllCourses/Courses";
import Login from "./component/Accounts/Login/Login";
import Registration from "./component/Accounts/Registration/Registration";
import ForgotPassword from "./component/Accounts/fotgotpass/ForgotPassword";
import ResetPassword from "./component/Accounts/fotgotpass/ResetPassword";
import RequestNewCourse from "./component/AllCourses/RequestNewCourse";

const App = () => {
  const [shownavebar, setShoenavebar] = useState(false);

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
    <BrowserRouter>
      <div
        className={`fixed top-[10px] left-[20px] w-[60px] p-1 ${
          scroll ? "bg-gray" : "bg-black"
        } rounded flex justify-center place-items-center`}
      >
        <BiMenuAltRight
          className={` text-3xl cursor-pointer ${
            scroll ? "text-black" : "text-white"
          } `}
          onClick={() => setShoenavebar(true)}
        />
      </div>
      <Navebar shownavebar={shownavebar} setShoenavebar={setShoenavebar} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/allcourses" element={<Courses />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/requestcourse" element={<RequestNewCourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
