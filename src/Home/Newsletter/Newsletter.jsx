import { newsLetters } from "../../Api/Featured/Featured";
import toast from "react-hot-toast";
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
      <div className="mt-36 p-2 w-full md:w-10/12 mx-auto rounded-md bg-[url(https://i.ibb.co/4jvN123/William-ancient-Nabataean-skyline-silhouette-illustration-in-wh-103991fb-43ed-491b-ba65-da519d4d0236.png)] bg-cover">
        <form onSubmit={handleNews} className="rounded-l-xl py-10">
          <h1 className="text-center font-bold text-3xl text-slate-100">
            Subscribe To Our <span className="text-red-500">Newsletters</span>
          </h1>
          <div className="grid w-11/12 mx-auto mt-4 space-y-3">
            <div className=" flex items-center justify-center gap-5">
              <input
                className="p-2 bg-gray-300 border-transparent focus:outline-none input-success border-none rounded-md w-full"
                type="text"
                name="name"
                required
                placeholder="Name"
              />
              <input
                className="p-2 bg-gray-300 input-success border-none rounded-md border-transparent focus:outline-none w-full"
                type="email"
                name="email"
                required
                id=""
                placeholder="example@gmail.com"
              />
            </div>
            <div className=" md:flex items-center gap-5">
              <textarea
                className="border-none bg-gray-300 border-b-2 p-2 rounded-md border-transparent focus:outline-none w-full"
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
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
