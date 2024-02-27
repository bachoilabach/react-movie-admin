import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

import {
  Card,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["User ID", "Name", "Role ID", ""];

const TABLE_ROWS = [
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
  {
    userid: "a123",
    fullname: "John Michael",
    roleid: "123",
  },
];

export default function AccountPage() {
  return (
    <div className="flex bg-bgColorMain text-textMain p-[20px] gap-[3%]">
      <SideBar />
      <div className="w-full h-full flex flex-col gap-y-4">
        <NavBar />
        <div className="h-5/6 m-5">
          <Card className="h-[570px] overflow-scroll">
            <table className=" min-w-max table-auto text-center">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ userid, fullname, roleid }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={userid}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {userid}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {fullname}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {roleid}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}
