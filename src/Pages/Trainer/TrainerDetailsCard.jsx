/* eslint-disable react/prop-types */
import { MdVerified } from "react-icons/md";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const TrainerDetailsCard = ({ detail }) => {
  return (
    <div className="w-8/12 mx-auto mt-12">
      <section className="pb-20">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-16">
          <div>
            <img className="h-64 w-full rounded-xl" src={detail?.trainer_image} alt="" />
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-bold text-xl flex items-center gap-2">
              {detail?.trainer_name} <MdVerified className="text-blue-600" />
            </h3>
            <h4>
              Experience <span className="text-green-500">{detail?.trainer_experience}+</span> Years
            </h4>
            <p className="text-sm">{detail?.trainer_short_details}</p>
          </div>
        </div>
      </section>
      <div className="space-y-3">
        <hr />
        <div className="flex justify-center">
          <div className="space-y-3">
            <p className="font-bold text-center">
              Transform lives through personalized fitness training. <br />
              Expert guidance, tailored workouts, and unwavering support <br />
              to achieve your fitness goals. Join us today!
            </p>
            <div className="flex justify-center">
              <Link to={"/beTrainer"}>
                <Button label={" Become a Trainer"} />
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TrainerDetailsCard;
