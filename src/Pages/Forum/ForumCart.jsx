/* eslint-disable react/prop-types */
import { SlLike, SlDislike } from "react-icons/sl";
import { useState } from "react";

const ForumCart = ({ forum }) => {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [disLike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);

  const { content, text, texts, photoURL, time, displayName, role } = forum || {};

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
      <div className="space-y-8 shadow-xl p-3 shadow-green-100">
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
        <div className="flex items-center gap-3 border-t-2 border-b-2 py-3">
          <div className="border flex rounded-xl items-center">
            <button
              onClick={handleLike}
              className=" px-5 py-2 border-r-2 font-bold flex items-center gap-4"
            >
              <SlLike className="text-green-600" />
              {like}
            </button>
            <button
              onClick={handleDisLike}
              className=" px-5 py-2 font-bold  flex items-center gap-4"
            >
              <SlDislike className="text-green-600" />
              {disLike}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCart;
