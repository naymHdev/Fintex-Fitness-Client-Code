import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import Button from "../../Components/Button/Button";
import { SiVerizon } from "react-icons/si";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <div className="font-josefin">
      <Helmet> <title>Fintex-Fitness || Pricing</title></Helmet>
      <section className="pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img922/1319/A6x4Hb.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-black bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/beTrainer">Pricing</Link>
          </div>
          <h2 className="text-6xl font-bold text-black text-center">
            Our <span className="text-green-400">Pricing</span>
          </h2>
          <p className="text-sm text-center text-black w-1/2 mx-auto">
            Embark on a fulfilling journey with Be a Trainer! Shape the fitness landscape, share
            your expertise, and inspire others to lead healthier lives. Join our community, ignite
            change, and thrive together!
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:mr-20" />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-16">
        <div>
          <p className="text-sm text-green-500 uppercase">GYM ACHIVEMENT</p>
          <h2 className="text-white font-bold text-2xl">
            Be a One From The Great Body Building With Our Gym Center & Trainer
          </h2>
        </div>
        <div>
          <div>
            <p className="text-sm">
              Unlock premium fitness with our membership pricing. Tailored plans, exclusive classes,
              and expert guidance. Join us on your journey to a healthier you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 border mt-5 rounded-md border-green-400 p-5">
              <div className="text-center border-r-2 border-green-300">
                <h2 className="text-2xl font-bold text-green-400">100+</h2>
                <h3 className="font-bold">OFFICIAL BRANCH</h3>
              </div>
              <div className="text-center border-r-2 border-green-300">
                <h2 className="text-2xl font-bold text-green-400">50+</h2>
                <h3 className="font-bold">PRICING MEMBER</h3>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-400">500+</h2>
                <h3 className="font-bold">TOTALS TRAINER</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
        <div className="border text-start p-8 space-y-6 border-green-500 rounded-xl">
          <div className="space-y-3">
            <button className="text-4xl font-bold bg-green-500 text-white rounded-md p-3">
              Silver
            </button>
            <h3 className="text-xl font-bold">$100</h3>
          </div>
          <hr />
          <div className="space-y-2">
            <h3 className="mb-8">Basic membership</h3>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" /> 
              Access to gym equipment
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Standard classes
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Weekly progress tracking
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Enhanced membership
            </p>
          </div>
          <hr />
          <div className="flex justify-center">
            <Button label={"Book Now"} />
          </div>
        </div>
        <div className="border text-start p-8 space-y-6 border-green-500 rounded-xl">
          <div className="space-y-3">
            <button className="text-4xl font-bold bg-green-500 text-white rounded-md p-3">
              Golden
            </button>
            <h3 className="text-xl font-bold">$300</h3>
          </div>
          <hr />
          <div className="space-y-2">
            <h3 className="mb-8">Enhanced membership</h3>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" /> 
              Access to premium equipment
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Advanced classes
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Nutritional guidance
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Monthly personal training session
            </p>
          </div>
          <hr />
          <div className="flex justify-center">
            <Button label={"Book Now"} />
          </div>
        </div>
        <div className="border text-start p-8 space-y-6 border-green-500 rounded-xl">
          <div className="space-y-3">
            <button className="text-4xl font-bold bg-green-500 text-white rounded-md p-3">
            Diamond
            </button>
            <h3 className="text-xl font-bold">$600</h3>
          </div>
          <hr />
          <div className="space-y-2">
            <h3 className="mb-8">Elite membership</h3>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" /> 
              Unlimited access to all facilities
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Personalized workout plans
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              Weekly personal training sessions
            </p>
            <p className="flex items-center gap-2">
              <SiVerizon className="text-green-500 text-2xl" />
              24/7 priority support
            </p>
          </div>
          <hr />
          <div className="flex justify-center">
            <Button label={"Book Now"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
