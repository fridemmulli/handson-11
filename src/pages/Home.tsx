import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: "Belum" | "Selesai";
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const markDone = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, status: "Selesai" } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id: number) => {
    const filtered = tasks.filter((t) => t.id !== id);
    setTasks(filtered);
    localStorage.setItem("tasks", JSON.stringify(filtered));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Tugas</h1>
      <Link to="/add" className="mb-4 inline-block bg-green-600 text-white px-4 py-2 rounded">
        + Tambah Tugas Baru
      </Link>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Judul</th>
            <th className="border px-2 py-1">Deadline</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border px-2 py-1">{task.title}</td>
              <td className="border px-2 py-1">{task.deadline}</td>
              <td className="border px-2 py-1">{task.status}</td>
              <td className="border px-2 py-1 space-x-2">
                <Link to={`/edit/${task.id}`} className="text-blue-600">Edit</Link>
                <button onClick={() => deleteTask(task.id)} className="text-red-600">Hapus</button>
                {task.status === "Belum" && (
                  <button onClick={() => markDone(task.id)} className="text-green-600">Selesai</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
