import React from "react";
import InfoItemField from "../constants/InfoItemFields";
import InfoCard from "../components/InfoCard";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="rounded-lg h-[calc(100vh-136px)] w-full flex flex-wrap gap-4 p-4">
        {InfoItemField.map((item, index) => <InfoCard key={index} item={item} />)}
      </div>
    </div>
  );
};

export default HomePage;