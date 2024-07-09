import Card from "./Card";
import SectionTitle from "../../Components/SectionTitle";
import axiosSecure from "../../Hooks/localAxios";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const { data: allFeatured } = useQuery({
    queryKey: ["allFeatured"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured");
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="mt-20 responsive-padding">
      <SectionTitle
        subHeading={
          "Real-time tracking for a holistic wellness experience. Transform with us!"
        }
        heading={"Ours Mains Featured"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {allFeatured?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
