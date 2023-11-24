import { useEffect, useState } from "react";
import { allFeatured } from "../../Api/Featured/Featured";
import Card from "./Card";


const Featured = () => {

  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    allFeatured()
    .then(data => {
      setFeatured(data)
    })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {
        featured.map( item => <Card key={item._id} item={item} />)
      }
    </div>
  );
};

export default Featured;