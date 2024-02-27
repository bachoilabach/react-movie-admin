import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./auth/pages/SignupPage";
import ForgotPw from "./auth/pages/ForgotPwPage";

import HomePage from "./main/pages/HomePage";
import MoviePage from "./main/pages/MoviePage";
import CategoryPage from "./main/pages/CategoryPage";
import ActorsPage from "./main/pages/ActorPage";
import DirectorPage from "./main/pages/DirectorPage";
import CommentPage from "./main/pages/CommentPage";

import AccountPage from "./main/pages/AccountPage";
import StatisticPage from "./main/pages/StatisticPage";
import LoginPage from "./auth/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/ForgotPw" element={<ForgotPw />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/Movies" element={<MoviePage />} />
        <Route path="/Categories" element={<CategoryPage />} />
        <Route path="/Actors" element={<ActorsPage />} />
        <Route path="/Directors" element={<DirectorPage />} />
        <Route path="/Comments" element={<CommentPage />} />

        <Route path="/Accounts" element={<AccountPage />} />
        <Route path="/Statistics" element={<StatisticPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
