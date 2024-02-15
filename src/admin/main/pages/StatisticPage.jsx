import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

export default function StatisticPage() {
  return (
    <div className="flex bg-bgColorMain text-textMain">
      <SideBar />
      <div className="w-full">
        <NavBar />
        <div className="h-5/6 bg-bgColorBlock rounded-lg m-5">
          <p>StatisticPage</p>
        </div>
      </div>
    </div>
  );
}
