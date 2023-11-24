const SectionTitle = ({heading, subHeading}) => {
  return (
      <div className="font-bold w-4/12 mx-auto text-center mb-5 mt-8">
        <h1 className="text-2xl border-b-2 pb-5 italic text-yellow-200 mt-5">{subHeading}</h1>
        <p className="font-bold text-3xl mt-4 border-b-2 pb-5">{heading}</p>
      </div>
  );
};

export default SectionTitle;
