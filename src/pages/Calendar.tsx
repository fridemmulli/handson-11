import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  deadline: string;
  status: "Belum" | "Selesai";
}

const Calendar = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed: Task[] = JSON.parse(saved);
      // Urutkan berdasarkan tanggal deadline
      const sorted = parsed.sort(
        (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
      );
      setTasks(sorted);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📅 Kalender Deadline Tugas</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-500">Belum ada tugas yang tersedia.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="border p-4 rounded bg-white shadow">
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
              <p className={`text-sm font-medium ${task.status === "Selesai" ? "text-green-600" : "text-red-600"}`}>
                Status: {task.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Calendar;
