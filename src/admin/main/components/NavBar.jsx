import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Input } from "@material-tailwind/react";

export default function NavBar() {
  const { pathname } = useLocation();
  const namepage = pathname.split("/").filter((el) => el !== "");

  return (
    <div className="flex justify-between items-center bg-bgColorBlock text-textMain h-[80px] px-6 rounded-lg m-5">
      <h1 className="text-2xl font-semibold ">{namepage}</h1>
      <div className="flex items-center">
        <form>
          <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" color="white" />
          </div>
        </form>
        <FontAwesomeIcon
          icon={Icons.faCircleUser}
          className="fa-l p-4 rounded-xl hover:bg-hoverNavBar"
        />
        <FontAwesomeIcon
          icon={Icons.faBell}
          className="fa-l p-4 rounded-xl hover:bg-hoverNavBar"
        />
        <FontAwesomeIcon
          icon={Icons.faGear}
          className="fa-l p-4 rounded-xl hover:bg-hoverNavBar"
        />
      </div>
    </div>
  );
}
