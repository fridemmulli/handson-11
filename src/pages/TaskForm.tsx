import React, { useState } from "react";

export type Task = {
  title: string;
  deadline: string;
  status: "Belum" | "Selesai";
};

type TaskFormProps = {
  initialTask?: Task;
  onSubmit: (task: Task) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ initialTask, onSubmit }) => {
  const [task, setTask] = useState<Task>(
    initialTask || { title: "", deadline: "", status: "Belum" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {initialTask ? "Edit Tugas" : "Tambah Tugas Baru"}
      </h2>
      <div className="mb-4">
        <label className="block mb-1">Judul Tugas</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Belum">Belum</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Simpan
      </button>
    </form>
  );
};

export default TaskForm;
