// import { updateUser } from "../../Api/Auth/Auth";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axiosSecure from "../../Hooks/localAxios";
import toast from "react-hot-toast";

const ProfileSetting = () => {
  const { user } = useAuth();
  const { _id } = user;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const displayName = data.displayName;
    const email = data.email;
    const photoURL = data.photoURL;
    const userInfo = { displayName, email, photoURL };
    // console.log(userInfo);

    const updateProfile = axiosSecure.patch(`/user/${_id}`, userInfo);
    if (updateProfile.data.modifiedCount > 0) {
      toast.success(`${data.name} Successfully Updated Your Menu`);
    }
  };

  return (
    <div className="mt-20 font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Profile Settings</title>
      </Helmet>
      <SectionTitle
        subHeading={"Do update now your user profile!"}
        heading={"User Profile"}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-green-400 border mt-8 lg:w-6/12 mx-auto md:px-6 py-10 rounded-xl"
      >
        <div className="flex justify-center items-center">
          <div className="avatar online">
            <div className="w-24 rounded-full flex justify-center">
              <img
                className="flex justify-center items-center"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-center text-green-400 mt-2">
          Id:{" "}
          <span className="text-slate-500 text-sm">
            {user?.uid.slice(0, 10)}
          </span>
        </p>
        <div className="lg:w-8/12 mx-auto px-1 md:mt-5">
          <div className="md:mt-5">
            <label className="label font-bold">Name*</label>
            <input
              type="text"
              name="displayName"
              defaultValue={user?.displayName}
              {...register("displayName", { required: true })}
              className="input border-green-500 w-full "
            />
          </div>
          <div className="mt-5">
            <label className="label font-bold">Email*</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              {...register("email", { required: true })}
              className="input border-green-500 w-full"
            />
          </div>
          <div className="mt-5">
            <label className="label font-bold">PhotoURL*</label>
            <input
              type="url"
              name="photoURL"
              defaultValue={user?.photoURL}
              {...register("photoURL", { required: true })}
              className="input border-green-500 w-full"
            />
          </div>
          <div className="font-bold bg-green-500 px-2 py-3 w-1/3 rounded-md text-center mt-5 mx-auto">
            <input type="submit" value="Update" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;
