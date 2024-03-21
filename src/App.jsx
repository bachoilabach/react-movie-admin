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

import NotFound from "./main/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/ForgotPw" element={<ForgotPw />} />

          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/dashboard/Movies" element={<MoviePage />} />
          <Route path="/dashboard/Categories" element={<CategoryPage />} />
          <Route path="/dashboard/Actors" element={<ActorsPage />} />
          <Route path="/dashboard/Directors" element={<DirectorPage />} />
          <Route path="/dashboard/Comments" element={<CommentPage />} />

          <Route path="/dashboard/Accounts" element={<AccountPage />} />
          <Route path="/dashboard/Statistics" element={<StatisticPage />} />
          <Route path="/" element={<LoginPage />} />

          <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
