/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import { ImSpinner10 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { jwtSignUp, saveUser } from "../Api/Auth/Auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Register = () => {
  const { loading, userCreate, googleJoin, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    try {
      const result = await userCreate(email, password);
      // Post user data in MongoDB
      await saveUser(result?.user);
      //Update UserInfo
      await updateUser(name, image);
      /// Get JWT Token In database
      await jwtSignUp(result?.user?.email);
      toast.success("User Account Create Success!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const handleGoogle = async () => {
    const result = await googleJoin();
    await jwtSignUp(result?.user?.email);
    toast.success("User Account Create Success!");
    navigate("/");
  };

  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Registration</title>
      </Helmet>
      <div className="w-5/12 mx-auto p-8 space-y-3 rounded-xl md:mt-7 text-slate-900 border shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Create Your Own Account
        </h1>
        <form onSubmit={handleRegister} className="space-y-2">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
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
            <label className="block dark:text-gray-400">Photo URL</label>
            <input
              type="url"
              name="image"
              id="image"
              placeholder="www.image.jpg"
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
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center bg-gray-400 rounded-full text-white hover:bg-green-500"
          >
            {loading ? (
              <ImSpinner10 className="animate-spin m-auto" />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Register with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center text-3xl space-x-4">
          <button
            onClick={handleGoogle}
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
          Already have an account?
          <Link to="/login">
            <span
              rel="noopener noreferrer"
              href="#"
              className="underline text-red-500"
            >
              Login Now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
