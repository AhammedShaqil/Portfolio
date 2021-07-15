import React from "react";

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="timeline-item">
        <i className="fas fa-home"></i>
        <div className="timeline-text">Home</div>
      </div>
      <div className="timeline-item">
        <i className="fas fa-user-alt"></i>
        <div className="timeline-text">About</div>
      </div>
      <div className="timeline-item">
        <i className="far fa-file"></i>
        <div className="timeline-text">Resume</div>
      </div>
      <div className="timeline-item">
        <i className="far fa-bookmark"></i>
        <div className="timeline-text">Portfolio</div>
      </div>
      <div className="timeline-item">
        <i className="fas fa-server"></i>
        <div className="timeline-text">Services</div>
      </div>
      <div className="timeline-item">
        <i className="fas fa-envelope"></i>
        <div className="timeline-text">Contact</div>
      </div>
    </section>
  );
}
