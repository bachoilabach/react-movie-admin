import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './admin/pages/SignupPage';
import LoginPage from './admin/pages/LoginPage';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
    <div className="max-w-md w-full space-y-8 p-4 bg-white rounded-2xl shadow-2xl">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;