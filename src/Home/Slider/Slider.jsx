import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../public/assets/Slider/exercise-machines-gym-without-people.jpg";
import img2 from "../../../public/assets/Slider/lady-with-long-brunette-hair-big-eyes-posing-modern-fitness-centre-near-mirror-short-sportswear.jpg";
import img3 from "../../../public/assets/Slider/pretty-strong-young-woman-doing-exercises-squatting-with-barbell-dressed-up-fashion-sportswear-sportclub.jpg";
import img4 from "../../../public/assets/Slider/woman-jogging-running-track.jpg";

const Slider = () => {
  return (
    <div className="">
      <Carousel className="text-center items-center">
        <div>
          <img src={img1} />
          <div className="-mt-20">
            <p>Hi Get On The Gym Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam illo similique praesentium, laboriosam magnam id repudiandae fugit. Minima, neque.</p>
          </div>
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
