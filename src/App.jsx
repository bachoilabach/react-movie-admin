import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./admin/auth/pages/SignupPage";
import ForgotPw from "./admin/auth/pages/ForgotPwPage";

import HomePage from "./admin/main/pages/HomePage";
import MoviePage from "./admin/main/pages/MoviePage";
import CategoryPage from "./admin/main/pages/CategoryPage";
import ActorsPage from "./admin/main/pages/ActorPage";
import DirectorPage from "./admin/main/pages/DirectorPage";
import CommentPage from "./admin/main/pages/CommentPage";

import AccountPage from "./admin/main/pages/AccountPage";
import StatisticPage from "./admin/main/pages/StatisticPage";
import LoginPage from "./admin/auth/pages/LoginPage";
import Main from "./admin/main/pages/Main";

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
        <Route path="/Main" element={<Main/>}/>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
