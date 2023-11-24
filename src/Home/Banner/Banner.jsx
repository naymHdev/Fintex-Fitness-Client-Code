import { Carousel } from 'react-responsive-carousel';

import image1 from '../../../public/assets/banner/slider1.webp'
import image2 from '../../../public/assets/banner/slider2.webp'
import image3 from '../../../public/assets/banner/sli3.jpg'


const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
