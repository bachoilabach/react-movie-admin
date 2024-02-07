import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./admin/auth/pages/SignupPage";
import LoginPage from "./admin/auth/pages/LoginPage";
import ForgotPw from "./admin/auth/pages/ForgotPwPage";

import HomePage from "./admin/main/pages/HomePage";

import AccountPage from "./admin/main/pages/AccountPage";
import InboxPage from "./admin/main/pages/InboxPage";
import SchedulePage from "./admin/main/pages/SchedulePage";
import DashboardPage from "./admin/main/pages/DashboardPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ForgotPw" element={<ForgotPw />} />

        <Route path="/Accounts" element={<AccountPage />} />
        <Route path="/Inbox" element={<InboxPage />} />
        <Route path="/Shedule" element={<SchedulePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
