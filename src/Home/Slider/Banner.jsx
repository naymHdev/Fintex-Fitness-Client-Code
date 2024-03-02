import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../../public/assets/Slider/slider1.png";
import img2 from "../../../public/assets/Slider/slider2.png";
import img3 from "../../../public/assets/Slider/slider3.png";
import img4 from "../../../public/assets/Slider/slider4.png";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={img2} />
            <div className="md:-mt-[500px] -mt-44 text-start md:w-1/2 md:mx-16 text-slate-700 md:space-y-2 md:pb-8">
              <p className="uppercase text-sm">fitnex GYM CENTER</p>
              <h1 className="uppercase md:text-4xl font-bold">
                Lets Join <span className="text-green-900">Gym Member</span>{" "}
                <br /> & Fitness Trainer
              </h1>
              <p className="text-sm md:pb-5">
                Embark on your fitness journey with cutting-edge trackers.
                Explore our gallery <br /> showcasing sleek designs, advanced
                features
              </p>
              <Link to="/classes">
                <Button label={"Our Classes"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={img4} />
            <div className="md:-mt-[500px] -mt-44 text-start md:w-1/2 w-full md:mx-16 md:mb-8 text-slate-800 md:space-y-2">
              <p className="uppercase text-sm">fitnex GYM CENTER</p>
              <h1 className="uppercase md:text-4xl font-bold">
                Your Journey{" "}
                <span className="text-green-500">Cutting-Edge</span> <br />
                Tracking Solutions.
              </h1>
              <p className="text-sm md:pb-5">
                Empower your fitness journey with our cutting-edge fitness
                trackers. Track your progress, set goals!
              </p>
              <Link to="/classes">
                <Button label={"Our Classes"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={img3} />
            <div className="-mt-44 md:-mt-[500px] text-start md:w-1/2 md:mx-16 text-slate-800 md:space-y-2">
              <p className="uppercase text-sm">fitnex GYM CENTER</p>
              <h1 className="uppercase md:text-4xl font-bold">
                Your <span className="text-green-500">Fitness Journey</span>{" "}
                <br />
                Precision Tracking.
              </h1>
              <p className="text-sm md:pb-5">
                and embrace a healthier lifestyle. Elevate your fitness
                experience with precision and style. Start today!
              </p>
              <Link to="/classes">
                <Button label={"Our Classes"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img1} />
            <div className="-mt-44 md:-mt-[500px] text-start md:w-1/2 md:mx-16 text-slate-800 md:space-y-2">
              <p className="uppercase text-sm">fitnex GYM CENTER</p>
              <h1 className="uppercase md:text-4xl font-bold">
                Journey <span className="text-green-500">Track, Achieve,</span>{" "}
                <br /> Transform with Precision.
              </h1>
              <p className="text-sm md:pb-5">
                achieve your goals effortlessly. Elevate your fitness
                experience. Start today
              </p>
              <Link to="/classes">
                <Button label={"Our Classes"} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
