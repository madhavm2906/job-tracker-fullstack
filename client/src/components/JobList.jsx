import JobCard from "./JobCard";

function JobList({ jobs, fetchJobs, setEditingJob }) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <h3>No applications found</h3>
        <p>Add a new job or change your search and filter.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          fetchJobs={fetchJobs}
          setEditingJob={setEditingJob}
        />
      ))}
    </div>
  );
}

export default JobList;