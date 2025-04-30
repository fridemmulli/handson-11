import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="flex justify-center mb-2">
        <span className="text-2xl font-bold">🎓 Tugas Mahasiswa</span>
      </div>
      <div className="flex justify-center items-center space-x-6 mb-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : ""
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : ""
          }
        >
          <b>Kalender</b>
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : ""
          }
        >
          <b>Laporan</b>
        </NavLink>
        <NavLink
          to="/notification"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : ""
          }
        >
          <b>Notifikasi</b>
        </NavLink>
      </div>
      <div className="flex justify-end items-center space-x-4">
        <button className="text-xl">🔔</button>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="rounded-full w-8 h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
