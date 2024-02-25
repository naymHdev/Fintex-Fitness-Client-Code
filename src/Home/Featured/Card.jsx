/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { image, title, description } = item || {};

  return (
    // <Link to={`/category/${_id}`}>
    <div className="auth-icons bg-white text-center rounded-xl  hover:border hover:shadow-md">
      <div className="w-9/12 mx-auto">
        <img className="w-44 h-36" src={image} alt="" />
      </div>
      <div className="p-4 pb-8">
        <h2 className="text-black text-2xl font-medium">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
