import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { useEffect, useState } from "react";
import { trainerClasses } from "../../Api/Featured/Featured";

const Classes = () => {
  const [isClass, setIsClass] = useState([]);

  useEffect(() => {
    trainerClasses()
      .then((data) => setIsClass(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(isClass);

  return (
    <div>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img923/8956/f2SlIF.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
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

      <section className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            isClass?.map( item => (
              <div key={item._id}>
                <img src={item?.imag} alt="" />
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Classes;
