import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TaskCard from "../../components/TaskCard/TaskCard";
import useTask from "../../Hooks/useTask";

const Home = () => {
  const [tasks] = useTask()

  return (
    <div>
      <SectionTitle title='All Tasks'/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 lg:px-10 md:px-5 px-3 mt-10">
            {
              tasks.map((task,index)=> <TaskCard key={task._id} task={task} index={index}/>)
            }
        </div>
    </div>
  );
};

export default Home;
