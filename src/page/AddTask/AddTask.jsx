import { useForm } from "react-hook-form";
import task from "../../assets/image/Add tasks-bro.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
const AddTask = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)

    const tasks = {
      title: data.title,
      category: data.category,
      description: data.description,
      email: user.email
    }
    console.log(tasks)
    const taskRes = await axiosPublic.post('/tasks', tasks);
    if(taskRes.data.insertedId){
      toast.success('Task is added')
      reset()
    }
  };

  return (
    <div className=" bg-white dark:bg-dark backdrop-blur-md p-6">
      <h2 className="text-2xl font-bold text-secondary dark:text-white text-center mb-6">
        Add New Task
      </h2>

      <div className="md:flex gap-10 items-center lg:max-w-7xl mx-auto">
        <div className="md:w-6/12">
          <img src={task} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:w-6/12">
          <div>
            <label className="block text-secondary dark:text-white font-semibold">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-secondary dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              placeholder="Enter task title..."
            />
            {errors.title && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div>
            <label className="block text-secondary dark:text-white font-semibold">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="w-full resize-none mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-secondary dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              placeholder="Enter task description..."
              rows="3"
            ></textarea>
            {errors.description && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div>
            <label className="block text-secondary dark:text-white font-semibold">
              Category <span className="text-red-600">*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-secondary dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            {errors.category && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary  text-white font-semibold py-3 rounded-lg hover:shadow-lg transition duration-300"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
