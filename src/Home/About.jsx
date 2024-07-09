import Lottie from "lottie-react";
import Button from "../Components/Button/Button";
import fitness from "../../public/fitness-about.json";

const About = () => {
  return (
    <div className="grid grid-cols-1 responsive-padding items-center md:grid-cols-2 h-screen gap-8 rounded-sm ">
      <div className=" md:order-last">
        <Lottie animationData={fitness} loop={true} />
      </div>
      <div className=" space-y-10">
        <h2 className=" text-primary-text text-5xl font-semibold">
          Shape Your Perfect Body
        </h2>
        <p className=" text-secondary-text font-medium">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia.
        </p>
        <div>
          <Button label="Check Schedule" />
        </div>
        <div className=" flex items-center gap-10 md:gap-20 mt-10">
          <div>
            <h1 className=" text-6xl font-medium text-primary-text">8K+</h1>
            <p className=" text-secondary-text text-2xl">Happy Clients</p>
          </div>
          <div>
            <h1 className=" text-6xl font-medium text-primary-text">8K+</h1>
            <p className=" text-secondary-text text-2xl">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
