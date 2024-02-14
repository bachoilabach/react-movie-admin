import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
export default function InboxPage() {
  return (
    <div className="flex bg-[#cfcfcf]">
      <SideBar />
      <div className="w-full">
      <NavBar />
      <div className="h-5/6 bg-white border-2 border-gray-800 rounded-lg m-5">
        <p>Hello World InboxPage</p>
      </div>
      </div>
    </div>
  )
}
