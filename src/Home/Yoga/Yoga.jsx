import React from "react";
import Button from "../../Components/Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Yoga = () => {
  return (
    <>
      <div className="responsive-padding grid grid-cols-1 lg:grid-cols-3 items-center gap-5 md:gap-10 mt-96 md:mt-0">
        <div>
          <img
            className=" rounded-t-full w-full h-auto"
            src="/public/yoga1.jpg"
            alt="Yoga image"
          />
        </div>
        <div className=" space-y-4 md:space-y-8">
          <h2 className=" text-primary-text text-3xl md:text-5xl font-medium">
            Mind Relax
          </h2>
          <div>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="/public/y-a-1.jpeg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/public/y-a-2.jpeg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12">
                  <span>
                    <FaArrowRightLong />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1 className=" text-primary-text text-3xl md:text-5xl font-medium">
            Revitalize Self Care
          </h1>
          <p className=" text-secondary-text font-medium">
            Tellus integer feugiat scelerisque varius. Cursus turpis massa
            tincidunt dui ut. Porttitor leo a diam sollicitudin.
          </p>
          <Button label="Book Class" />
        </div>
        <div>
          <div className=" bottom-0 -right-20">
            <img
              className=" w-1/2 h-auto mx-auto"
              src="/public/yoga.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Yoga;
