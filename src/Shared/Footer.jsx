import { Link } from "react-router-dom";
import logo from "../../public/assets/Logo/fitness.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid responsive-padding font-josefin grid-cols-1 md:grid-cols-2 mt-20 gap-44 bg-primary-bg">
        <div className="">
          <Link to="/">
            <div className="flex items-center md:gap-4">
              <img className="w-24 rounded-full" src={logo} alt="" />
              <h1 className="text-3xl md:text-6xl font-bold text-white font-josefin">
                Fitnex
              </h1>
            </div>
          </Link>
          <p className="text-sm">
            Our fitness tracker website showcases expert coaches with diverse
            skills, offering personalized training plans, nutrition guidance,
            and motivation. Achieve your fitness goals with our knowledgeable
            and supportive coaches leading the way.
          </p>
          <p className="text-[#FEFFDE] font-bold mt-5">
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
              <a
                href="https://www.facebook.com/naymhossen1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="auth-icons text-sky-500" />
              </a>
              <a
                href="https://twitter.com/naymhossen1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="auth-icons text-sky-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/naymhossen1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="auth-icons text-sky-400" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="auth-icons text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/__mr____naym_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="auth-icons text-orange-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full border-b border-black"></div>
      <div className=" bg-primary-bg py-8 responsive-padding">
        <div className=" flex items-center gap-1 justify-between">
          <p>
            Copyright © 2024 - All right reserved by
            <a
              className="underline px-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://naymhossen1b.netlify.app"
            >
              Naym Hossen
            </a>
          </p>
          <div className=" flex items-center gap-2 hover:cursor-pointer text-primary-text">
            <p>Terms And Condition</p> | <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
