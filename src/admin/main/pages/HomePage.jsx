import React from "react";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default HomePage;
