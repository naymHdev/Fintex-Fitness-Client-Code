// import Banner from "./Banner/Banner";

import About from "./About";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <Featured />
            <About />
            <Testimonials />
        </div>
    );
};

export default Home;