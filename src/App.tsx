import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Calendar from "./pages/Calendar";
import Report from "./pages/Report";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

// Komponen route terproteksi
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = !!localStorage.getItem("user");
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Semua route di bawah ini butuh login */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddTask />} />
                    <Route path="/edit/:id" element={<EditTask />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
