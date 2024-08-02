import React from "react";
import "../../App.css";
import tulasipics from "../../assets/Images/TulasiProfile.jpg";
import { Divider, Form } from "antd";
import { Button, Input } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
const Contact = () => {
  return (
    <div className="contactDiv">
      <div className="formDivContact">
        <img src={tulasipics} alt="profile pic" className="profilepics" />
        <div>
          <Form className="form">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Mail" />
            <Input type="text" placeholder="Phone number" />
            <Input type="text" placeholder="Messege" />
            <Button variant="contained"> Send</Button>
          </Form>
        </div>
      </div>
      <Divider className="Divider" />
      <p className="contactText">
        I am always looking for opportunities to grow and learn. If you have any
        questions or comments, Feel free to reach out to me anytime...
      </p>
      <div className="footerContact">
        <div>
          <LocationOnIcon />
          <p>2_77,Kudduvalasa,L.Kota,VZM,536151</p>
        </div>
        <div>
          <CallIcon />
          <p> +91 8367668413</p>
        </div>
        <div>
          <MailIcon />
          <p>tulasibora2000@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
