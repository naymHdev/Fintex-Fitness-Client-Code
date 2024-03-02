import Lottie from "lottie-react";
import Button from "../Components/Button/Button";
import fitness from "../../public/fitness-about.json";

const About = () => {
  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2 md:mt-8 mt-0 gap-8 rounded-sm bg-[#FEFFDE]">
      <div className=" md:order-last">
        <Lottie animationData={fitness} loop={true} />
      </div>
      <div className="px-3">
        <h3 className=" text-[#52734D] text-xl font-bold">About Us -----</h3>
        <h4 className="font-bold text-slate-950 mt-5">
          Our fitness coaches can enable you to meet your wellness objectives.
          They can turn into your instructor, your helper, your mentor and your
          companion.
        </h4>
        <p className="text-sm text-slate-600 mt-3 mb-8">
          Our fitness tracker website offers comprehensive services to enhance
          your wellness journey. Track your daily activity, monitor heart rate,
          and analyze sleep patterns with cutting-edge technology. Access
          personalized workout plans, set goals, and receive real-time feedback
          for optimal progress. Sync seamlessly with mobile apps for a holistic
          approach to health. Explore a user-friendly interface that prioritizes
          your fitness goals, making every step towards a healthier lifestyle
          effortless and enjoyable.
        </p>
        <Button label={"Learn more about us"} />
      </div>
    </div>
  );
};

export default About;
