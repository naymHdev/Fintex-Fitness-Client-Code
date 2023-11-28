import logo from "../../public/assets/Logo/fitness.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid font-josefin grid-cols-1 md:grid-cols-2 mt-20 gap-44 p-12 bg-green-500 opacity-65 text-slate-100">
      <div className="">
        <div className="flex items-center md:gap-4">
          <img className="w-24 rounded-full" src={logo} alt="" />
          <h1 className="text-3xl md:text-6xl font-bold text-white font-josefin">Fitnex</h1>
        </div>
        <p className="text-sm">
          Our fitness tracker website showcases expert coaches with diverse skills, offering
          personalized training plans, nutrition guidance, and motivation. Achieve your fitness
          goals with our knowledgeable and supportive coaches leading the way.
        </p>
        <p className="text-black font-bold mt-5">
          Fitnex Industries Ltd.
          <br />
          Providing reliable fitness services 2023
        </p>
      </div>

      <div>
        <div className="pr-0 md:pr-20">
          <h1 className="text-4xl font-bold text-white">Information</h1>
          <div className="font-bold space-y-2 mt-5">
            <p>
              Sunday – Saturday <br />
              08 : 00 AM – 10 : 00 PM GMT +1
            </p>
            <p>New York St .42</p>
            <p>(+44) 123 456 789</p>
          </div>
          <div className="flex items-center mt-8 gap-5 w-9/12  text-4xl">
            <FaFacebook className="text-sky-500" />
            <FaTwitter className="text-sky-500" />
            <FaLinkedin className="text-sky-400" />
            <FaYoutube className="text-red-600"/>
            <FaInstagram className="text-orange-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
