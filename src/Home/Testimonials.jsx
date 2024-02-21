import { useEffect, useState } from "react";
import { testimonials } from "../Api/Featured/Featured";
import SectionTitle from "../Components/SectionTitle";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    testimonials().then((data) => setFeedback(data));
  }, []);

//   console.log(feedback);

  return (
    <div className="mt-12">
      <div>
        <SectionTitle
          heading={"What our customers says"}
            subHeading={"Thousands of people got benefit of our programs."}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
        {feedback.map((test) => (
          <TestimonialCard key={test._id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
