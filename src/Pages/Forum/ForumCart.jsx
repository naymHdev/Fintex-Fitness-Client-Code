/* eslint-disable react/prop-types */
import { TbShare3 } from "react-icons/tb";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FaComments, FaRegComments, FaShare } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { useState } from "react";

const ForumCart = ({ forum }) => {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [disLike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);

  const { content, text, texts, photoURL, time, displayName, role } =
    forum || {};

  const handleLike = () => {
    setLike(like + (isLike ? +1 : 1));
    setIsLike(!isLike);
  };
  const handleDisLike = () => {
    setDisLike(disLike + (isDisLike ? +1 : 1));
    setIsDisLike(!isDisLike);
  };

  return (
    <div>
      <div className="space-y-2 shadow-xl shadow-green-100 px-2 py-3">
        <div className=" border rounded-md p-2 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={photoURL} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold">{displayName}</h3>
                <p>{role}</p>
              </div>
            </div>
            <p className="text-sm">{time}</p>
            <p className="text-xl font-bold text-green-700">{texts}</p>
          </div>
          <p>{content}</p>
          <h4>{text}</h4>
        </div>
        <div className="items-center px-5 gap-3 py-1">
          {/* Like comment share count */}
          <div className=" flex items-center justify-between md:gap-20">
            <div>
              <button className=" px-5 py-2 text-xl font-bold flex items-center gap-4">
                <BsEmojiSunglasses className="text-yellow-600 text-xl md:text-3xl" />
                {like}
              </button>
            </div>
            <div className=" flex items-center justify-between">
              <button
                onClick={handleLike}
                className=" px-5 py-2 text-xl font-bold flex items-center gap-4"
              >
                25
                <FaComments className="text-[#91C788] text-xl md:text-3xl" />
              </button>
              <button
                onClick={handleLike}
                className=" px-5 py-2  font-bold flex text-xl items-center gap-4"
              >
                100
                <FaShare className="text-[#91C788] text-xl md:text-3xl" />
              </button>
            </div>
          </div>
          <hr className=" mt-2 mb-2" />
          {/* Hit button functionality */}
          <div className="flex items-center justify-around md:gap-20 rounded-xl">
            <button
              onClick={handleLike}
              className=" px-5 py-2  font-bold flex items-center md:text-xl text-center gap-1 md:gap-4"
            >
              <BiLike className="text-[#91C788] text-xl md:text-3xl" />
              Like
            </button>
            <button
              onClick={handleDisLike}
              className=" px-5 py-2 font-bold md:text-xl flex items-center gap-1 md:gap-4"
            >
              <FaRegComments className="text-[#91C788] text-xl md:text-3xl" />
              Comment
            </button>
            <button
              onClick={handleDisLike}
              className=" px-5 py-2 font-bold md:text-xl flex items-center gap-1 md:gap-4"
            >
              <TbShare3 className="text-[#91C788] text-xl md:text-3xl" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCart;
