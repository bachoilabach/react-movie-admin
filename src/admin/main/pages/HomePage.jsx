import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
      <NavBar />
      <div>
        <p>Hello World</p>
      </div>
      </div>
    </div>
  );
};
export default HomePage;
