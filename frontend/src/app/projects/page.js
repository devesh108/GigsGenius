"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import { useRouter } from "next/navigation"; // ✅ correct import for Next.js App Router

export default function ProjectsPage() {
  const [formData, setFormData] = useState({
    Name: "",
    companyName: "",
    description: "",
    budget: "",
    skills: "",
    timeline: "",
    date_posted: "",
  });

  const [filterDate, setFilterDate] = useState("");
  const [projects, setProjects] = useState([]);

  const router = useRouter();
  const { setNotifications } = useAppContext(); // ✅ global context access

  // Fetch all projects on load
  useEffect(() => {
    fetchProjects();
  }, []);

  // 🔹 Fetch projects (optionally filtered by date)
  const fetchProjects = async (date = "") => {
    try {
      let url = "http://127.0.0.1:8000/api/projects/";
      if (date) url += `?date_posted=${date}`;

      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
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

  // ✅ Pass info to another page through context
  const handleClick = (project) => {
    setNotifications({
      name: project.name,
      description: project.description,
    });
    router.push("/notifications");
  };

  // 🔹 UI Rendering
  return (
    <>
      <div class="p-4 border border-gray-300 rounded-lg w-64">
        <h3 class="text-lg font-semibold mb-2">Filters</h3>
        <p class="font-medium mb-2">Skills</p>
        <ul class="space-y-2">
          <li>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value="frontend"
                class="h-4 w-4 text-blue-600"
              />
              <span> Frontend Development</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value="backend"
                class="h-4 w-4 text-blue-600"
              />
              <span> Backend Development</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value="backend"
                class="h-4 w-4 text-blue-600"
              />
              <span> Full Stack Development</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value="uiux"
                class="h-4 w-4 text-blue-600"
              />
              <span> UI/UX Development</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value="uiux"
                class="h-4 w-4 text-blue-600"
              />
              <span> Mobile Application Development</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                name="skills"
                value="uiux"
                class="h-4 w-4 text-blue-600"
              />
              <span> Data Analytics</span>
            </label>
          </li>
        </ul>
        <div class="experience-filter">
          <h3>Experience Level</h3>

          <label>
            <input type="radio" name="experience" value="lt2" /> Less than 2
            years
          </label>
          <br />
          <label>
            <input type="radio" name="experience" value="2to5" /> 2–5 years
          </label>
          <br />
          <label>
            <input type="radio" name="experience" value="gt5" /> More than 5
            years
          </label>
        </div>

        <div class="budget-filter">
          <h3>Budget</h3>

          <label>
            <input type="radio" name="experience" value="lt2" /> Below 10K
          </label>
          <br />
          <label>
            <input type="radio" name="experience" value="2to5" /> 10K-50K
          </label>
          <br />
          <label>
            <input type="radio" name="experience" value="gt5" /> Above 50K
          </label>
        </div>
      </div>
    </>
  );
} 