import { newsLetters } from "../../Api/Featured/Featured";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import emailAnimation from "../../../public/email-fitness.json";

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
    <div className="grid grid-cols-1 md:grid-cols-2 mt-44 rounded-sm  bg-[#DDFFBC]">
      <form onSubmit={handleNews} className="rounded-l-xl">
        <h1 className="text-center font-bold text-3xl text-slate-800 mt-10">
          Subscribe To Our <span className="text-red-500">Newsletters</span>
        </h1>
        <div className="space-y-3 grid w-11/12 mx-auto mt-8">
          <label className="font-bold flex items-center gap-3">Name</label>
          <input
            className="p-2 border-transparent focus:outline-none input-success border-none rounded-md"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <hr />
          <label className="font-bold flex items-center gap-3">
            Submit Email
          </label>
          <input
            className="p-2 input-success border-none rounded-md border-transparent focus:outline-none"
            type="email"
            name="email"
            required
            id=""
            placeholder="example@gmail.com"
          />
          <hr />
          <label className="font-bold flex items-center gap-3">Message</label>
          <textarea
            className="border-none border-b-2 p-2 rounded-md border-transparent focus:outline-none"
            placeholder="Message"
            name="text"
            id=""
            cols=""
            rows=""
          ></textarea>
          <hr />
          <button
            type="submit"
            className="rounded-3xl py-3 px-4 border border-none hover:bg-[#52734D] bg-[#FEFFDE] text-[#52734D] hover:text-white text-xl"
          >
            Subscribe
          </button>
        </div>
      </form>
      {/* Image */}
      <div className="rounded-r-xl hover:cursor-pointer">
        <Lottie animationData={emailAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Newsletter;
