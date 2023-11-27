import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { isTrainers } from "../../Api/Featured/Featured";
import Button from "../../Components/Button/Button";

const AllTrainers = () => {
  const [trainers, serTrainers] = useState([]);

  useEffect(() => {
    isTrainers()
      .then((data) => serTrainers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" mt-20 mb-10">
      <div className="md:flex grid items-center justify-between">
      <SectionTitle heading={"Manages All Trainers"} subHeading={"Manage all subscribers"} />
      <Button label={'Pay Now'} />
      </div>
      <section className="mt-16 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            {/* head */}
            <thead className=" bg-green-500 border-2">
              <tr className="text-2xl font-bold text-white">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="border-2  border-green-500">
              {trainers?.map((subs, index) => (
                <tr key={subs.index}>
                  <th>{index + 1}</th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                      <img src={subs.trainer_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <td>{subs.trainer_name}</td>
                  <td>Experience <span className="text-green-500 font-bold">{subs.trainer_experience}+</span> Years</td>
                  <td>{subs.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllTrainers;
