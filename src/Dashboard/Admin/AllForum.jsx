import { Helmet } from "react-helmet";
import useForum from "../../Hooks/useForum";
import MenuListComposition from "./MenuListComposition";

const AllForum = () => {
  const [allForum] = useForum();

  //const { content, text, texts, photoURL, time, displayName, role } = forum || {};

  return (
    <>
      <Helmet>
        <title>Fintex-Fitness || All Forum</title>
      </Helmet>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-josefin">
        {allForum?.map((forum) => (
          <section
            key={forum._id}
            className=" border rounded-md p-2 shadow-lg space-y-4"
          >
            <div className=" flex items-center justify-between">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={forum?.photoURL} />
                </div>
              </div>
              <div>
                <MenuListComposition />
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold">{forum?.displayName}</h3>
              <p>
                <span className="text-[15px] font-bold">Published:</span>{" "}
                <span className="font-bold text-green-700">{forum?.role}</span>
              </p>
              <p className="text-sm mt-1">{forum?.time}</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-700">{forum?.texts}</p>
            </div>
            <div className=" space-y-3">
              <p>{forum?.content}</p>
              <h4>{forum?.text}</h4>
            </div>
            <div className=" text-slate-50 flex items-center justify-evenly font-bold rounded-md bg-slate-600 p-1">
                <div>Total Like: <span className=" text-green-500 underline">300</span></div>
                <div>Total Dislike: <span className="underline text-red-500">300</span></div>
            </div>
          </section>
        ))}
      </section>
    </>
  );
};

export default AllForum;
