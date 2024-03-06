import React, { useState } from "react";

import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Modal({ toggleModal }) {
  const [date, setDate] = useState(Date);

  return (
    <div className="w-full h-[100vh] fixed inset-0 z-10">
      <div
        onClick={toggleModal}
        className="w-full h-full bg-black opacity-50"
      ></div>
      <div className="absolute w-11/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-8 rounded overflow-scroll">
        <form className="w-full p-4 bg-white rounded shadow-lg">
          <div className="mb-4 w-10">
            <Input variant="standard" label="Movie ID" placeholder="Movie ID" />
          </div>

          <div className="mb-4 w-10">
            <Input variant="standard" label="Title" placeholder="Title"/>
          </div>

          <div className="mb-4 w-10">
            <Input
              variant="standard"
              label="Rating ID"
              placeholder="Rating ID"
            />
          </div>

          <div className="mb-4 w-10">
            <Input
              variant="standard"
              label="Country ID"
              placeholder="Country ID"
            />
          </div>

          <div className="mb-4 w-10">
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                variant="static"
                  label="Select a Date"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mb-4 w-10">
            <Input
              variant="standard"
              label="Duration"
              placeholder="duration"
            />
          </div>

          <div className="mb-4 w-10">
            <Input
              variant="standard"
              label="Thumbnail"
              placeholder="thumbnail"
            />
          </div>

          <div className="mb-4 w-10">
            <Input
              variant="standard"
              label="Video URL"
              placeholder="videourl"
            />
          </div>

          <div className="mb-4 w-10">
            <Input
              variant="standard"
              label="HTML"
              placeholder="html"
            />
          </div>


          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
      <button
        className="fixed bottom-0 right-0 px-3 py-2 border-[1px] border-black text-black hover:bg-blue-gray-600 rounded-lg"
        onClick={toggleModal}
      >
        CLOSE
      </button>
    </div>
  );
}
