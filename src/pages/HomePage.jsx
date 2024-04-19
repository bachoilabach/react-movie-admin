import React from "react";

import InfoItemField from "../constants/InfoItemFields";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="rounded-lg h-[calc(100vh-136px)] w-full flex flex-wrap gap-4 p-4">
        {InfoItemField.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-md text-center shadow-xl"
            style={{ width: "calc(25% - 1rem)", height: "calc(35% - 1rem)" }} // Trừ 1rem do sử dụng gap-4
          >
            {item.name}
            {item.count}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
