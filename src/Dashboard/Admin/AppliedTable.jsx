/* eslint-disable react/prop-types */
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImSpinner9 } from "react-icons/im";

const AppliedTable = ({ subs, index, handleUpdate, handleDelete }) => {
  // console.log(subs);

  return (
    <div>
      <tr className="space-y-3 flex justify-evenly items-center text-start">
        <th>{index + 1}</th>
        <td>{subs.trainer_name}</td>
        <td>
          <span className="text-green-500 font-bold">{subs.trainer_experience}</span> + Year
        </td>
        <td>{subs.status}</td>
        <td>{subs.email}</td>
        {subs.role === "trainer" ? (
          "Trainer"
        ) : (
          <td onClick={() => handleUpdate(subs)} className="btn bg-white">
            <ImSpinner9 className=" text-xl animate-spin text-red-600" />
          </td>
        )}
        <td onClick={() => handleDelete(subs)} className="btn bg-white ml-5">
          <RiDeleteBin5Line className=" text-xl text-red-600" />
        </td>
      </tr>
    </div>
  );
};

export default AppliedTable;
