import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { SlLike, SlDislike } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";

/* eslint-disable react/prop-types */
const ChallengeCard = ({ challeng }) => {
  const { content, imag, photoURL, time } = challeng;
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [disLike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);

  const { user } = useAuth();

  const handleLike = () => {
    setLike(like + (isLike ? +1 : 1));
    setIsLike(!isLike);
  };
  const handleDisLike = () => {
    setDisLike(disLike + (isDisLike ? +1 : 1));
    setIsDisLike(!isDisLike);
  };


  return (
    <div className="rounded-md shadow-2xl shadow-black">
      {/* User Name image time */}
      <div>
        <div className="flex items-center gap-2 py-3 px-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={photoURL} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black">{user?.displayName}</h2>
            <p className="text-gray-600">{time}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-black font-medium px-2 py-4">{content}</p>
      </div>

      {/* image */}
      <div className="border-b-2 border-black pb-5">
        <img className="w-full rounded-md" src={imag} alt="" />
      </div>
      {/* like comment */}

      <div className="pb-3">
          <div className="border-black border-b-2 text-2xl flex items-center justify-evenly py-3">
          <div>
          <button
              onClick={handleLike}
              className=" font-bold flex items-center gap-4"
            >
              <SlLike className="text-green-600" />
              {like}
            </button>
          </div>
            <div>
            <button
              onClick={handleDisLike}
              className="font-bold  flex items-center gap-4"
            >
              <SlDislike className="text-green-600" />
              {disLike}
            </button>
            </div>
            <div>
            <button
              onClick={handleDisLike}
              className="font-bold  flex items-center gap-4"
            >
              <IoMdShareAlt className="text-green-600" />
              {disLike}
            </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChallengeCard;
