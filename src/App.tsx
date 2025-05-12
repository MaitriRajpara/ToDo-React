import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Tasks/AllTask";
import { TaskProvider } from "./Components/Tasks/TaskProvider";
import "./App.css";
import TaskForm from "./Components/Tasks/TaskForm";

export default function App() {
  return (
    <>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:editId" element={<TaskForm />} />
          </Routes>
        </Router>
      </TaskProvider>
    </>
  );
}
