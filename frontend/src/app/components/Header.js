"use client";
import { useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Image from "next/image";
import Link from "next/link";
import PasswordChecklist from "react-password-checklist";


export default function Header() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [freelancerData, setFreelancerData] = useState({
    fullName: "",
    email: "",
    gender: "",
    location: "",
    skills: "",
    experience: "",
    phone: "",
    description: "",
    password: "",
  });

  const [clientData, setClientData] = useState({
    fullName: "",
    email: "",
    company: "",
    location: "",
    phone: "",
    password: "",
  });

  const [passwordAgain, setPasswordAgain] = useState("");

  // Show modal when activeModal changes
  useEffect(() => {
    if (!activeModal) return;

    const modalId =
      activeModal === "signup"
        ? "signupModal"
        : activeModal === "freelancer"
        ? "freelancerModal"
        : activeModal === "client"
        ? "clientModal"
        : "loginModal";

    document.querySelectorAll(".modal.show").forEach((m) => {
      const instance = bootstrap.Modal.getInstance(m);
      instance?.hide();
    });

    const modalEl = document.getElementById(modalId);
    if (!modalEl) return;

    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    return () => modal.hide();
  }, [activeModal]);

  const handleContinue = () => {
    if (!selectedRole) {
      alert("Please select a role first!");
      return;
    }
    setActiveModal(selectedRole);
  };

  const handleLogin = () => {
    console.log("Login data:", loginData);
    alert("Login submitted!");
    setActiveModal(null);
  };

  // ✅ Save Freelancer & Client logic remain the same
  const handleSaveFreelancer = () => {
    console.log("Freelancer:", freelancerData);
    alert("Freelancer saved!");
  };
  const handleSaveClient = () => {
    console.log("Client:", clientData);
    alert("Client saved!");
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <nav
        className="navbar navbar-expand-lg shadow-sm px-4 py-2"
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
          marginBottom: "0",
          color: "white"
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link
            href="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <Image
              src="/Interlocking Golden G Logo.png"
              alt="Gigs Genius Logo"
              width={80}
              height={80}
            />
            <span className="navbar-brand  fw-bold mb-0 ms-2 fs-5 ">
              <span style={{ color: "#C5A100" }}>Gigs</span>
              <span style={{ color: "black" }}>Genius</span>
            </span>
          </Link>

          <ul className="navbar-nav d-flex align-items-center mb-0">
            <li className="nav-item mx-2">
              <Link href="/products" className="nav-link fw-medium text-light">
                Product
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/projects" className="nav-link fw-medium text-light">
                Project
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/pricing" className="nav-link fw-medium text-light">
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-2">
              <button
                className="btn btn-warning fw-semibold rounded-pill px-4"
                onClick={() => setActiveModal("signup")}
              >
                Signup
              </button>
            </li>
            <button
              className="fw-medium text-dark rounded-pill px-4 py-2 shadow-sm"
              style={{ backgroundColor: "white", border: "none" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              Profile
            </button>
          </ul>
        </div>
      </nav>

      {/* ===== OFFCANVAS MENU ===== */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div
          className="offcanvas-header"
          style={{
            background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
          }}
        >
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            My Information
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <div className="mb-2">
            <Link href="/dashboard" className="text-dark-hover">
              Dashboard
            </Link>
          </div>
          <div className="mb-2">
            <Link href="/inbox" className="text-dark-hover">
              Inbox
            </Link>
          </div>
          <div className="mb-2">
            <Link href="/notifications" className="text-dark-hover">
              Notifications
            </Link>
          </div>
          <div className="mb-2">
            <Link href="/account" className="text-dark-hover">
              Account Info
            </Link>
          </div>
          <div className="mb-2">
            <Link href="/payment" className="text-dark-hover">
              Payment
            </Link>
          </div>
          <div className="mt-auto">
            <button
              type="button"
              className="btn btn-warning fw-semibold py-3 w-100 shadow-sm"
              onClick={() => setActiveModal("login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* ===== LOGIN MODAL ===== */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Login Credentials
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setActiveModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <label>Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <label>Password</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SIGNUP MODAL ===== */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex={-1}
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg rounded-4 border-0">
            <div className="modal-header border-0">
              <h1
                className="modal-title fs-5 fw-semibold"
                id="signupModalLabel"
              >
                Choose your role
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setActiveModal(null)}
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <div
                  className={`card border-0 shadow-sm ${
                    selectedRole === "freelancer"
                      ? "border-warning border-3 bg-warning bg-opacity-25"
                      : ""
                  }`}
                  style={{ width: "10rem", cursor: "pointer" }}
                  onClick={() => setSelectedRole("freelancer")}
                >
                  <img
                    src="/Freelancer.png"
                    className="card-img-top p-3"
                    alt="Freelancer"
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">Freelancer</h5>
                  </div>
                </div>

                <div
                  className={`card border-0 shadow-sm ${
                    selectedRole === "client"
                      ? "border-warning border-3 bg-warning bg-opacity-25"
                      : ""
                  }`}
                  style={{ width: "10rem", cursor: "pointer" }}
                  onClick={() => setSelectedRole("client")}
                >
                  <img
                    src="/Client.png"
                    className="card-img-top p-3"
                    alt="Client"
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">Client</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button
                type="button"
                className="btn btn-primary px-5 rounded-pill"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FREELANCER MODAL ===== */}
      <div
        className="modal fade"
        id="freelancerModal"
        tabIndex={-1}
        aria-labelledby="freelancerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="freelancerModalLabel">
                Freelancer Details
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setActiveModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              {/* Inputs */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="freelancerFullName"
                  placeholder="Full Name"
                  value={freelancerData.fullName}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      fullName: e.target.value,
                    })
                  }
                />
                <label htmlFor="freelancerFullName">Full Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={freelancerData.email}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      email: e.target.value,
                    })
                  }
                />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  value={freelancerData.gender}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="" disabled></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="other">Other</option>
                </select>
                <label>Gender</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Skills"
                  value={freelancerData.skills}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      skills: e.target.value,
                    })
                  }
                />
                <label>Skills</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Experience"
                  value={freelancerData.experience}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      experience: e.target.value,
                    })
                  }
                />
                <label>Experience (Years)</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={freelancerData.location}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      location: e.target.value,
                    })
                  }
                />
                <label>Location</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value={freelancerData.phone}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      phone: e.target.value,
                    })
                  }
                />
                <label>Phone Number</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Profile description"
                  value={freelancerData.description}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      description: e.target.value,
                    })
                  }
                />
                <label>Profile Description</label>
              </div>

              {/* Password Section */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Enter Password"
                  value={freelancerData.password}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      password: e.target.value,
                    })
                  }
                />
                <label className="form-label fw-semibold mt-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Re-enter Password"
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                />

                <div
                  className="p-3 rounded-3"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <PasswordChecklist
                    rules={[
                      "minLength",
                      "specialChar",
                      "number",
                      "capital",
                      "match",
                    ]}
                    minLength={8}
                    value={freelancerData.password}
                    valueAgain={passwordAgain}
                    onChange={() => {}}
                    messages={{
                      minLength: "At least 8 characters",
                      specialChar: "At least one special character",
                      number: "At least one number",
                      capital: "At least one uppercase letter",
                      match: "Passwords match",
                    }}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setActiveModal(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSaveFreelancer}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CLIENT MODAL ===== */}
      <div
        className="modal fade"
        id="clientModal"
        tabIndex={-1}
        aria-labelledby="clientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="clientModalLabel">
                Client Details
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setActiveModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              {/* Inputs */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={clientData.fullName}
                  onChange={(e) =>
                    setClientData({ ...clientData, fullName: e.target.value })
                  }
                />
                <label>Full Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={clientData.email}
                  onChange={(e) =>
                    setClientData({ ...clientData, email: e.target.value })
                  }
                />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company"
                  value={clientData.company}
                  onChange={(e) =>
                    setClientData({ ...clientData, company: e.target.value })
                  }
                />
                <label>Company Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={clientData.location}
                  onChange={(e) =>
                    setClientData({ ...clientData, location: e.target.value })
                  }
                />
                <label>Location</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value={clientData.phone}
                  onChange={(e) =>
                    setClientData({ ...clientData, phone: e.target.value })
                  }
                />
                <label>Phone Number</label>
              </div>

              {/* Password Section */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Enter Password"
                  value={clientData.password}
                  onChange={(e) =>
                    setClientData({ ...clientData, password: e.target.value })
                  }
                />
                <label className="form-label fw-semibold mt-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Re-enter Password"
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                />

                <div
                  className="p-3 rounded-3"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <PasswordChecklist
                    rules={[
                      "minLength",
                      "specialChar",
                      "number",
                      "capital",
                      "match",
                    ]}
                    minLength={8}
                    value={clientData.password}
                    valueAgain={passwordAgain}
                    onChange={() => {}}
                    messages={{
                      minLength: "At least 8 characters",
                      specialChar: "At least one special character",
                      number: "At least one number",
                      capital: "At least one uppercase letter",
                      match: "Passwords match",
                    }}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setActiveModal(null)}
                >
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSaveClient}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
