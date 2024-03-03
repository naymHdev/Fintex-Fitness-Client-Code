/* eslint-disable react/prop-types */
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const TrainerCart = ({ info }) => {
  const { trainer_experience, trainer_image, trainer_name, week, day, _id } =
    info || {};

  return (
    <div>
      <section>
        <section className="border border-[#52734D] rounded-2xl">
          <div>
            <img
              className="rounded-t-2xl w-full h-64"
              src={trainer_image}
              alt=""
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between">
              <div className="space-y-2">
                <h3 className=" text-slate-900 font-bold text-xl flex items-center gap-2">
                  {trainer_name} <MdVerified className="text-blue-600" />
                </h3>
                <h4>
                  Experience{" "}
                  <span className="text-green-500">{trainer_experience}+</span>{" "}
                  Years
                </h4>
                <h2 className="font-bold flex items-center gap-2">
                  Available Time <CiTimer className="text-xl text-green-400" />
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm border-r-2 pr-2">
                    Weekly{" "}
                    <span className="text-green-400 font-bold">{week}</span>{" "}
                    Hour
                  </p>
                  <p className="text-sm">
                    Daily{" "}
                    <span className="text-green-400 font-bold">{day}</span> Hour
                  </p>
                </div>
              </div>
              <div className=" space-y-3 hover:cursor-pointer ">
                <FaFacebook className="text-[#1877F2] trainer-icons" />
                <FaTwitter className="text-[#1DA1F2] trainer-icons" />
                <FaLinkedin className="text-[#0A66C2] trainer-icons" />
                <FaYoutube className="text-red-500 trainer-icons" />
                <FaInstagram className="text-[#E1306C] trainer-icons" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-5">
              <div>
                <Link to={"/pricing"}>
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
      </section>
    </div>
  );
};

export default TrainerCart;