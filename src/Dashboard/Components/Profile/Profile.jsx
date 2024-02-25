import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import UseRole from "../../../Hooks/Roles/UseRole";

const Profile = () => {
  const { user } = useAuth();
  const {role} = UseRole();
  return (
    <div className="flex justify-center items-center h-screen font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Profile</title>
      </Helmet>
      <div className="bg-green-100 shadow-lg rounded-2xl w-full md:w-3/5">
        <img
          alt="profile"
          src="https://imagizer.imageshack.com/img924/4104/6bLYxA.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center py-4 md:px-8 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24   border-2 border-green-400 "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-green-500 rounded-full">
            {role && role.toUpperCase()}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: <span className="text-sm">{user.uid.slice(0, 7)}</span>
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">{user.displayName}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user.email}</span>
              </p>

              <div>
                <button className="bg-green-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
                  Update Profile
                </button>
                <button className="bg-green-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
