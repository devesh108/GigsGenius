'use client';
<<<<<<< HEAD
import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="container mt-1 ms-0">
        {/* First Row */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
=======
import { useEffect, useState } from "react";
import { FaClipboard } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* ===== Main Content ===== */}
      <div className="container-fluid px-3" style={{ marginTop: 0, paddingTop: 0 }}>
        {/* ===== First Row ===== */}
        <div className="row align-items-center mb-5" style={{ marginTop: 0 }}>
          <div className="col-12 col-md-8 mb-3 mb-md-0">
>>>>>>> 1a5d553bd6dbd547a21595948dd98dc8fd5a1192
            <video
              src="/intro GG.mp4"
              className="w-100 rounded shadow"
              autoPlay
              muted
              loop
              playsInline
<<<<<<< HEAD
            />
          </div>
          <div className="col-md-4 text-dark">
            <h1 style={{ whiteSpace: 'nowrap'}}>
              Welcome to <span style={{ color: '#EFBF04' }}>GigsGenius</span>
            </h1>
            <p>Find top-tier talent to bring your next big idea to life.</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row align-items-center mt-4">
          <div className="col-md-4 text-dark">
            <h1 data-aos="fade-up">here we are</h1>
            <p data-aos="fade-up">Find top-tier talent to bring your next big idea to life.</p>
          </div>
          <div className="col-md-8 p-0 d-flex justify-content-end">
          {/* <div className="col-md-8 ml-8"> */}
=======
              style={{
                objectFit: "cover",
                maxHeight: "400px",
                borderRadius: "12px",
              }}
            />
          </div>

          <div className="col-12 col-md-4 text-center text-md-start">
            <h1 style={{ whiteSpace: "nowrap", color: "black" }}>
              Welcome to <span style={{ color: "#C5A100" }}>Gigs</span>
              <span style={{ color: "black" }}>Genius</span>
            </h1>
            <p style={{ whiteSpace: "nowrap", color: "black" }}>
              Find top-tier talent to bring your next big idea to life.
            </p>
          </div>
        </div>

        {/* ===== Second Row ===== */}
        <div className="row align-items-center mt-5 flex-column-reverse flex-md-row">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h1 data-aos="fade-up" style={{ whiteSpace: "nowrap", color: "black" }}>
              Here we are
            </h1>
            <p data-aos="fade-up" style={{ whiteSpace: "nowrap", color: "black" }}>
              Find top-tier talent to bring your next big idea to life.
            </p>
          </div>
          <div className="col-12 col-md-8 p-0 mb-3 mb-md-0">
>>>>>>> 1a5d553bd6dbd547a21595948dd98dc8fd5a1192
            <video
              src="/abstract bg.mp4"
              className="w-100 rounded shadow"
              autoPlay
              muted
              loop
              playsInline
<<<<<<< HEAD
            />
          </div>
        </div>



      </div><br />
      <div style={{ textAlign: 'center', background: 'grey', color: 'black' }}>
        <h2>Our People</h2>
      </div>

      <div className="container mt-1 ms-0">
        <div className="row align-items-center mb-4">
          <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>

            </div>

=======
              style={{
                objectFit: "cover",
                maxHeight: "400px",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ===== Section: How We Work ===== */}
      <div
        className="text-center py-3"
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
          color: "white",
        }}
      >
        <h2>How we work</h2>
      </div>





      {/* ===== Example Card ===== */}
      <div className="container my-4">
        <div className="row justify-content-center">

          {/* ===== Card 1 ===== */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-3">
            <div className="card text-center shadow-sm" style={{ width: "18rem", borderRadius: "1rem" }}>
              <div className="my-3">
                <FaClipboard size={50} color="#C5A100" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Post your Project</h5>
                <p className="card-text text-muted">Describe your requirements</p>
              </div>
            </div>
          </div>

          {/* ===== Card 2 ===== */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-3">
            <div className="card text-center shadow-sm" style={{ width: "18rem", borderRadius: "1rem" }}>
              <div className="my-3">
                <FaClipboard size={50} color="#C5A100" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Hire Freelancers</h5>
                <p className="card-text text-muted">Choose from verified talent</p>
              </div>
            </div>
          </div>

          {/* ===== Card 3 ===== */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-3">
            <div className="card text-center shadow-sm" style={{ width: "18rem", borderRadius: "1rem" }}>
              <div className="my-3">
                <FaClipboard size={50} color="#C5A100" />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">Collaborate & Pay Securely</h5>
                <p className="card-text text-muted">Monitor your project in real time</p>
              </div>
            </div>
>>>>>>> 1a5d553bd6dbd547a21595948dd98dc8fd5a1192
          </div>

        </div>
      </div>


<<<<<<< HEAD
=======

      {/* ===== Section: Our Talent Network ===== */}

      <div
        className="text-center py-3"
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
          color: "white",
        }}
      >
        <h2>Our Talent Network</h2>
      </div>

      {/* ===== Marquee Cards Section ===== */}
      <div className="container mt-4 pb-5">
        <marquee behavior="scroll" direction="left" scrollAmount="10">
          <div className="row g-4 flex-nowrap" style={{ display: "flex" }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="col-12 col-md-4"
                style={{
                  flex: "0 0 auto",
                  width: "350px",
                  marginRight: "20px",
                }}
              >
                <div
                  className="card h-100 shadow-sm"
                  style={{
                    overflow: "hidden",
                    borderRadius: "12px",
                  }}
                >
                  <div className="row g-0 h-100">
                    <div className="col-4">
                      <img
                        src="/placeholder.jpg"
                        className="img-fluid rounded-start h-100"
                        alt="..."
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div
                        className="card-body"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                        }}
                      >
                        <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
                          Card title {item}
                        </h5>
                        <p className="card-text" style={{ fontSize: "0.9rem" }}>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </marquee>
      </div>
>>>>>>> 1a5d553bd6dbd547a21595948dd98dc8fd5a1192
    </>
  );
}
