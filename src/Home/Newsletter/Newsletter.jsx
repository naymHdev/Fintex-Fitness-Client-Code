import { MdEmail, MdOutlineDriveFileRenameOutline, MdOutlineMessage } from "react-icons/md";
import { newsLetters } from "../../Api/Featured/Featured";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleNews = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userMail = { name, email };
    try {
      await newsLetters(userMail)
      .then((data) => {
        console.log(data);
        toast.success("Thank You For Subscribe Our Newsletter");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-44 rounded-xl">
      <form onSubmit={handleNews} className="bg-green-600 py-5 rounded-l-xl">
        <h1 className="text-center font-bold text-3xl text-white">
          Subscribe To Our <span className="text-red-500">Newsletters</span>
        </h1>
        <div className="space-y-3 grid w-7/12 mx-auto mt-8">
          <label className="font-bold text-white flex items-center gap-3">
            Name <MdOutlineDriveFileRenameOutline className="text-gray-100" />
          </label>
          <input
            className="p-2 bg-green-600 input-success text-white border-none"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <hr />
          <label className="font-bold flex items-center gap-3 text-white">
            Submit Email <MdEmail className="text-1ray-600" />
          </label>
          <input
            className="p-2 bg-green-600 input-success text-white border-none"
            type="email"
            name="email"
            required
            id=""
            placeholder="example@gmail.com"
          />
          <hr />
          <label className="font-bold text-white flex items-center gap-3">
            Message <MdOutlineMessage className="text-gray-100" />
          </label>
          <textarea
            className="border-none border-b-2 p-2 bg-green-600"
            placeholder="Message"
            name="text"
            id=""
            cols=""
            rows=""
          ></textarea>
          <hr />
          <button
            type="submit"
            className="bg-green-600 text-white rounded-3xl py-3 px-4 border border-white"
          >
            Subscribe
          </button>
        </div>
      </form>
      {/* Image */}
      <div className="rounded-r-xl">
        <img
          className="w-full h-full  rounded-r-xl"
          src="https://imagizer.imageshack.com/img922/21/GTCHgg.jpg"
          alt=""
        />
        <div className="text-3xl font-bold text-white bg-yellow-600 opacity-70 p-5 w-6/12 md:-ml-8 -mt-44">
          <h3 className="text-black">Request</h3>
          <h3>Free Consultation</h3>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
