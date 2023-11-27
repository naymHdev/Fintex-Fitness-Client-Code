// import { updateUser } from "../../Api/Auth/Auth";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle";
import useAuth from "../../Hooks/useAuth";

const ProfileSetting = () => {
  const { user } = useAuth();
  //   console.log(user);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const userInfo = { displayName, email, photoURL };
    console.log(userInfo);

    // await updateUser(userInfo)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="mt-20 font-josefin">
      <Helmet> <title>Fintex-Fitness || Profile Settings</title></Helmet>
      <SectionTitle subHeading={"Do update now your user profile!"} heading={"User Profile"} />
      <form
        onSubmit={handleUpdate}
        className="border-green-400 border mt-8 w-6/12 mx-auto px-6 py-10 rounded-xl"
      >
        <div className="flex justify-center items-center">
          <div className="avatar online">
            <div className="w-24 rounded-full flex justify-center">
              <img className="flex justify-center items-center" src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
        <p className="text-center text-green-400 mt-2">
          Id: <span className="text-slate-300 text-sm">{user?.uid.slice(0, 10)}</span>
        </p>
        <div className="w-8/12 mx-auto mt-5">
          <div className="mt-5">
            <label className="label text-white font-bold">Name*</label>
            <input
              type="text"
              name="displayName"
              placeholder={user?.displayName}
              className="input border-green-500 w-full max-w-xs"
            />
          </div>
          <div className="mt-5">
            <label className="label text-white font-bold">Email*</label>
            <input
              type="text"
              name="email"
              placeholder={user?.email}
              className="input border-green-500 w-full max-w-xs"
            />
          </div>
          <div className="mt-5">
            <label className="label text-white font-bold">PhotoURL*</label>
            <input
              type="url"
              name="photoURL"
              placeholder={user?.photoURL}
              className="input border-green-500 w-full max-w-xs"
            />
          </div>
          <div className="font-bold bg-green-500 px-2 py-3 w-1/3 rounded-md text-white text-center mt-5 mx-auto">
            <input type="submit" value="Update" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;
