import React from "react";
import "../../App.css";
import resume from "../../assets/Images/ResumeTulasi.pdf";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
const Home = () => {
  return (
    <div className="homeDiv">
      <div className="innerdiv">
        <div className="typing-container ">
          <h1 className="typing-line" style={{ animationDelay: "0s" }}>
            Hi, It's me
          </h1>
          <h1 className="typing-line" style={{ animationDelay: "4s" }}>
            MS.TULASI
          </h1>
          <h1 className="typing-line" style={{ animationDelay: "6s" }}>
            A Fullstack Developer ...
          </h1>
        </div>
        <div className="socialmedia">
          <a className="downloadbtn" href={resume} download>
            <Button type="primary" icon={<DownloadOutlined />} size={"large"}>
              Download Resume
            </Button>
          </a>
          <a href="https://www.facebook.com/tulasi.bora.7">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com/Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="bx bxs-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
