import useForum from "../../Hooks/useForum";

const AllForum = () => {
  const [allForum] = useForum();

  return (
    <div>
      <p>{allForum?.length}</p>
    </div>
  );
};

export default AllForum;
