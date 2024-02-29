import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "National", "Birth Date", "Edit"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    date: "23/04/18",
  },
];

export default function ActorPage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  return (
    <div className="flex text-textMain p-[20px] gap-[3%]">
      <SideBar />
      <div className="w-full h-full flex flex-col gap-y-4">
        <NavBar />
        <div className="h-[calc(100vh-136px)]">
          <Card className="h-full w-full flex flex-col justify-between ">
            <div>
              <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none flex flex-row justify-between items-center mt-2 my-2 mx-2"
              >
                <div className=" mt-1 flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div className="w-full md:w-72 ">
                    <Input
                      label="Search"
                      icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button variant="outlined" size="sm">
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-1 px-0">
                <table className=" w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-3"
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
                    {TABLE_ROWS.map(
                      ({ img, name, email, job, date }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={name}>
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Avatar src={img} alt={name} size="sm" />
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {name}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    {email}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {job}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {date}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Tooltip content="Edit User">
                                <IconButton
                                  onClick={toggleModal}
                                  variant="text"
                                >
                                  <PencilIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
              {modal && (
                <div className="w-full h-[100vh] fixed inset-0 z-10">
                  <div
                    onClick={toggleModal}
                    className="w-full h-full bg-black opacity-50"
                  ></div>
                  <div className="absolute w-11/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-8 rounded">
                    <h2>Hello Modal</h2>
                    <button
                      className="absolute bottom-2 right-4 px-3 py-2 border-[1px] border-black text-black hover:bg-blue-gray-600 rounded-lg"
                      onClick={toggleModal}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              )}
            </div>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Page 1 of 10
              </Typography>
              <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
