import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import TrainerDetailsCard from "./TrainerDetailsCard";
import { Helmet } from "react-helmet";
import axiosSecure from "../../Hooks/localAxios";
import { useQuery } from "@tanstack/react-query";

const TrainerDetails = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const { id } = useParams();

  const detail = users.find((item) => item._id === id);

  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Trainer Details</title>
      </Helmet>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img922/4702/l3Q0eW.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-[#FEFFDE] md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-black bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-[#FEFFDE] text-2xl " />
            <Link to="/trainerDetails">Trainer Details</Link>
          </div>
          <h2 className="text-6xl font-bold text-black text-center">
            Trainer <span className="text-[#52734D]">Details</span>
          </h2>
          <p className="text-sm text-center text-black w-1/2 mx-auto">
            Embark on your fitness journey with cutting-edge trackers. Explore
            our gallery showcasing sleek designs, advanced features, and
            real-time health insights. Elevate your wellness experience with the
            latest in fitness technology.
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-[#FEFFDE] md:mr-20" />
        </div>
      </section>
      <section>
        <TrainerDetailsCard detail={detail} />
      </section>
    </div>
  );
};

export default TrainerDetails;
