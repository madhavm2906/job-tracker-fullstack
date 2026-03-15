import { useEffect, useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./index.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/jobs");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="app">
      <h1>Job Application Tracker</h1>
      <JobForm
        fetchJobs={fetchJobs}
        editingJob={editingJob}
        setEditingJob={setEditingJob}
      />
      <JobList jobs={jobs} fetchJobs={fetchJobs} setEditingJob={setEditingJob} />
    </div>
  );
}

export default App;