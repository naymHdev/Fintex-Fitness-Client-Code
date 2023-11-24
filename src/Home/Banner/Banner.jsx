/* eslint-disable react/jsx-key */
import Slide from "./Slide";

const Banner = () => {

  const items =  [
    <img className="rounded-md bg-cover" src="https://imagizer.imageshack.com/img922/2025/eKqHNN.jpg" alt="" />,
    <img className="rounded-md bg-cover" src="https://imagizer.imageshack.com/img922/4679/qCDNsc.jpg" alt="" />,
    <img className="rounded-md bg-cover" src="https://imagizer.imageshack.com/img923/6483/2kEIHS.jpg" alt="" />,
  ];

  return (
    <div>
      <div className="w-full flex items-center justify-center overflow-hidden">
        <Slide  items={items} />
      </div>
    </div>
  );
};

export default Banner;
