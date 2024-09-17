import React from "react";
import Banner from "../../Components/Banner/Banner";
import { Grid } from "@mui/material";

import "./Contact.css";
import Nav from "../../Components/Nav/Nav";

import Contactdes from "../../Components/ContactDes/ContactDes";

import Footer from "../../Components/Footer/Footer";
const Contact = () => {
  return (
    <Grid>
      <Nav  selected="contact"/>
      <Banner link={"https://res.cloudinary.com/iplus/video/upload/v1719843329/4043935-hd_1920_1080_24fps_vki0dk.mp4"}/>
      <div className="contact">
       
        <Contactdes />
        
      </div>
      <br />
      <Footer/>
    </Grid>
  );
};

export default Contact;
