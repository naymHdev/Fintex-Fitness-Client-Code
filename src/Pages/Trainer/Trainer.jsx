import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import TrainerCart from "./TrainerCart";
import { useEffect, useState } from "react";
import { isTrainers } from "../../Api/Featured/Featured";
import { Helmet } from "react-helmet";
import axiosSecure from "../../Hooks/localAxios";
import { useQuery } from "@tanstack/react-query";

const Trainer = () => {
  const [trainer, setTrainer] = useState([]);

  const { data: users = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // console.log(users);


  useEffect(() => {
    isTrainers()
      .then((data) => setTrainer(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Trainer</title>
      </Helmet>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img923/8956/f2SlIF.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/gallery">Trainer</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Our <span className="text-green-400">Trainer</span>
          </h2>
          <p className="text-sm text-center text-white w-1/2 mx-auto">
            Embark on your fitness journey with cutting-edge trackers. Explore our gallery
            showcasing sleek designs, advanced features, and real-time health insights. Elevate your
            wellness experience with the latest in fitness technology.
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:mr-20" />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-9">
        {
        users?.map((info) =>
          info?.role === "trainer" ? <TrainerCart key={info._id} info={info} trainer={trainer} /> : ""
        )}
      </div>
    </div>
  );
};

export default Trainer;
