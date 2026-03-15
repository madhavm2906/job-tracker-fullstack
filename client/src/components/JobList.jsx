import JobCard from "./JobCard";

function JobList({ jobs, fetchJobs, setEditingJob }) {
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