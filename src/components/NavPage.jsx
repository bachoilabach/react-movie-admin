import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import CategoryPage from "../pages/CategoryPage";
import ActorsPage from "../pages/ActorPage";
import DirectorPage from "../pages/DirectorPage";
import CommentPage from "../pages/CommentPage";

import AccountPage from "../pages/AccountPage";
import StatisticPage from "../pages/StatisticPage";
import Modal from "./Modal";


const NavPage = () => {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Movies" element={<MoviePage />} />
      <Route path="/Categories" element={<CategoryPage />} />
      <Route path="/Actors" element={<ActorsPage />} />
      <Route path="/Directors" element={<DirectorPage />} />
      <Route path="/Comments" element={<CommentPage />} />
      <Route path="/Accounts" element={<AccountPage />} />
      <Route path="/Statistics" element={<StatisticPage />} />
      <Route path="/Accounts/api/edit-user/:id" element={<Modal />} />
    </Routes>
  );
};

export default NavPage;
