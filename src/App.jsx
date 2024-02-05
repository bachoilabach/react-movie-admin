import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./admin/auth/pages/SignupPage";
import LoginPage from "./admin/auth/pages/LoginPage";
import ForgotPw from "./admin/auth/pages/ForgotPwPage";

import HomePage from "./admin/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ForgotPw" element={<ForgotPw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
