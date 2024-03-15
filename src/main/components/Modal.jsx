import React, { useState } from "react";

const Modal = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    movieId: "",
    title: "",
    genreId: "",
    rating: "",
    countryId: "",
    release: "",
    duration: "",
    thumbnail: "",
    videoURL: "",
    html: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full h-[100vh] fixed inset-0 z-10">
      <div
        onClick={toggleModal}
        className="w-full h-full bg-black opacity-50"
      ></div>
      <div className="absolute w-11/12 h-5/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-8 rounded overflow-scroll">
        <form className="w-full p-4 bg-white rounded shadow-lg ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="movieId"
            >
              Movie ID
            </label>
            <input
              type="text"
              name="movieId"
              value={formData.movieId}
              onChange={handleChange}
              placeholder="Enter Movie ID"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Title"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Genre ID"
            >
              Genre ID
            </label>
            <input
              type="text"
              name="genreid"
              value={formData.genreId}
              onChange={handleChange}
              placeholder="Enter Genre ID"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Rating"
            >
              Rating
            </label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter Rating"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Country ID"
            >
              Country ID
            </label>
            <input
              type="text"
              name="countryID"
              value={formData.countryId}
              onChange={handleChange}
              placeholder="Enter Country ID"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Release Date"
            >
              Release Date
            </label>
            <input
              type="text"
              name="ReleaseDate"
              value={formData.release}
              onChange={handleChange}
              placeholder="Enter Release Date"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Duration"
            >
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Enter Duration"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Thumbnail URL"
            >
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="Enter Thumbnail URL"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Video URL"
            >
              Video URL
            </label>
            <input
              type="text"
              name="videoURL"
              value={formData.videoURL}
              onChange={handleChange}
              placeholder="Enter Video URL"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="HTML Description"
            >
              HTML Description
            </label>
            <input
              type="text"
              name="html_description"
              value={formData.html}
              onChange={handleChange}
              placeholder="Enter HTML Description"
              className="w-full p-2 border rounded-md"
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
};

export default Modal;