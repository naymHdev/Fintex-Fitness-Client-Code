// import Banner from "./Banner/Banner";

import About from "./About";
import Featured from "./Featured/Featured";
import Newsletter from "./Newsletter/Newsletter";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <Featured />
            <About />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;