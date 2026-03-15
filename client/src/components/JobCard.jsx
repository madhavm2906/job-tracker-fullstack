function JobCard({ job, fetchJobs, setEditingJob }) {
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/api/jobs/${job._id}`, {
        method: "DELETE",
      });
      fetchJobs();
    } catch (error) {
      console.log("Error deleting job:", error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Applied":
        return "status applied";
      case "Interview":
        return "status interview";
      case "Rejected":
        return "status rejected";
      case "Offer":
        return "status offer";
      default:
        return "status";
    }
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3>{job.company}</h3>
          <p className="job-role">{job.role}</p>
        </div>
        <span className={getStatusClass(job.status)}>{job.status}</span>
      </div>

      <div className="job-card-body">
        <p>
          <strong>Date Applied:</strong> {job.dateApplied}
        </p>
        <p><strong>Notes:</strong> {job.notes}</p>

        {job.applicationLink && (
            <p>
                <strong>Link:</strong>{" "}
                <a href={job.applicationLink} target="_blank">
                    View Application
                </a>
            </p>
        )}
      </div>

      <div className="button-group">
        <button className="edit-btn" onClick={() => setEditingJob(job)}>
          Edit
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;