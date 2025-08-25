'use client';
import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="container mt-1 ms-0">
        {/* First Row */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <video
              src="/intro GG.mp4"
              className="w-100 rounded shadow"
              autoPlay
              muted
              loop
              playsInline
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
            <video
              src="/abstract bg.mp4"
              className="w-100 rounded shadow"
              autoPlay
              muted
              loop
              playsInline
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

          </div>

        </div>
      </div>


    </>
  );
}
