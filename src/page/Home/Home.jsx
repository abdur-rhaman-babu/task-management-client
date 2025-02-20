import TaskCard from "../../components/TaskCard/TaskCard";
import useTask from "../../Hooks/useTask";

const Home = () => {
  const [tasks] = useTask()
  console.log(tasks)
  return (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 lg:px-10 md:px-5 px-3">
            {
              tasks.map((task,index)=> <TaskCard key={task._id} task={task} index={index}/>)
            }
        </div>
    </div>
  );
};

export default Home;
