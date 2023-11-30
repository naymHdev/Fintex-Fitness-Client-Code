import Button from "../Components/Button/Button";

const About = () => {
  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8 mt-32">
      <div className="space-y-3">
        <h3 className="text-white text-xl font-bold">About Us -----</h3>
        <h4 className="font-bold">
          Our fitness coaches can enable you to meet your wellness objectives. They can turn into
          your instructor, your helper, your mentor and your companion.
        </h4>
        <p className="text-sm">
          Our fitness tracker website offers comprehensive services to enhance your wellness
          journey. Track your daily activity, monitor heart rate, and analyze sleep patterns with
          cutting-edge technology. Access personalized workout plans, set goals, and receive
          real-time feedback for optimal progress. Sync seamlessly with mobile apps for a holistic
          approach to health. Explore a user-friendly interface that prioritizes your fitness goals,
          making every step towards a healthier lifestyle effortless and enjoyable.
        </p>
        <Button label={"Learn more about us"} />
      </div>
      <div>
        <img
          className="rounded-xl"
          src="https://fitzeous.bolvosites.com/wp-content/uploads/2018/05/cash-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
