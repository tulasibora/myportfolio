import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const skills = useSelector((state) => state.skills);
  const [techName, setTechname] = useState("FrontEnd");
  const [data, setData] = useState(skills.FrontEnd);
  const handleSetBackgroundNContent = (data) => {
    setTechname(data.name);
    if (data.name === "FrontEnd") {
      setData(skills.FrontEnd);
    }
    if (data.name === "Backend") {
      setData(skills.Backend);
    }
    if (data.name === "DataBase") {
      setData(skills.DataBase);
    }
    if (data.name === "VersionControle") {
      setData(skills.VersionControle);
    }
    if (data.name === "Others") {
      setData(skills.Others);
    }
  };
  return (
    <div className="skills">
      <h1 className="pageHeadding">Skills</h1>
      <p className="skillsPara">
        "Committed to growth, I eagerly embrace new challenges. I'll learn and
        return prepared"
      </p>
      <Paper elevation={8} className="paperSkills">
        <div className="navbarhead">
          <ul className=" Skillsset">
            <li>
              <Button
                onClick={() =>
                  handleSetBackgroundNContent({ name: "FrontEnd" })
                }
                className={
                  techName === "FrontEnd"
                    ? "nav-link skillheadActive "
                    : "nav-link skillhead"
                }
              >
                FrontEnd
              </Button>
            </li>
            <li>
              <Button
                onClick={() => handleSetBackgroundNContent({ name: "Backend" })}
                className={
                  techName === "Backend"
                    ? " nav-link skillheadActive "
                    : "nav-link skillhead"
                }
              >
                Backend
              </Button>
            </li>
            <li>
              <Button
                onClick={() =>
                  handleSetBackgroundNContent({ name: "DataBase" })
                }
                className={
                  techName === "DataBase"
                    ? " nav-link skillheadActive "
                    : "nav-link skillhead"
                }
              >
                Data Base
              </Button>
            </li>
            <li>
              <Button
                onClick={() =>
                  handleSetBackgroundNContent({ name: "VersionControle" })
                }
                className={
                  techName === "VersionControle"
                    ? " nav-link skillheadActive "
                    : "nav-link skillhead"
                }
              >
                Version
              </Button>
            </li>
            <li>
              <Button
                onClick={() => handleSetBackgroundNContent({ name: "Others" })}
                className={
                  techName === "Others"
                    ? " nav-link skillheadActive "
                    : "nav-link skillhead"
                }
              >
                Others
              </Button>
            </li>
          </ul>
        </div>
        <div className="SkillsContainer">
          {data.map((skill, i) => {
            return (
              <div className="skillsImageDiv" key={i}>
                <img src={skill} alt="skills" className="skillsImage" />
              </div>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default Skills;
