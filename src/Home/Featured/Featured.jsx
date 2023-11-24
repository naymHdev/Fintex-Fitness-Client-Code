import { useEffect, useState } from "react";
import { allFeatured } from "../../Api/Featured/Featured";
import Card from "./Card";
import SectionTitle from "../../Components/SectionTitle";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    allFeatured().then((data) => {
      setFeatured(data);
    });
  }, []);

  return (
    <div className="mt-20">
      <SectionTitle
        subHeading={
          "Real-time tracking for a holistic wellness experience. Transform with us!"
        }
        heading={"Ours Mains Featured"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {featured.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
