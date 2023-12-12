import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import useAuth from "../../Hooks/useAuth";
import { FaRegImage, FaArrowsSpin } from "react-icons/fa6";
import { MdOutlineEmojiEmotions, MdOutlineEventAvailable } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { imageUpload } from "../../Api/Utils/Utils";
import { useEffect, useState } from "react";
import { postChallenges, testimonials } from "../../Api/Featured/Featured";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../Hooks/localAxios";
import ChallengeCard from "./ChallengeCard";
import moment from "moment";
import News from "./News";
import { VscFeedback } from "react-icons/vsc";

const Challenges = () => {
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState("Upload Image");
  const { user } = useAuth();

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    testimonials().then((data) => setFeedback(data));
  }, []);

  const { data: isChallenges = [] } = useQuery({
    queryKey: ["challenges"],
    queryFn: async () => {
      const res = await axiosSecure.get("/challenge");
      return res.data;
    },
  });

  const handlePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const content = form.content.value;
    const photoURL = user?.photoURL;
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    const images = form.image.files[0];
    const image_url = await imageUpload(images);

    const postContent = { photoURL, time, content, imag: image_url?.data?.display_url };
    try {
      await postChallenges(postContent);
      toast.success("Post success!");
      setUpload("Uploaded!");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImage = (image) => {
    console.log(image);
    setUpload(image.name);
  };

  if (loading) {
    return (
      <span>
        <FaArrowsSpin className="text-7xl text-red-400 text-center min-h-screen animate-spin" />
      </span>
    );
  }

  // console.log(isChallenges)

  return (
    <div className="font-josefin bg-green-200">
      <Helmet>
        <title>Fintex-Fitness || Trainer</title>
      </Helmet>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img924/271/56anlJ.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/gallery">Challenges</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Share <span className="text-green-400">Challenge</span>
          </h2>
          <p className="text-sm text-center text-white w-1/2 mx-auto">
            Enable users to connect, share achievements, and participate in fitness challenges,
            fostering a supportive community within the fitness website.
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:mr-20" />
        </div>
      </section>
      {/* posting section */}
      <form className="mt-8" onSubmit={handlePost}>
        <div className="grid md:flex gap-8 ">
          <section className="w-8/12  bg-green-200 rounded-md ">
            <div className="flex items-center gap-4 border border-gray-600 rounded-t-md px-3 md:ml-5 bg-gray-300 gap-3shadow-md py-2">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
              <div className="w-full text-slate-50">
                <input
                  type="text"
                  name="content"
                  placeholder="Type here your challenges!"
                  className="input bg-gray-300 rounded-full text-black input-bordered w-full"
                  style={{ border: "none" }}
                />
              </div>
              <div>
                <h2>{upload}</h2>
              </div>
            </div>
            <div className="px-8 py-3 justify-between flex items-center border-b border-r border-l bg-gray-300 border-gray-600 rounded-b-md md:ml-5">
              <div className="flex items-center gap-3 pl-14">
                <div>
                  <label className="cursor-pointer">
                    <input
                      onChange={(e) => handleImage(e.target.files[0])}
                      className="hidden"
                      type="file"
                      name="image"
                      id=""
                    />
                    <FaRegImage className="text-3xl text-green-500" />
                  </label>
                </div>
                <div className="flex items-center gap-3 text-3xl cursor-pointer text-green-500">
                  <MdOutlineEmojiEmotions />
                  <IoLocationOutline />
                  <MdOutlineEventAvailable />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-green-600 text-white font-bold"
                >
                  Post
                </button>
              </div>
            </div>
            <div className="w-9/12 mx-auto px-3 py-5 space-y-5">
              {isChallenges?.map((challeng) => (
                <ChallengeCard key={challeng._id} challeng={challeng} />
              ))}
            </div>
          </section>
          {/* Right Side section news section */}
          <section>
            <h2 className="text-right flex items-center gap-3 text-4xl font-bold mt-44 text-black">
              <VscFeedback className="text-3xl" /> User Feedback
            </h2>
            <div className="grid grid-cols-1 w-8/12 mt-8 space-y-16">
              {feedback.map((test) => (
                <News key={test} test={test} />
              ))}
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Challenges;
