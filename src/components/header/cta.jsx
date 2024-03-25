import React from "react";

const cta = () => {
  return (
    <div className="cta">
      <a href="/resume_url" download={"resume"} target="_blank" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default cta;
