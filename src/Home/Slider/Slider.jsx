import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../public/assets/Slider/exercise-machines-gym-without-people.jpg";
import img2 from "../../../public/assets/Slider/lady-with-long-brunette-hair-big-eyes-posing-modern-fitness-centre-near-mirror-short-sportswear.jpg";
import img3 from "../../../public/assets/Slider/pretty-strong-young-woman-doing-exercises-squatting-with-barbell-dressed-up-fashion-sportswear-sportclub.jpg";
import img4 from "../../../public/assets/Slider/woman-jogging-running-track.jpg";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="">
      <Carousel className="text-center items-center">
        <div>
          <img className="opacity-50" src={img2} />
          <div className="-mt-[500px] text-start w-1/2 mx-16 text-white space-y-2 pb-8">
            <p className="uppercase text-sm">fitnex GYM CENTER</p>
            <h1 className="uppercase text-4xl font-bold">
              Lets Join <span className="text-green-500">Gym Member</span> <br /> & Fitness Trainer
            </h1>
            <p className="text-sm pb-5">
              Embark on your fitness journey with cutting-edge trackers. Explore our gallery <br />{" "}
              showcasing sleek designs, advanced features
            </p>
            <Link to="/classes">
              <Button label={"Our Classes"} />
            </Link>
          </div>
        </div>
        <div>
          <img className="opacity-50" src={img4} />
          <div className="-mt-[500px] text-start w-1/2 mx-16 text-white space-y-2">
            <p className="uppercase text-sm">fitnex GYM CENTER</p>
            <h1 className="uppercase text-4xl font-bold">
              Your Journey <span className="text-green-500">Cutting-Edge</span> <br />
              Tracking Solutions.
            </h1>
            <p className="text-sm pb-5">
              Empower your fitness journey with our cutting-edge fitness trackers. Track your
              progress, set goals, and achieve new heights. Elevate your wellness with precision
              technology. Start your transformative experience today!
            </p>
            <Link to="/classes">
              <Button label={"Our Classes"} />
            </Link>
          </div>
        </div>
        <div>
          <img className="opacity-50" src={img3} />
          <div className="-mt-[500px] text-start w-1/2 mx-16 text-white space-y-2">
            <p className="uppercase text-sm">fitnex GYM CENTER</p>
            <h1 className="uppercase text-4xl font-bold">
              Your <span className="text-green-500">Fitness Journey</span> <br />
              Precision Tracking.
            </h1>
            <p className="text-sm pb-5">
              Empower your journey to wellness with our cutting-edge fitness tracker. Track your
              progress, set goals, and embrace a healthier lifestyle. Elevate your fitness
              experience with precision and style. Start today!
            </p>
            <Link to="/classes">
              <Button label={"Our Classes"} />
            </Link>
          </div>
        </div>
        <div>
          <img className="opacity-50" src={img1} />
          <div className="-mt-[500px] text-start w-1/2 mx-16 text-white space-y-2">
            <p className="uppercase text-sm">fitnex GYM CENTER</p>
            <h1 className="uppercase text-4xl font-bold">
              Journey <span className="text-green-500">Track, Achieve,</span> <br /> Transform with
              Precision.
            </h1>
            <p className="text-sm pb-5">
              Embark on your fitness journey with our cutting-edge fitness tracker. Track workouts,
              monitor health metrics, and achieve your goals effortlessly. Elevate your fitness
              experience. Start today
            </p>
            <Link to="/classes">
              <Button label={"Our Classes"} />
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
