import { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Auth from "./components/Auth";
import "./index.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("https://job-tracker-backend-ycaz.onrender.com/api/jobs");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchJobs();
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalJobs = jobs.length;
  const appliedCount = jobs.filter((job) => job.status === "Applied").length;
  const interviewCount = jobs.filter((job) => job.status === "Interview").length;
  const rejectedCount = jobs.filter((job) => job.status === "Rejected").length;
  const offerCount = jobs.filter((job) => job.status === "Offer").length;

  if (!user) {
    return <Auth setUser={setUser} />;
  }

  return (
    <div className="page">
      <div className="app">
        <div className="top-bar">
          <div>
            <p className="hero-tag">Full Stack Job Tracker</p>
            <h1>Welcome, {user.name}</h1>
            <p className="hero-subtext">
              Manage your applications from one dashboard.
            </p>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>{totalJobs}</h3>
            <p>Total</p>
          </div>
          <div className="stat-card">
            <h3>{appliedCount}</h3>
            <p>Applied</p>
          </div>
          <div className="stat-card">
            <h3>{interviewCount}</h3>
            <p>Interviews</p>
          </div>
          <div className="stat-card">
            <h3>{rejectedCount}</h3>
            <p>Rejected</p>
          </div>
          <div className="stat-card">
            <h3>{offerCount}</h3>
            <p>Offers</p>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <JobForm
              fetchJobs={fetchJobs}
              editingJob={editingJob}
              setEditingJob={setEditingJob}
            />
          </div>

          <div>
            <div className="filters">
              <input
                type="text"
                placeholder="Search by company or role"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
              </select>
            </div>

            <JobList
              jobs={filteredJobs}
              fetchJobs={fetchJobs}
              setEditingJob={setEditingJob}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;