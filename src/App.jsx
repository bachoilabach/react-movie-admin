import React from "react";
import Dashboard from "./layouts/dashboard";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import NotFound from "../src/pages/NotFound";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import ForgotPwPage from "../src/pages/ForgotPwPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpw" element={<ForgotPwPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;