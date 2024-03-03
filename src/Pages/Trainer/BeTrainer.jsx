import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Api/Utils/Utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Multiselect from "multiselect-react-dropdown";
import SectionTitle from "../../Components/SectionTitle";
import { beTrainerPost } from "../../Api/Featured/Featured";
// import useTrainer from "../../Hooks/useTrainer";

const BeTrainer = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  // const [isTrainerLoading, refetch] = useTrainer();
  const [upload, setUpload] = useState("Upload Your Image");

  const [skill, setSkill] = useState([]);
  // console.log(skill);

  const fitnessTrainerSkills = [
    { skills: "Knowledge of Exercise Physiology" },
    { skills: "Communication Skills" },
    { skills: "Motivational Skills" },
    { skills: "Adaptability and Flexibility" },
    { skills: "Nutritional Knowledge" },
    { skills: "Empathy and Interpersonal Skills" },
  ];
  const [options] = useState(fitnessTrainerSkills);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const trainer_name = form.trainer_name.value;
    const email = user.email;
    const age = form.age.value;
    const salary = form.salary.value;
    const day = form.day.value;
    const week = form.week.value;
    const trainer_experience = form.trainer_experience.value;
    const trainer_short_details = form.trainer_short_details.value;
    const images = form.image.files[0];
    console.log(images);
    const image_url = await imageUpload(images);
    const skills = skill;
    const trainerInfo = {
      trainer_name,
      email,
      salary,
      age,
      day,
      trainer_short_details,
      week,
      trainer_experience,
      trainer_image: image_url?.data?.display_url,
      skills,
    };
    // console.table(trainerInfo);

    try {
      await beTrainerPost(trainerInfo, skill);
      toast.success("Applied Success!");
      // refetch();
      setLoading(true);
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImage = (image) => {
    setUpload(image.name);
  };

  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Join be a Trainer</title>
      </Helmet>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img923/2298/hESvhl.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-[#FEFFDE] md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-black bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/beTrainer">Be a Trainer</Link>
          </div>
          <h2 className="text-6xl font-bold text-slate-100 text-center">
            Join Be a <span className="text-[#DDFFBC]">Trainer</span>
          </h2>
          <p className="text-sm text-center text-slate-100 w-1/2 mx-auto">
            Embark on a fulfilling journey with Be a Trainer! Shape the fitness
            landscape, share your expertise, and inspire others to lead
            healthier lives. Join our community, ignite change, and thrive
            together!
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-[#FEFFDE] md:mr-20" />
        </div>
      </section>
      <div className="mt-20">
        <SectionTitle
          heading={"Thank you for your applying!"}
          subHeading={
            "Embark on a fulfilling journey with be a Trainer! Join our community, ignite change, and thrive together!"
          }
        />
      </div>
      <section className="w-9/12 mx-auto mt-20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="md:flex grid items-center gap-5">
            <div className="w-full">
              <label className="text-slate-700 font-bold label">Name</label>
              <input
                type="text"
                name="trainer_name"
                required
                placeholder="Type here your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-slate-700 font-bold label">Age</label>
              <input
                type="number"
                name="age"
                required
                placeholder="Type here your age"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <label className="text-black font-bold label">Email</label>
              <input
                type="email"
                name="email"
                placeholder={user ? user.email : ""}
                className="input border input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-black font-bold label">
                Years of Experience
              </label>
              <input
                type="number"
                name="trainer_experience"
                required
                placeholder="Type here your expertise years times"
                className="input input-bordered w-full"
              />
            </div>
            {/*  */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full">
              <label className="text-black font-bold label">
                Available time in a Weekly.(Hourly)
              </label>
              <input
                type="number"
                name="week"
                required
                placeholder="Type here your time"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-black font-bold label">
                Available time in a day.(Hourly)
              </label>
              <input
                type="number"
                name="day"
                required
                placeholder="Type here your time"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <label className="text-black font-bold label">Skills</label>
              <Multiselect
                options={options}
                displayValue="skills"
                showCheckbox
                onSelect={(skills) => setSkill(skills)}
              />
            </div>
            <div className="w-full">
              <label className="text-black font-bold label">
                Your expecting salary!
              </label>
              <input
                type="number"
                name="salary"
                required
                placeholder="$$$$$"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="text-black font-bold label">
              Explain why yoy best? for our team!
            </label>
            <textarea
              className="input input-bordered w-full pt-1"
              placeholder="Explain now maximum 30 words"
              required
              name="trainer_short_details"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <label className="text-slate-700 font-bold label">Upload Image</label>
          <div className=" rounded-lg text-start flex justify-start">
            <div className="file_upload  rounded-lg">
              <div className=" text-center">
                <label>
                  <input
                    onChange={(e) => handleImage(e.target.files[0])}
                    className="text-sm cursor-pointer hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-green-500 text-slate-700 border px-10 py-3 border-gray-300 rounded font-semibold cursor-pointer  hover:bg-rose-500">
                    {upload}
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className=" bg-[#DDFFBC] font-bold  rounded-tl-3xl rounded-br-3xl px-8 py-3 text-slate-600 hover:bg-green-500 hover:text-slate-50"
            >
              { loading ? (
                <ImSpinner2 className=" animate-spin text-slate-700 text-3xl" />
              ) : (
                "Do Apply"
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BeTrainer;
