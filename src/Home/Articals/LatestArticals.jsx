import { useEffect, useState } from "react";
import { fitnessForums } from "../../Api/Featured/Featured";
import SectionTitle from "../../Components/SectionTitle";
import ArticelCart from "./ArticelCart";

const LatestArticals = () => {
  const [articel, setArticel] = useState([]);

  useEffect(() => {
    fitnessForums()
      .then((data) => setArticel(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="mt-36 w-9/12">
        <SectionTitle
          heading={
            "Latest Articles!"
          }
          subHeading={
            "Elevate Your Fitness Journey with Invaluable Insights, Support, and Encouragement. Connect with Like-Minded Enthusiasts and Achieve Your Goals Together. Embrace a Healthier Lifestyle with Our Vibrant Community!"
          }
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
        {articel?.slice(0, 3).map((itm) => (
          <ArticelCart key={itm._id} itm={itm} />
        ))}
      </section>

    </div>
  );
};

export default LatestArticals;
