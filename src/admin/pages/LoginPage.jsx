import Header from "../components/Form/Header";
import Login from "../components/Form/Login";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-md w-full space-y-8 p-4 bg-white rounded-2xl shadow-2xl">
          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />
          <Login />
        </div>
      </div>
    </>
  );
}