import React, { useState } from "react";

type Task = {
  title: string;
  description: string;
  deadline: string;
  status: "Belum" | "Selesai";
};

type Props = {
  onSubmit: (task: Task) => void;
};

const TaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    deadline: "",
    status: "Belum",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(task); // pastikan ini terpanggil
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Judul" />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Deskripsi" />
      <input type="date" name="deadline" value={task.deadline} onChange={handleChange} />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Belum">Belum</option>
        <option value="Selesai">Selesai</option>
      </select>
      <button type="submit">Simpan</button>
    </form>
  );
};

export default TaskForm;
