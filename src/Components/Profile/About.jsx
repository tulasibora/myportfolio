import React from "react";

const About = () => {
  return (
    <div className="aboutDiv">
      <h1 className="slide-out pageHeadding ">About Me</h1>
      <p className="slide-out">
        I'm <span>Tulasi,</span> a Full Stack Developer
      </p>
      <div className="aboutContent ">
        <p className="slideRight">
          In my professional career, I've worked on various projects, leveraging
          a wide range of technologies, including React, Redux, JavaScripts and
          etc... and I love exploring new technologies.
        </p>
        <p className="slide-out">
          When I'm not coding, you can find me playing and spending quality time
          with my pet, Dollar, who always bring joy and companionship to my
          life.
        </p>
        <p className="slide-out">
          Technology has always been an ever-evolving field, and I'm excited to
          see what the future holds. I'm open to collaborations, new
          opportunities, and contributing to meaningful projects.
        </p>
        <p className="slide-out">
          Let's connect and explore the possibilities together!
        </p>
      </div>
    </div>
  );
};

export default About;
