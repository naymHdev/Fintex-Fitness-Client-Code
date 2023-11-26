import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import useAuth from "../../Hooks/useAuth";
import PublickAxios from "../../Hooks/PublickAxios";
import LockAxios from "../../Hooks/LockAxios";
import toast from "react-hot-toast";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
// console.log(object);

const BeTrainer = () => {
  const { user } = useAuth();
  const publicAxios = PublickAxios();
  const secureAxios = LockAxios();

  //const { trainer_name, trainer_image, trainer_experience, trainer_short_details, _id, week, day }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const trainer_name = form.trainer_name.value;
    const email = user.email;
    const age = form.age.value;
    const day = form.day.value;
    const week = form.week.value;
    const trainer_experience = form.trainer_experience.value;
    const trainer_short_details = form.trainer_short_details.value;
    const trainer_image = imageHostingApi

    console.table(trainer_name, email, age, day, trainer_short_details, week, trainer_experience, trainer_image);

    const getImage = { trainer_image: e.image[0] };
    const res = await publicAxios.post(imageHostingApi, getImage, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res);
    if (res.data.success) {
      const info = (trainer_name, email, age, day, trainer_short_details, week, trainer_experience);
      const userInfo = await secureAxios.post("/trainers", info);
      console.log(userInfo);
      if (userInfo.data.insertedId > 0) {
        toast.success(`${user.name} Successfully Added`);
      }
      toast.error(`${user.name} Not Added!`);
    }
  };

  return (
    <div>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img923/2298/hESvhl.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-black bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/beTrainer">Be a Trainer</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Join Be a <span className="text-green-400">Trainer</span>
          </h2>
          <p className="text-sm text-center text-white w-1/2 mx-auto">
            Embark on a fulfilling journey with Be a Trainer! Shape the fitness landscape, share
            your expertise, and inspire others to lead healthier lives. Join our community, ignite
            change, and thrive together!
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:mr-20" />
        </div>
      </section>
      <section className="w-8/12 mx-auto mt-20 border border-green-500 p-5 rounded-md">
        <h2 className="text-2xl font-bold">
          Embark on a fulfilling journey with Be a Trainer! Join our community, ignite change, and
          thrive together!
        </h2>
        <hr className="mt-5 mb-3" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-5">
            <div className="w-full">
              <label className="text-white font-bold label">Name</label>
              <input
                type="text"
                name="trainer_name"
                required
                placeholder="Type here your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-white font-bold label">Age</label>
              <input
                type="number"
                name="age"
                required
                placeholder="Type here your age"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-white font-bold label">Email</label>
            <input
              type="email"
              name="email"
              placeholder={user ? user.email : ""}
              className="input border input-bordered w-full"
            />
          </div>
          <div className="w-full">
            <label className="text-white font-bold label">
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
            <label className="text-white font-bold label">Available time in a day.(Hourly)</label>
            <input
              type="number"
              name="day"
              required
              placeholder="Type here your time"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full">
            <label className="text-white font-bold label">Years of Experience</label>
            <input
              type="number"
              name="trainer_experience"
              required
              placeholder="Type here your expertise years times"
              className="input input-bordered w-full"
            />
          </div>

          {/* skills */}
          {/* <div>
            <label className="text-white font-bold label">Skills</label>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select Your Skills"
            />
            <button onClick={handlePostData}>Post to MongoDB</button>
          </div> */}

          <div className="w-full">
            <label className="text-white font-bold label">Explain why yoy best? for our team!</label>
            <textarea 
            className="input input-bordered w-full pt-1"
            placeholder="Explain now maximum 30 words"
            required
            name="trainer_short_details" id="" cols="30" rows="10"></textarea>
          </div>

          <div className="flex justify-between items-center mt-5">
            <div>
              <label className="text-white font-bold label">Profile Image</label>
              <input
                name="trainer_image"
                type="file"
                required
                className="file-input-bordered file-input-md w-full max-w-xs mt-3"
              />
            </div>
            <div>
              <input
                className=" bg-green-500 font-bold  rounded-tl-3xl rounded-br-3xl px-8 py-3 text-white"
                type="submit"
                value="Do Apply"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BeTrainer;
