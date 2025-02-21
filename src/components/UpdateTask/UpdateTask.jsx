import { useForm } from "react-hook-form";
import updateImg from "../../assets/image/Update-bro.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from './../SectionTitle/SectionTitle';
const UpdateTask = () => {
  const axiosPublic = useAxiosPublic();
  const task = useLoaderData();
  const { title, category, description, _id } = task;
//   console.log(task)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const taskRes = await axiosPublic.put(`/update/${_id}`, data);
    if(taskRes.data.modifiedCount > 0){
        toast.success(`${data.title} is updated`)
        navigate('/')
    }
    // console.log(taskRes.data);
    
  };

  return (
    <div className=" bg-white dark:bg-dark backdrop-blur-md">
    <SectionTitle title='Update Task'/>

      <div className="md:flex gap-10 items-center lg:max-w-7xl mx-auto px-3 md:px-0">
        <div className="md:w-6/12">
          <img src={updateImg} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:w-6/12">
          <div>
            <label className="block text-secondary dark:text-white font-semibold">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              defaultValue={title}
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
              defaultValue={description}
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
              defaultValue={category}
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
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold py-3 rounded-lg  transition duration-500"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
