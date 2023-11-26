import { useEffect, useState } from "react";
import { subscribers } from "../Api/Featured/Featured";

/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  const [subscriber, setSubscriber] = useState([]);

  useEffect(() => {
    subscribers()
      .then((data) => setSubscriber(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-10/12 mx-auto mt-20">
      <p className="text-3xl ml-3 font-bold text-white">{heading}</p>
      <h1 className="text-sm ml-3">{subHeading}</h1>
      <section className="mt-16 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-2xl font-bold text-green-500">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {subscriber?.map((subs, index) => (
                <tr key={subs.index}>
                  <th>{index+1}</th>
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

export default SectionTitle;
