import { useQuery } from "@tanstack/react-query";
import axiosSecure from "./localAxios";

const useForum = () => {
  const { data: allForum, refetch } = useQuery({
    queryKey: ["allForum"],
    queryFn: async () => {
      const res = await axiosSecure.get("/forums");
      // console.log(res.data);
      return res.data;
    },
  });

  return [allForum, refetch];
};

export default useForum;
