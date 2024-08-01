import html from "../assets/Images/html.png";
import react from "../assets/Images/react.png";
import redux from "../assets/Images/redux.png";
import javascrpt from "../assets/Images/js.png";
import css from "../assets/Images/css-3.png";
import mui from "../assets/Images/muiLogo.jpeg";
import bootstrap from "../assets/Images/bootstrap.jpeg";
import antD from "../assets/Images/antDLogo.jpeg";
import express from "../assets/Images/express.jpeg";
import nodejs from "../assets/Images/nodejs.jpeg";
import mongodb from "../assets/Images/mongodb.jpeg";
import mysql from "../assets/Images/mysql1.jpeg";
import git from "../assets/Images/git.jpeg";
import github from "../assets/Images/code.png";
import postman from "../assets/Images/postman.png";
import json from "../assets/Images/json.png";
import api from "../assets/Images/api.png";

const initialState = {
  isLoad: true,
  homepageData: {},
  skills: {
    FrontEnd: [html, react, redux, javascrpt, css, mui, bootstrap, antD],
    Backend: [express, nodejs],
    DataBase: [mongodb, mysql],
    VersionControle: [git, github],
    Others: [postman, json, api],
  },
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ISLOAD":
      return {
        ...state,
        isLoad: false,
      };

    default:
      return {
        ...state,
      };
  }
};
