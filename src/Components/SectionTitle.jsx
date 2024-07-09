/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-4xl font-bold text-primary-text">{heading}</p>
      <h1 className="w-8/12 text-secondary-text mt-3">{subHeading}</h1>
    </div>
  );
};

export default SectionTitle;

/*
 */
