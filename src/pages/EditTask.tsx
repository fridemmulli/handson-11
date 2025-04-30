import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";

const EditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState<{ title: string; deadline: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks = JSON.parse(saved);
      const found = tasks.find((t: any) => t.id === Number(id));
      if (found) setTask(found);
    }
  }, [id]);

  const handleSubmit = (updatedTask: { title: string; deadline: string }) => {
    const saved = localStorage.getItem("tasks");
    if (!saved) return;
    const tasks = JSON.parse(saved).map((t: any) =>
      t.id === Number(id) ? { ...t, ...updatedTask } : t
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  };

  if (!task) return <p className="p-6">Loading...</p>;

  return <TaskForm onSubmit={handleSubmit} initialTask={task} />;
};

export default EditTask;