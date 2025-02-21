/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useTask from "../../Hooks/useTask";
import { Link } from "react-router-dom";

const TaskCard = ({ task, onDragStart }) => {
  const { title, description, category, createdAt, _id } = task;
  const [, refetch] = useTask();
  const axiosPublic = useAxiosPublic();

  const handleDeleteTask = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/task/${id}`);
        if (res.data.deletedCount > 0) {
          // toast.success(`${title} is deleted`)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        refetch();
      }
    });
  };

  return (
    <div
      className="bg-white dark:bg-dark dark:border-border p-3 rounded-lg border border-gray-200 w-full flex flex-col justify-between h-full transition duration-300"
      draggable
      onDragStart={onDragStart}
    >
      <div className="flex justify-between items-start flex-grow">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-dark dark:text-white">
            {title}
          </h3>
          <p className="text-secondary dark:text-white text-sm mt-1">
            {description}
          </p>
          <p className="text-secondary dark:text-white text-sm mt-1 font-medium">
            {category}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            📅 {format(new Date(createdAt), "PPpp")}
          </p>
        </div>

        <div className="flex flex-col space-y-2 ml-4">
          <Link to={`/update/${_id}`}>
            <button className="p-2 bg-primary text-white rounded-full hover:bg-green-700 transition">
              <FaEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteTask(_id)}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="mt-auto pt-3">
        <label className="text-sm text-gray-500 dark:text-gray-400">
          Change Category:
        </label>
        <select className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 w-full p-3 rounded-md mt-1">
          <option value="to-do">To-Do</option>
          <option value="progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
