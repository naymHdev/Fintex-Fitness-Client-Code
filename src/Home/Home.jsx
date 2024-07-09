// import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";
import Coaches from "./Coaches/Coaches";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials";
import Banner from "./Slider/Banner";
import About from "./About";
import Yoga from "./Yoga/Yoga";

const Home = () => {
  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Home</title>
      </Helmet>
      <Banner />
      <About />
      <Yoga />
      <Featured />
      <Testimonials />
      <Coaches />
    </div>
  );
};

export default Home;
