import { useQuery } from "@tanstack/react-query";
import axiosSecure from "./localAxios";
import useAuth from "./useAuth";


const useTrainer = () => {

    const { user, loading } = useAuth();

    const { data: isTrainer, isPending: isTrainerLoading, refetch } = useQuery({
        queryKey: ["isTrainer"],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
          const res = await axiosSecure?.get(`/user/trainer/${user?.email}`);
          console.log(res.data);
          return res?.data?.trainer;
        },
      });
      return [isTrainer, isTrainerLoading, refetch]
};

export default useTrainer;