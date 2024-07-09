import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import axiosSecure from "../Hooks/localAxios";

const Testimonials = () => {
  const { data: allFeedback } = useQuery({
    queryKey: ["allFeedback"],
    queryFn: async () => {
      const res = await axiosSecure.get("/testimonials");
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="mt-12 responsive-padding">
      <div>
        <SectionTitle
          heading={"What our customers says"}
          subHeading={"Thousands of people got benefit of our programs."}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
        {allFeedback?.map((test) => (
          <TestimonialCard key={test._id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
