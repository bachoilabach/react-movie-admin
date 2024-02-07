import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: Icons.faGauge, link: "/Dashboard" },
    { title: "Inbox", icon: Icons.faComment, link: "/Inbox" },
    { title: "Accounts", icon: Icons.faUser, gap: true, link: "/Accounts" },
    { title: "Schedule ", icon: Icons.faCalendar, link: "/Shedule" },
    { title: "Search", icon: Icons.faSearch },
    { title: "Analytics", icon: Icons.faChartLine },
    { title: "Export ", icon: Icons.faFile, gap: true },
    { title: "Log out", icon: Icons.faGear },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-purple-200 h-screen p-5  pt-8 relative duration-300`}
    >
      <FontAwesomeIcon
        icon={Icons.faChevronLeft}
        className={`text-black absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <Link to={"/Home"}>
        <div className="flex gap-x-4 items-center pl-2 hover:bg-purple-300 p-2 rounded-md">
          <FontAwesomeIcon
            icon={Icons.faHome}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg] fa-xl"
            }`}
          />
          <h1
            className={`origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Home
          </h1>
        </div>
      </Link>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <Link to={Menu.link}>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white font-bold text-sm items-center gap-x-4 hover:bg-purple-300
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <FontAwesomeIcon icon={Menu.icon} className="fa-xl" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-x`}
              >
                {Menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
