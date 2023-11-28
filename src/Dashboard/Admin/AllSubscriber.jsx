import { Helmet } from "react-helmet";
import { subscribers } from "../../Api/Featured/Featured";
import SectionTitle from "../../Components/SectionTitle";
import { useEffect, useState } from "react";

const AllSubscriber = () => {
  const [subscriber, setSubscriber] = useState([]);

  useEffect(() => {
    subscribers()
      .then((data) => setSubscriber(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-10/12 mx-auto mt-20 mb-10 font-josefin">
      <Helmet> <title>Fintex-Fitness || All Subscribers</title></Helmet>
      <SectionTitle heading={"All Subscribers"} subHeading={"Manage all subscribers"} />
      <section className="mt-16 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            {/* head */}
            <thead className="border-2 border-white bg-green-500">
            <tr className="text-2xl font-bold text-white">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {subscriber?.map((subs, index) => (
                <tr key={subs.index}>
                  <th>{index + 1}</th>
                  <td>{subs.name}</td>
                  <td>{subs.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllSubscriber;
