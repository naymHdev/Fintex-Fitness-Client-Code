import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../Hooks/localAxios";
import SectionTitle from "../../Components/SectionTitle";
import { MdEmail, MdVerified } from "react-icons/md";

const ManageMember = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // console.log(users);

  return (
    <>
      <div className="mt-12 font-josefin">
        <SectionTitle
          heading={"All Register all members"}
          subHeading={
            "Member Fitness Website Dashboard: Track workouts, set goals, view progress, access exclusive content, connect with trainers, and manage subscriptions seamlessly."
          }
        />
      </div>
      <div className="w-11/12 mx-auto mt-20 font-josefin">
        <div className="overflow-x-auto">
          <table className="table border-2 border-green-500 ">
            {/* head */}
            <thead className="border-2 text-3xl rounded-md border-green-500 bg-green-500 text-white font-bold font-josefin">
              <tr>
                <th>#</th>
                <th>User Status</th>
                <th>Email</th>
                <th>User Role</th>
                <th>Send Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td className="flex items-center gap-2">
                    {user.status} <MdVerified className="text-sky-500" />
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="text-3xl text-green-400">
                    <MdEmail />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageMember;
