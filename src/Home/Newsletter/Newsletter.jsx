import { newsLetters } from "../../Api/Featured/Featured";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import emailAnimation from "../../../public/email-fitness.json";
import Button from "../../Components/Button/Button";

const Newsletter = () => {
  const handleNews = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userMail = { name, email };
    try {
      await newsLetters(userMail).then((data) => {
        console.log(data);
        toast.success("Thank You For Subscribe Our Newsletter");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="md:flex grid grid-cols-1 items-center justify-around mt-36 p-2 w-full md:w-10/12 mx-auto  rounded-md bg-[#DDFFBC]">
        <form onSubmit={handleNews} className="rounded-l-xl">
          <h1 className="text-center font-bold text-3xl text-slate-800 mt-10">
            Subscribe To Our <span className="text-red-500">Newsletters</span>
          </h1>
          <div className="grid w-11/12 mx-auto mt-4 space-y-3">
            <input
              className="p-2 bg-[#FEFFDE] border-transparent focus:outline-none input-success border-none rounded-md"
              type="text"
              name="name"
              required
              placeholder="Name"
            />
            <input
              className="p-2 bg-[#FEFFDE] input-success border-none rounded-md border-transparent focus:outline-none"
              type="email"
              name="email"
              required
              id=""
              placeholder="example@gmail.com"
            />
            <textarea
              className="border-none bg-[#FEFFDE] border-b-2 p-2 rounded-md border-transparent focus:outline-none"
              placeholder="Message"
              name="text"
              id=""
              cols=""
              rows=""
            ></textarea>
            <div className="flex justify-end items-center">
              <Button label="Subscribe" />
            </div>
          </div>
        </form>
        {/* Image */}
        <div className="rounded-r-xl hover:cursor-pointer md:w-80 order-first md:order-last">
          <Lottie animationData={emailAnimation} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
