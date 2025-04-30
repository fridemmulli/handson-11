import { useState } from "react";

type TaskFormProps = {
  onSubmit: (task: { title: string; deadline: string }) => void;
  initialTask?: { title: string; deadline: string };
};

const TaskForm = ({ onSubmit, initialTask }: TaskFormProps) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [deadline, setDeadline] = useState(initialTask?.deadline || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !deadline) return;
    onSubmit({ title, deadline });
    setTitle("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-full max-w-md mx-auto mt-4">
      <h2 className="text-lg font-semibold mb-4">{initialTask ? "Edit Tugas" : "Tambah Tugas Baru"}</h2>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Judul Tugas</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-3 py-2 w-full rounded"
          placeholder="Contoh: Laporan Praktikum"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border border-gray-300 px-3 py-2 w-full rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Simpan
      </button>
    </form>
  );
};

export default TaskForm;
