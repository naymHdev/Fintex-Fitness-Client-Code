/* eslint-disable react/prop-types */
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const TrainerCart = ({ info }) => {
  const { trainer_name, trainer_image, trainer_experience, _id, trainer_short_details } =
    info || {};

  return (
    <div>
      <section className="border border-green-500 rounded-2xl">
        <div>
          <img className="rounded-t-2xl w-full h-64" src={trainer_image} alt="" />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-xl flex items-center gap-2">
                {trainer_name} <MdVerified className="text-blue-600" />
              </h3>
              <h4>
                Experience <span className="text-green-500">{trainer_experience}+</span> Years
              </h4>
              <p className="text-sm">{trainer_short_details}</p>
            </div>
            <div className=" space-y-3 hover:cursor-pointer">
              <FaFacebook className="text-[#1877F2]" />
              <FaTwitter className="text-[#1DA1F2]" />
              <FaLinkedin className="text-[#0A66C2]" />
              <FaYoutube className="text-red-500" />
              <FaInstagram className="text-[#E1306C]" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div>
              <Link to={'/pricing'}>
                <Button label={"Available Slots"} />
              </Link>
            </div>
            <div>
              <Link to={`/trainerDetails/${_id}`}>
                <Button label={"Know more"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainerCart;
