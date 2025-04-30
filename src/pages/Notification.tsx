import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  deadline: string;
  status: "Belum" | "Selesai";
}

const Notification = () => {
  const [upcomingTasks, setUpcomingTasks] = useState<Task[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const tasks: Task[] = JSON.parse(saved);
      const now = new Date();
      const inThreeDays = new Date();
      inThreeDays.setDate(now.getDate() + 3);

      const filtered = tasks.filter((task) => {
        const deadline = new Date(task.deadline);
        return (
          task.status === "Belum" &&
          deadline >= now &&
          deadline <= inThreeDays
        );
      });

      setUpcomingTasks(filtered);
    }
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔔 Notifikasi Deadline Mendekat</h1>
      {upcomingTasks.length === 0 ? (
        <p className="text-gray-500 text-center">Tidak ada tugas yang mendekati deadline.</p>
      ) : (
        <ul className="space-y-4">
          {upcomingTasks.map((task) => (
            <li key={task.id} className="border border-yellow-300 bg-yellow-50 p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-yellow-800">{task.title}</h2>
              <p className="text-sm text-gray-700">Deadline: {task.deadline}</p>
              <p className="text-sm text-red-600">Status: {task.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
