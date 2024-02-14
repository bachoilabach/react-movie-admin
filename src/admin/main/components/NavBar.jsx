import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Input } from "@material-tailwind/react";

export default function NavBar() {
  return (
    <div className=" flex-1  bg-[#F5F7F8] h-[80px] w-full flex justify-between items-center p-4 border-2 border-gray-500 rounded-lg m-5">
      <h1 className="text-2xl font-semibold ">Home Page</h1>
      <div className="flex items-center gap-5">
        <form>
          <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div>
        </form>
        <FontAwesomeIcon icon={Icons.faCircleUser} className="fa-xl" />
        <FontAwesomeIcon icon={Icons.faBell} className="fa-xl" />
        <FontAwesomeIcon icon={Icons.faGear} className="fa-xl" />
      </div>
    </div>
  );
}
