import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Images = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 12;

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(`images.json?page=${page}`);
      const newData = await response.json();

      setData((prevData) => [...prevData, ...newData.slice(0, itemsPerPage)]);
      setHasMore(newData.length > itemsPerPage);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="font-josefin">
      <Helmet>
        <title>Fintex-Fitness || Is</title>
      </Helmet>

      <section className=" flex items-center pt-[200px] bg-[url('https://imagizer.imageshack.com/img922/7563/AMPrbh.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-[#FEFFDE] md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-[#FEFFDE] text-2xl " />
            <Link to="/gallery">Our Gallery</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Our <span className="text-[#DDFFBC]">Gallery</span>
          </h2>
          <p className="text-sm text-center text-white w-1/2 mx-auto">
            Embark on your fitness journey with cutting-edge trackers. Explore
            our gallery showcasing sleek designs, advanced features, and
            real-time health insights. Elevate your wellness experience with the
            latest in fitness technology.
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-[#FEFFDE] md:mr-20" />
        </div>
      </section>
      <section className="mt-8 rounded-md">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={loading && <h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 md:grid-cols-3  border-green-500 border-r-2 border-l-2">
            {data.map((item, index) => (
              <div key={index}>
                <img
                  className=" w-full h-72"
                  src={item?.trainer_image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
        {error && (
          <p className="text-red-500">Error loading data. Please try again.</p>
        )}
      </section>
    </div>
  );
};

export default Images;
