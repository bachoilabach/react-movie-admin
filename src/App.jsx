import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./admin/pages/SignupPage";
import LoginPage from "./admin/pages/LoginPage";
import HomePage from "./admin/pages/HomePage";
import ForgotPw from "./admin/pages/ForgotPwPage";

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
