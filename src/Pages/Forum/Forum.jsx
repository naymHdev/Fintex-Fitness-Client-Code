import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { Helmet } from "react-helmet";
import ForumCart from "./ForumCart";
import SectionTitle from "../../Components/SectionTitle";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import './forum.css'

const Forum = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const count = useLoaderData();

  const itemsPerPage = 4;
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pages = count.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Forum</title>
      </Helmet>
      <section className="md:pt-[200px] flex items-center bg-[url('https://imagizer.imageshack.com/img924/999/zwQvNA.jpg')] bg-cover rounded-b-md py-5 px-1 md:py-16 bg-opacity-30">
        <div>
          <LuGalleryVertical className="md:text-6xl text-xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/forum">Forum</Link>
          </div>
          <h2 className=" text-xl md:text-6xl font-bold text-white text-center">
            Our <span className="text-green-400">Forums</span>
          </h2>
          <p className="text-sm text-center text-white md:w-1/2 mx-auto">
            Discover a vibrant community on our fitness forum—share triumphs, seek advice, and
            cultivate motivation. Join discussions spanning workouts, nutrition, and well-being.
            Your journey to a healthier, happier you starts here!
          </p>
        </div>
        <div>
          <LuGalleryVertical className=" text-xl md:text-6xl text-green-400 md:mr-20" />
        </div>
      </section>
      <div className="mt-12 w-full md:w-9/12">
        <SectionTitle
          heading={
            "Unleash Your Best Self: Join the Ultimate Fitness Community for Expert Tips and Motivation!"
          }
          subHeading={
            "Elevate Your Fitness Journey with Invaluable Insights, Support, and Encouragement. Connect with Like-Minded Enthusiasts and Achieve Your Goals Together. Embrace a Healthier Lifestyle with Our Vibrant Community!"
          }
        />
      </div>
      <section className="grid grid-cols-1 w-full md:w-8/12 mx-auto mt-10 gap-8">
        {pages?.map((forum) => (
          <ForumCart key={forum._id} forum={forum} />
        ))}
      </section>
      <div className="flex items-center justify-center">
        <ReactPaginate
          pageCount={Math.ceil(count.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={'px-2'}
          breakClassName={'px-2'}
          previousClassName={'px-2'}
          nextClassName={'px-2'}
          innerClass={'pagination'}
        />
      </div>
    </div>
  );
};

export default Forum;
