// import Banner from "./Banner/Banner";
import About from "./About";
import Coaches from "./Coaches/Coaches";
import Featured from "./Featured/Featured";
import Newsletter from "./Newsletter/Newsletter";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Slider />
            {/* <Banner /> */}
            <Featured />
            <About />
            <Testimonials />
            <Coaches />
            <Newsletter />
        </div>
    );
};

export default Home;