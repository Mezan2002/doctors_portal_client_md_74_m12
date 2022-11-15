import React from "react";
import { Outlet } from "react-router-dom";
import BgFooter from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <BgFooter></BgFooter>
    </div>
  );
};

export default Main;
