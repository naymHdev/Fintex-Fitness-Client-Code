import { useState } from "react";
import toast from "react-hot-toast";
import { forumsData } from "../../Api/Featured/Featured";
import Button from "../../Components/Button/Button";
import SectionTitle from "../../Components/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useForum from "../../Hooks/useForum";

const AddNewForum = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [, refetch] = useForum();

  const handleCreateClass = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const texts = form.texts.value;
    const text = form.text.value;
    const content = form.content.value;
    const role = form.role.value;
    const photoURL = user.photoURL;
    const displayName = user.displayName;
    const time = user.metadata.lastSignInTime;
    const classData = {
      content,
      texts,
      photoURL,
      role,
      text,
      displayName,
      time,
    };

    try {
      await forumsData(classData);
      refetch();
      toast.success("Forum Data Added!");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <span className="loading loading-ring loading-lg flex h-screen"></span>
    );
  }

  return (
    <div className="w-10/12 mx-auto mt-8">
      <SectionTitle
        heading={"Add New Fitness Tips Forums"}
        subHeading={
          "Fill out the form below to create a new fitness class card."
        }
      />
      <hr className="mt-8" />
      <form onSubmit={handleCreateClass} className=" mx-auto mt-8">
        <div className="flex flex-col mt-8">
          <label className="mb-2 font-bold text-white">Title texts</label>
          <input
            type="text"
            name="texts"
            className="px-4 py-2 border rounded-md"
            placeholder="Enter title text"
          />
        </div>
        <div className="flex flex-col mt-8">
          <label className="mb-2 font-bold text-white">Conclusion texts</label>
          <input
            type="text"
            name="text"
            className="px-4 py-2 border rounded-md"
            placeholder="Enter Conclusion text"
          />
        </div>

        <div className="flex flex-col mt-8">
          <label className="mb-2 font-bold text-white">Role</label>
          <select
            defaultValue="default"
            name="role"
            id=""
            className="px-4 py-2 border rounded-md"
          >
            <option value="default" disabled selected>
              Define your role
            </option>
            <option value="admin">Admin</option>
            <option value="trainer">Trainer</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2 text-white font-bold">Post Content</label>
          <textarea
            className="px-2 py-2 pb-8 border rounded-md"
            placeholder="Enter post content"
            name="content"
          ></textarea>
        </div>
        <div className="mt-5 flex justify-center">
          <Button label={"Upload Post"} />
        </div>
      </form>
    </div>
  );
};

export default AddNewForum;
