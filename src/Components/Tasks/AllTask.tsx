import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="task-manager">
      <div className="heading">
        <h2>Task Manager</h2>
        <button onClick={() => navigate("/add")} className="add-btn-head">
          Add Task
        </button>
      </div>
      <TaskList />
    </div>
  );
};

export default Home;
