import { useEffect, useState } from "react";
import { testimonials } from "../Api/Featured/Featured";

const Testimonials = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    testimonials().then((data) => setFeedback(data));
  }, []);

  return (
    <div>
    </div>
  );
};

export default Testimonials;
