import React from "react";

import abdalwahab from "./../media/developer/abdalwahab.png";
import { FaTwitter, FaGithub, FaLinkedin, FaBriefcase, FaYoutube } from "react-icons/fa";

const Developer = () => {
  return (
    <div className="preview-profile">
      <div className="preview-profile-header">
        <div className="preview-profile-header-box">
          <div className="preview-profile-header-image-container">
            <img src={abdalwahab} alt="" className="preview-profile-header-image" />
          </div>

          <div className="preview-profile-header-content">
            <h1>Abd Alwahab Abdallah</h1>
            <p>
              Hi, I’m Abd Alwahab, a Full Stack Software Developer who loves building high
              performance and scalable products. I recently developed a web app using
              React , Node , Express and MongoDB that lets user order food online. I’d
              love to combine my passion for learning and teaching with my software
              development skills to continue building personalized learning products for
              people.
            </p>

            <div className="preview-profile-header-icons">
              <a href="https://www.linkedin.com/in/abd-alwahab/">
                <FaLinkedin color="#0072b1" size={30} />
              </a>

              <a href="https://github.com/Abd-Alwahab">
                <FaGithub color="#222" size={30} />
              </a>

              <a href="https://twitter.com/codeWithAbd">
                <FaTwitter color="#00acee" size={30} />
              </a>
              <a href="https://codewithabd.web.app">
                <FaBriefcase color="#222" size={30} />
              </a>

              <a href="https://www.youtube.com/channel/UCZz14Hj5YxrWse0lc9Bf1GQ">
                <FaYoutube color="red" size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
