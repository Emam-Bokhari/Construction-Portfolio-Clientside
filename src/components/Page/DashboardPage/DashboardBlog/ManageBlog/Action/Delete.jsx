import axios from "axios";
import { Fragment } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function Delete({ id }) {
  const handleDelete = async (id) => {
    // console.log(id);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`/api/v1/delete-blog/${id}`);
        if (response.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your blog has been deleted.",
            icon: "success",
          }).then(()=>{
            setTimeout(()=>{
                window.location.reload()
            },500)
          })
        }
        
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the file.",
          icon: "error",
        });
      }
    }
  };
  return (
    <Fragment>
      <button onClick={() => handleDelete(id)}>
        <span className="text-[#FF5200] font-extrabold">
          <FaTrashCan />
        </span>
      </button>
    </Fragment>
  );
}
