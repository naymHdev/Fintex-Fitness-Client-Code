import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { useEffect, useState } from "react";
import { trainerClasses } from "../../Api/Featured/Featured";
import SectionTitle from "../../Components/SectionTitle";
import Button from "../../Components/Button/Button";
import { Helmet } from "react-helmet";

const Classes = () => {
  const [isClass, setIsClass] = useState([]);

  useEffect(() => {
    trainerClasses()
      .then((data) => setIsClass(data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(isClass);

  return (
    <div className="font-josefin">
      <Helmet> <title>Fintex-Fitness || Classes</title></Helmet>
      <section className="pt-[200px] bg-neutral flex items-center bg-[url('https://imagizer.imageshack.com/img923/2360/dOa8PF.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/classes">Classes</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Our <span className="text-green-400">Classes</span>
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

      <div className="mt-20">
        <SectionTitle
          heading={"Today Our Trending Classes"}
          subHeading={
            "Explore diverse fitness classes, from high-intensity cardio to mindful meditation. Achieve your fitness goals with expert trainers in a welcoming environment. Join us for a transformative journey to wellness!"
          }
        />
      </div>
      <section className="mt-20 w-8/12 mx-auto">
        <div className="space-y-5">
          {isClass?.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-md  border border-green-500 items-center"
            >
              <div>
                <img className="rounded-l-md w-full h-64" src={item?.imag} alt="" />
              </div>
              <div className="space-y-2 px-5 py-5">
                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                <h3 className="">
                  <span className="text-green-500 font-bold">Instructor: </span>
                  {item.instructorName}
                </h3>
                <h3>
                  <span className="text-green-500 font-bold">Skill: </span>
                  {item.trainerSkills}
                </h3>
                <h2>
                  <span className="text-green-500">${item.coursePrice}</span> per session
                </h2>
                <p className="text-sm">{item.description}</p>
                <div className="flex justify-end">
                  <Link to='/trainer'><Button label={"Join Now"} /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classes;
