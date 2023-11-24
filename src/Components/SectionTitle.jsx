/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
  return (
      <div className="border-l-2 border-green-200 mt-20">
        <p className="text-3xl ml-3 font-bold text-white">{heading}</p>
        <h1 className="text-sm ml-3">{subHeading}</h1>
      </div>
  );
};

export default SectionTitle;
