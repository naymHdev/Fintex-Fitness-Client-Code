import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { useForm } from "react-hook-form";
// import axiosSecure from "../../Hooks/localAxios";
import LockAxios from "../../Hooks/LockAxios";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
// import { MultiSelect } from "react-multi-select-component";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const BeTrainer = () => {
  const publicAxios = LockAxios();
  const isAxios = LockAxios();
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const getImage = { image: data.image[0] };
    const res = await publicAxios.post(imageHostingApi, getImage, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const dataInfo = {
        name: data.name,
        email: user?.email,
        age: parseFloat(data.age),
        day: data.day,
        week: data.week,
        image: res.data.data.display_url,
      };
      const addUser = await isAxios.post("/trainers", dataInfo);
      if (addUser.data.insertedId) {
        toast.success(`${data.name} Successfully Added`);
        reset();
      }
      toast.error(`${data.name} Not Added!`);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-5">
            <div className="w-full">
              <label className="text-white font-bold label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Type here your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-white font-bold label">Age</label>
              <input
                {...register("age", { required: true })}
                type="number"
                name="age"
                placeholder="Type here your age"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-white font-bold label">Email</label>
            <input
            //   {...register("email", { required: true })}
              type="email"
              name="email"
              placeholder={user ? user.email : ''}
              className="input border input-bordered w-full"
            />
          </div>

          {/* Day Time Slot */}
          <div className="form-control w-full">
            <label className="label">
              <span className=" font-bold text-white">Available time in a day.</span>
            </label>
            <select
              {...register("day", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="default" disabled selected>
                Chose your time
              </option>
              <option value="14">2 Hour</option>
              <option value="21">3 Hour</option>
              <option value="28">5 Hour</option>
              <option value="35">6 Hour</option>
              <option value="42">8 Hour</option>
            </select>
          </div>
          {/* weekly Time Slot */}
          <div className="form-control w-full">
            <label className="label">
              <span className=" font-bold text-white">Available Time in a week</span>
            </label>
            <select
              {...register("week", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="default" disabled selected>
                Chose your time
              </option>
              <option value="14">14 Hour</option>
              <option value="21">21 Hour</option>
              <option value="28">28 Hour</option>
              <option value="35">35 Hour</option>
              <option value="42">42 Hour</option>
            </select>
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

          <div className="flex justify-between items-center mt-5">
            <div>
              <input
                {...register("image", { required: true })}
                type="file"
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
