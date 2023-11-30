import { RiDeleteBin5Line } from "react-icons/ri";
import { ImSpinner9 } from "react-icons/im";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axiosSecure from "../../Hooks/localAxios";

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
    axiosSecure.patch(`/user/trainer/${user._id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is an admin now`);
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
              <tr className="text-2xl font-bold text-white">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="">
              {users?.map((subs, index) => (
                <tr className="space-y-3" key={subs._id}>
                  <th>{index + 1}</th>
                  <td>{subs.status}</td>
                  <td>{subs.email}</td>
                  {subs.role === "trainer" ? (
                    "Trainer"
                  ) : (
                    <td onClick={() => handleUpdate(subs)} className="btn bg-white">
                      <ImSpinner9 className=" text-xl animate-spin text-red-600" />
                    </td>
                  )}
                  <td onClick={() => handleDelete(subs)} className="btn bg-white ml-5">
                    <RiDeleteBin5Line className=" text-xl text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
