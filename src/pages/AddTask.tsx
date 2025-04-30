import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();

  const handleSubmit = (task: {
    title: string;
    description: string;
    deadline: string;
    status: "Belum" | "Selesai";
  }) => {
    const current = JSON.parse(localStorage.getItem("tasks") || "[]");
    const newTask = {
      id: Date.now(),
      ...task,
    };
    localStorage.setItem("tasks", JSON.stringify([...current, newTask]));
    navigate("/");
  };

  return <TaskForm onSubmit={handleSubmit} />;
};

export default AddTask;
