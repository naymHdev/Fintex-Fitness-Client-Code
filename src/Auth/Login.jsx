/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import { ImSpinner10 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { jwtSignUp } from "../Api/Auth/Auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loading, googleJoin, userLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await userLogin(email, password);
      await jwtSignUp(result?.user?.email);
      toast.success("User Login Success!");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await googleJoin();
    navigate(from, { replace: true });
  };

  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Login</title>
      </Helmet>
      <div className="w-5/12 mx-auto p-8 space-y-3 rounded-xl border shadow-lg md:mt-16">
        <h1 className="text-2xl font-bold text-center">Login Now</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs underline text-red-500">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-full hover:bg-green-500 bg-slate-500 text-slate-50 font-bold"
          >
            {loading ? (
              <ImSpinner10 className="animate-spin m-auto" />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center text-3xl space-x-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Log in with Google"
            className="p-3 auth-icons rounded-sm"
          >
            <FcGoogle />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 auth-icons rounded-sm">
            <FaSquareXTwitter />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 auth-icons rounded-sm">
            <FaSquareGithub />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link to="/register">
            <span
              rel="noopener noreferrer"
              href="#"
              className="underline text-red-600"
            >
              Register Now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
