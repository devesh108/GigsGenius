"use client";
import React, { useContext, useState } from "react";

export default function Account() {
  const [store, setStore] = useState({
    full_name: "",
    email: "",
    gender: "",
    company: "",
    skills: "",
    experience: "",
    location: "",
    phone_number: "",
    profile_description: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setStore({ ...store, [e.target.id]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
          color: "white",
          padding: "20px 20px",
          marginTop: "-3rem",
          borderRadius: "0",
          marginLeft: "-20px",
          marginRight: "-20px",
        }}
      >
        <div className="container ms-2">
          <h2>Account Settings</h2>
          <p>Manage your profile and Account Information</p>
        </div>
      </div>

      {/* Profile Card */}
      <div
        className="container mt-4"
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          padding: "30px 40px",
        }}
      >
        <h4 className="text-dark mb-4 fw-semibold">Profile Information</h4>

        {/* Profile Photo + Description */}
        <div className="row">
          <div className="col-md-4 text-center">
            <div
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #black",
                margin: "0 auto",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={preview || "/default-profile.png"}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: preview ? "cover" : "contain",
                  opacity: preview ? 1 : 0.6,
                }}
              />
            </div>

            <div className="mt-3">
              <input
                type="file"
                id="profile_photo"
                className="d-none"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
              <label htmlFor="profile_photo" className="btn btn-primary">
                Upload Photo
              </label>
            </div>
          </div>

          <div className="col-md-8 mb-3">
            <label
              htmlFor="profile_description"
              className="form-label fw-medium"
            >
              Profile Description
            </label>
            <textarea
              id="profile_description"
              className="form-control"
              placeholder="Write about yourself"
              value={store.profile_description}
              onChange={handleChange}
              rows={5}
            ></textarea>
          </div>
        </div>

        {/* Form Fields */}
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="full_name" className="form-label fw-medium">
              Full Name
            </label>
            <input
              id="full_name"
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={store.full_name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label fw-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={store.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="gender" className="form-label fw-medium">
              Gender
            </label>
            <select
              id="gender"
              className="form-select"
              value={store.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="company" className="form-label fw-medium">
              Company
            </label>
            <input
              id="company"
              type="text"
              className="form-control"
              placeholder="Company Name"
              value={store.company}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="skills" className="form-label fw-medium">
              Skills
            </label>
            <input
              id="skills"
              type="text"
              className="form-control"
              placeholder="Skills"
              value={store.skills}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="experience" className="form-label fw-medium">
              Experience (Years)
            </label>
            <input
              id="experience"
              type="number"
              className="form-control"
              placeholder="Experience (Years)"
              value={store.experience}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="location" className="form-label fw-medium">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="form-control"
              placeholder="Location"
              value={store.location}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="phone_number" className="form-label fw-medium">
              Phone Number
            </label>
            <input
              id="phone_number"
              type="text"
              className="form-control"
              placeholder="Enter your Phone Number"
              value={store.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="text-end mt-4">
          <button
            className="btn btn-outline-light me-2"
            style={{ background: "#2a5298" }}
            type="button"
          >
            Edit
          </button>
          <button
            className="btn btn-warning fw-semibold text-dark"
            type="button"
            onClick={() => console.log("Saved:", store)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
