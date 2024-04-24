import React, { useState, useEffect } from "react";
import InfoItemField from "../constants/InfoItemFields";
import InfoCard from "../components/InfoCard";
import { getCountMovies } from "../services/movieService";

const HomePage = () => {
  const [infoFields, setInfoFields] = useState(InfoItemField);

  const fetchMovieCount = async () => {
    try {
      const response = await getCountMovies();
      const movieCount = response.count;
      const updatedFields = InfoItemField.map((item) => {
        if (item.name === "Movies") {
          return { ...item, TotalCount: movieCount };
        }
        return item;
      });

      setInfoFields(updatedFields);
    } catch (error) {
      console.error("Error while fetching movie count:", error);
    }
  };

  useEffect(() => {
    fetchMovieCount();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="rounded-lg h-[calc(100vh-136px)] w-full flex flex-wrap gap-4 p-4">
        {infoFields.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
