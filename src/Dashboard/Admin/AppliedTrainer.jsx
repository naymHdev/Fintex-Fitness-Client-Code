import { useEffect, useState } from "react";
import { isTrainers } from "../../Api/Featured/Featured";
import { FaEye } from "react-icons/fa";
import StatusModal from "./StatusModal";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

export const AppliedTrainer = () => {
  const [applied, setApplied] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuth();

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    isTrainers()
      .then((data) => setApplied(data))
      .catch((error) => console.log(error));
  }, []);

  const [trainerInfo, setTrainerInfo] = useState({
    trainer: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL
    }
  });

  return (
    <div className="font-josefin">
      <Helmet> <title>Fintex-Fitness || Applied Trainer</title></Helmet>
      <section className="mt-16 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            <thead className=" bg-green-500 border-2">
              <tr className="text-2xl font-bold text-white">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="border-2  border-green-500">
              {applied?.map((subs, index) => (
                <tr key={subs._id}>
                  <th>{index + 1}</th>
                  <p className="avatar">
                    <p className="mask mask-squircle w-14 h-14">
                      <img src={subs.trainer_image} alt="trainer avatar" />
                    </p>
                  </p>
                  <td>{subs.trainer_name}</td>
                  <td>
                    Experience
                    <span className="text-green-500 font-bold">{subs.trainer_experience}+</span>
                    Years
                  </td>
                  <td>{subs.email}</td>
                  <td className="btn bg-green-500" onClick={() => setIsOpen(true)}>
                    <FaEye className=" text-xl text-white" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <StatusModal closeModal={closeModal} isOpen={isOpen} trainerInfo={trainerInfo} />
    </div>
  );
};
