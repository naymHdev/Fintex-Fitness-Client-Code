// import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet";
import About from "./About";
import Coaches from "./Coaches/Coaches";
import Featured from "./Featured/Featured";
import Newsletter from "./Newsletter/Newsletter";
// import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials";
import LatestArticals from "./Articals/LatestArticals";
import Bmi from "../Components/BMI/Bmi";
import Banner from "./Slider/Banner";

const Home = () => {
  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Home</title>
      </Helmet>
      {/* <Slider /> */}
      <Banner />
      <Featured />
      <About />
      <Testimonials />
      <Coaches />
      <Newsletter />
      <LatestArticals />
      <Bmi />
    </div>
  );
};

export default Home;
