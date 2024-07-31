import React from "react";
import "../../App.css";
import resume from "../../assets/Images/ResumeTulasi.pdf";
const Home = () => {
  return (
    <div className="homeDiv">
      <div className="innerdiv">
        <div class="typing-container ">
          <h1 class="typing-line" style={{ animationDelay: "0s" }}>
            Hi, It's me
          </h1>
          <h1 class="typing-line" style={{ animationDelay: "4s" }}>
            MS.TULASI
          </h1>
          <h1 class="typing-line" style={{ animationDelay: "6s" }}>
            A Fullstack Developer ...
          </h1>
        </div>
        <div className="socialmedia">
          <a className="downloadbtn" href={resume}>
            Download CV
          </a>
          <a href="https://www.facebook.com/tulasi.bora.7">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/Twitter">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i class="bx bxs-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
