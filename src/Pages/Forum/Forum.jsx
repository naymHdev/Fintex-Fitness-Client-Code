import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { fitnessForums } from "../../Api/Featured/Featured";
import ForumCart from "./ForumCart";

const Forum = () => {

  const [forums, setForums] = useState([]);

  useEffect(() => {
    fitnessForums()
    .then( data => setForums(data))
    .catch( error => console.log(error))
  }, [])


  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Forum</title>
      </Helmet>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img924/999/zwQvNA.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/forum">Forum</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Our <span className="text-green-400">Forums</span>
          </h2>
          <p className="text-sm text-center text-white w-1/2 mx-auto">
            Discover a vibrant community on our fitness forum—share triumphs, seek advice, and
            cultivate motivation. Join discussions spanning workouts, nutrition, and well-being.
            Your journey to a healthier, happier you starts here!
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:mr-20" />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {forums?.map((forum) => (
          <ForumCart key={forum._id} forum={forum} />
        ))}
      </section>
    </div>
  );
};

export default Forum;
