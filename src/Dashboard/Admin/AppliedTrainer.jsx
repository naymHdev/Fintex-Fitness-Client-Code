import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axiosSecure from "../../Hooks/localAxios";
import AppliedTable from "./AppliedTable";

export const AppliedTrainer = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  // console.log(users);

  const handleDelete = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/user/trainer/${user._id}`);
        if (res.data.deletedCount > 0) {
          toast.success(`${user.displayName} has been deleted`);
          refetch();
        }
      }
    });
  };

  const handleUpdate = (user) => {
    axiosSecure.patch(`/user/trainer/${user.email}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`User is an trainer now`);
      } else {
        toast.error("Trainer Applied Failed");
      }
    });
  };

  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Applied Trainer</title>
      </Helmet>
      <section className="mt-16 border-t-2 border-b-2 border-green-400 md:py-8 md:px-12">
        <div className="">
          <table className="table">
            <thead className=" bg-green-500 border-2">
              <tr className="text-2xl font-bold text-white flex items-center justify-evenly">
                <th>#</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Email</th>
                <th>Approved</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((subs, index) =>
                subs.age > 0 ? (
                  <AppliedTable
                    key={subs._id}
                    subs={subs}
                    index={index}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  />
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
