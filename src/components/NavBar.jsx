import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Input } from "@material-tailwind/react";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";

export default function NavBar() {
  const { pathname } = useLocation();
  const namepage = pathname.split("/dashboard/").filter((el) => el !== "");

  return (
    <div className="flex justify-between items-center bg-bgColorBlock text-textMain h-[80px] px-6 rounded-lg">
      <h1 className="text-2xl font-semibold ">{namepage}</h1>
      <div className="flex items-center gap-4">
        <form>
          <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" color="black" />
          </div>
        </form>

        <Menu>
          <MenuHandler>
            <Badge content="10" className="pointer-events-none">
              <IconButton variant="text" className="">
                <FontAwesomeIcon
                  icon={Icons.faBell}
                  className="fa-2xl p-2 rounded-xl"
                />
              </IconButton>
            </Badge>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>

        <Popover placement="bottom-end">
          <PopoverHandler>
            <IconButton variant="text">
              <FontAwesomeIcon
                icon={Icons.faCircleUser}
                className="fa-2xl p-2 rounded-xl"
              />
            </IconButton>
          </PopoverHandler>
          <PopoverContent className="w-72">
            <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
              <Avatar
                src="https://docs.material-tailwind.com/img/team-4.jpg"
                alt="tania andrew"
              />
              <div>
                <Typography variant="h6" color="blue-gray">
                  UserName
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-medium text-blue-gray-500"
                >
                  Role
                </Typography>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <FontAwesomeIcon icon={Icons.faGear} className="fa-xl p-2 rounded-xl" />
      </div>
    </div>
  );
}
