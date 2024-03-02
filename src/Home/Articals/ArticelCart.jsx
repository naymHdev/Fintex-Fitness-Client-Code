/* eslint-disable react/prop-types */

const ArticelCart = ({ itm }) => {
  const { content, text, texts, photoURL, time, displayName, role } = itm || {};

  return (
    <div>
      <div className="space-y-8 shadow-xl p-3 rounded-md  shadow-[#91C788] h-96">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={photoURL} />
              </div>
            </div>
            <div>
              <h3 className=" text-slate-700 font-bold">{displayName}</h3>
              <p>{role}</p>
            </div>
          </div>
          <p className="text-sm">{time}</p>
          <p className="text-xl font-bold text-[#52734D]">
            {texts?.slice(0, 80)}
          </p>
        </div>
        <p>{content?.slice(0, 160)}</p>
        <h4>{text?.slice(0, 70)}</h4>
      </div>
    </div>
  );
};

export default ArticelCart;
