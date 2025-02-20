/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({ task, onDragStart }) => {
  const { title, description, category, createdAt } = task;

  return (
    <div
      className="bg-white dark:bg-dark dark:border-border p-3 rounded-lg border border-gray-200 w-full transition duration-300"
      draggable
      onDragStart={onDragStart}
    >
      <div className="flex justify-between items-start">
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
          <button className="p-2 bg-primary text-white rounded-full hover:bg-green-700 transition">
            <FaEdit />
          </button>
          <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition">
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="mt-3">
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
