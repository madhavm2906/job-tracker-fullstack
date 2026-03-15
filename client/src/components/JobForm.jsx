import { useEffect, useState } from "react";

function JobForm({ fetchJobs, editingJob, setEditingJob }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    dateApplied: "",
    notes: "",
  });

  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob);
    }
  }, [editingJob]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingJob ? "PUT" : "POST";
    const url = editingJob
      ? `http://localhost:5000/api/jobs/${editingJob._id}`
      : "http://localhost:5000/api/jobs";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        company: "",
        role: "",
        status: "Applied",
        dateApplied: "",
        notes: "",
      });

      setEditingJob(null);
      fetchJobs();
    } catch (error) {
      console.log("Error saving job:", error);
    }
  };

  return (
  <form className="job-form" onSubmit={handleSubmit}>
    <h2>{editingJob ? "Edit Application" : "Add New Application"}</h2>
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>

      <input
        type="date"
        name="dateApplied"
        value={formData.dateApplied}
        onChange={handleChange}
        required
      />

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">
        {editingJob ? "Update Job" : "Add Job"}
      </button>
    </form>
  );
}

export default JobForm;