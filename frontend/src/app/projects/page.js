'use client';
export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const [formData, setFormData] = useState({
    Name: "",
    companyName: "",
    description: "",
    budget: "",
    skills: "",
    timeline: "",
    date_posted: ""
  });

  const [filterDate, setFilterDate] = useState("");
  const [projects, setProjects] = useState([]);

  const router = useRouter();
  const { setNotifications } = useAppContext();

  // ✅ SAFE CLIENT-ONLY FETCH
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchProjects();
    }
  }, []);

  // 🔹 Fetch projects (SAFE)
  const fetchProjects = async (date = "") => {
    try {
      let url = "http://127.0.0.1:8000/api/projects/";
      if (date) url += `?date_posted=${date}`;

      const response = await axios.get(url);
      setProjects(response.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]); // ✅ prevent crash
    }
  };

  // 🔹 Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Filter change handler
  const handleFilterChange = async (e) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);
    await fetchProjects(selectedDate);
  };

  // 🔹 Submit project
  const handleSubmit = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/projects/", {
        name: formData.Name,
        company_name: formData.companyName,
        description: formData.description,
        budget: formData.budget,
        skills: formData.skills,
        timeline: formData.timeline,
        date_posted: formData.date_posted,
      });

      alert("Project details submitted!");

      setFormData({
        Name: "",
        companyName: "",
        description: "",
        budget: "",
        skills: "",
        timeline: "",
        date_posted: "",
      });

      fetchProjects();
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  // 🔹 Pass info to another page
  const handleClick = (project) => {
    setNotifications({
      name: project.name,
      description: project.description,
    });
    router.push("/notifications");
  };

  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #764ba2 100%)",
          minHeight: "100vh",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        {/* ---------- POST PROJECT ---------- */}
        <div className="container py-3">
          <div className="flex justify-center">
            <button
              className="btn btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              Post a Project
            </button>
          </div>

          <div style={{ minHeight: 120 }}>
            <div className="collapse collapse-horizontal" id="collapseWidthExample">
              <div className="card shadow-sm p-4" style={{ width: 400 }}>
                <h5 className="card-title mb-3 border-bottom pb-2">Project Details</h5>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    placeholder="Describe your project..."
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Budget (₹)</label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter budget"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Skills Required</label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="E.g. React, Django, API Integration"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Timeline (Days)</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="E.g. 7 days"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date Posted</label>
                  <input
                    type="date"
                    name="date_posted"
                    value={formData.date_posted}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="text-end">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- FILTER SECTION ---------- */}
        <div className="container py-3">
          <div className="flex justify-center">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthFilter"
              aria-expanded="false"
              aria-controls="collapseWidthFilter"
            >
              Filter
            </button>
          </div>

          <div style={{ minHeight: 120 }}>
            <div className="collapse collapse-horizontal" id="collapseWidthFilter">
              <div className="card shadow-sm p-4" style={{ width: 400 }}>
                <h5 className="card-title mb-3 border-bottom pb-2">Filter Projects</h5>

                <div className="mb-3">
                  <label className="form-label">Date Posted</label>
                  <input
                    type="date"
                    name="filter_date"
                    value={filterDate}
                    onChange={handleFilterChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- PROJECT LIST ---------- */}
        <div className="container mt-4">
          {projects.length === 0 ? (
            <div className="text-center text-muted">No projects found.</div>
          ) : (
            projects.map((p) => (
              <div key={p.id} className="row g-0 mb-3 border rounded">
                <div
                  className="col-sm-2 d-flex align-items-center justify-content-center border-end fw-bold"
                  style={{ background: "#f8f9fa" }}
                >
                  {p.name || "N/A"}
                </div>

                <div className="col-sm-8 text-start ps-3 py-2">
                  <div><strong>Project Description:</strong> {p.description || "N/A"}</div>
                  <div><strong>Skillset:</strong> {p.skills || "N/A"}</div>
                  <div><strong>Timeline:</strong> {p.timeline || "N/A"}</div>
                  <div><strong>Budget:</strong> {p.budget || "N/A"}</div>
                  <div><strong>Company:</strong> {p.company_name || "N/A"}</div>

                  <div>
                    <strong>Date Posted:</strong>{" "}
                    {p.date_posted
                      ? new Date(p.date_posted).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "N/A"}
                  </div>
                </div>

                <div className="col-sm-2 d-flex align-items-center justify-content-center border-start">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleClick(p)}
                  >
                    I'm Interested
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}