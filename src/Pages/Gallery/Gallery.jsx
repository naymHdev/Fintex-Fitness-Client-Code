import { useInfiniteQuery } from "@tanstack/react-query";
import { IoMdArrowDropright } from "react-icons/io";
import { LuGalleryVertical } from "react-icons/lu";
import { Link } from "react-router-dom";

const getImages = async ({ pageParam = 0 }) => {
  const res = await fetch(`http://localhost:5000/images?offset=${pageParam}`);
  const data = await res.json();
  return { ...data, prevOffset: pageParam };
};

const Gallery = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: getImages,
    getNextPageParam: (lastPage) => {
      if (lastPage?.prevOffset + 10 > lastPage?.imagesCount) {
        return false;
      }
      return lastPage?.prevOffset + 10;
    },
  });

  console.log(data?.pages);

  const images = data?.pages?.reduce((acc, page) => {
    return [...acc, ...page];
  }, []);
  
  console.log(images);
  

  return (
    <div>
      <section className=" flex items-center pt-[200px] bg-[url('https://imagizer.imageshack.com/img922/7563/AMPrbh.jpg')] bg-cover rounded-xl py-24 bg-opacity-30">
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:ml-20" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-white bg-opacity-40">
            <Link to="/">Homepage</Link>
            <IoMdArrowDropright className="text-green-400 text-2xl " />
            <Link to="/gallery">Our Gallery</Link>
          </div>
          <h2 className="text-6xl font-bold text-white text-center">
            Our <span className="text-green-400">Gallery</span>
          </h2>
          <p className="text-sm text-center text-white w-1/2 mx-auto">
            Embark on your fitness journey with cutting-edge trackers. Explore our gallery
            showcasing sleek designs, advanced features, and real-time health insights. Elevate your
            wellness experience with the latest in fitness technology.
          </p>
        </div>
        <div>
          <LuGalleryVertical className="text-6xl text-green-400 md:mr-20" />
        </div>
      </section>
      <section>
        {
          // data?.pages.map(img => console.log(img))
        }
      </section>
    </div>
  );
};

export default Gallery;
