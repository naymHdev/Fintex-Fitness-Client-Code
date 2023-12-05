import SectionTitle from "../../Components/SectionTitle";
// import { isTrainers } from "../../Api/Featured/Featured";
import Button from "../../Components/Button/Button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../Hooks/localAxios";

const AllTrainers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  return (
    <div className=" mt-20 mb-10 font-josefin">
      <Helmet>
        <title>Fintex-Fitness || All Trainers</title>
      </Helmet>
      <div className="md:flex grid items-center justify-between">
        <SectionTitle heading={"Manages All Trainers"} subHeading={"Manage all Trainers"} />
        <Link to="/dashboard/payment">
          <Button disabled={!users.length} label={"Pay Now"} />
        </Link>
      </div>
      <section className="mt-8 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            {/* head */}
            <thead className="border-2 border-white bg-green-500">
              <tr className="text-2xl font-bold text-white">
                <th>#</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody className="">
              {users?.map((user, index) =>
                user?.role === "trainer" ? (
                  <tr className="space-y-4" key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.trainer_name}</td>
                    <td>
                      <span className="text-green-500 font-bold">{user.trainer_experience}</span> +
                      Year
                    </td>
                    <td>{user.email}</td>
                    <td className="text-yellow-300 font-bold">{user?.payment}</td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllTrainers;
