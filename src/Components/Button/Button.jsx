import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ label }) => {
  return (
    <>
      <div>
        <button className=" text-primary-text flex items-center gap-3 border border-black px-3 md:px-8  py-2 md:py-3 rounded-full">
          {label} <FaArrowRightLong className=" text-xl" />
        </button>
      </div>
    </>
  );
};

export default Button;
