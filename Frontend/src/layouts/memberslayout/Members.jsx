import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "../../modules/members/components/sideBar";

function MembersLayout() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12">
        <div className="col-span-2  ">
          <SideBar />
        </div>
        <div className="col-span-10 ">
          <Outlet /> 
        </div>
      </div>

      <div className="col-span-12">
        <Footer />
      </div>
    </>
  );
}

export default MembersLayout;
