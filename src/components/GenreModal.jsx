import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import {
  getAllGenres,
  handleCreateNewGenre,
  handleUpdateGenreDataApi,
} from "../services/genreService";
import Input from "./Input";

export default function GenreModal({ toggleGenreModal, title, genreID }) {
  const [genreState, setGenreState] = useState({});
  const [value, setValue] = useState();
  const getGenre = async () => {
    try {
      let response = await getAllGenres(genreID);
      setGenreState(response.genres);
      setValue(response.genres.name);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
  useEffect(() => {
    getGenre();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue(value);
    setGenreState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSubmitGenre();
  };

  const handleSubmitGenre = () => {
    title === "Add" ? handleAddGenre() : handleChangeGenreData();
  };

  const handleAddGenre = async () => {
    try {
      let message = await handleCreateNewGenre(value);
      if(message.errCode === 0){
				toggleGenreModal(false)
			}
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeGenreData = async () => {
    try {
      let message = await handleUpdateGenreDataApi(genreID, value);
      if(message.errCode === 0){
				toggleGenreModal(false)
			}
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-10">
      <div
        onClick={toggleGenreModal}
        className="w-full h-full bg-black opacity-50"
      ></div>
      <div className="absolute w-7/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded">
        <div className="p-4 flex justify-center flex-col items-center mt-[5%]">
          <div className="w-2/3 mb-3">
            <Typography variant="h4" color="blue-gray" className="text-xl">
              {title} genre
            </Typography>
          </div>
          <form
            className="w-2/3 flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            <Input
              key={genreID}
              id={genreID}
              name={"genre"}
              label={"Name genre"}
              placeholder={"Enter genre"}
              handleChange={handleChange}
              type={"text"}
              autoComplete={"genre"}
              required={"genre"}
              value={value}
            />
            <div className="mt-[60%]">
              <Button
                variant="solid"
                color="blue"
                className="w-24"
                onClick={handleSubmitGenre}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="red"
                className="ml-4"
                onClick={toggleGenreModal}
              >
                Cancle
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
