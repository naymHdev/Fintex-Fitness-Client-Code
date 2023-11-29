import SectionTitle from "../../Components/SectionTitle";
import { isTrainers } from "../../Api/Featured/Featured";
import Button from "../../Components/Button/Button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const AllTrainers = () => {

  const { data: trainers = []} = useQuery({
    queryKey: ['trainerPayment'],
    queryFn: async () => {
      const res = await isTrainers();
      return res
    }
  })

  return (
    <div className=" mt-20 mb-10 font-josefin">
      <Helmet> <title>Fintex-Fitness || All Trainers</title></Helmet>
      <div className="md:flex grid items-center justify-between">
      <SectionTitle heading={"Manages All Trainers"} subHeading={"Manage all Trainers"} />
      <Link to='/dashboard/payment'><Button disabled={!trainers.length} label={'Pay Now'} /></Link>
      </div>
      <section className="mt-8 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            {/* head */}
            <thead className="border-2 border-white bg-green-500">
              <tr className="text-2xl font-bold text-white">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody className="">
              {trainers?.map((subs, index) => subs?.role === 'trainer' && subs?.payment === 'pending' ? (
                <tr className="space-y-4" key={subs._id}>
                  <th>{index + 1}</th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                      <img src={subs.trainer_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <td>{subs.trainer_name}</td>
                  <td>Experience <span className="text-green-500 font-bold">{subs.trainer_experience}+</span> Years</td>
                  <td>{subs.email}</td>
                  <td className="text-yellow-300 font-bold">{subs?.payment}</td>
                </tr>
              ) : '' )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllTrainers;
