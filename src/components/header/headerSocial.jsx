import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import React from "react";

function headerSocial() {
  return (
    <div className="header_social">
      <a href="http://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="http://figma.com" target="_blank" rel="noreferrer">
        <FaFigma />
      </a>
    </div>
  );
}

export default headerSocial;
