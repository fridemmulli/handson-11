import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  deadline: string;
  status: "Belum" | "Selesai";
}

const Report = () => {
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks: Task[] = JSON.parse(saved);
      const totalTasks = tasks.length;
      const completedTasks = tasks.filter((t) => t.status === "Selesai").length;
      const pendingTasks = totalTasks - completedTasks;

      setTotal(totalTasks);
      setCompleted(completedTasks);
      setPending(pendingTasks);
    }
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">📊 Laporan Statistik Tugas</h1>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-lg font-medium">Total Tugas:</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <p className="text-lg font-medium">Tugas Selesai:</p>
          <p className="text-2xl font-bold text-green-700">{completed}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <p className="text-lg font-medium">Tugas Belum Selesai:</p>
          <p className="text-2xl font-bold text-yellow-700">{pending}</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
