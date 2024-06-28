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
      <Nav />
      <Banner />
      <div className="contact">
       
        <Contactdes />
        
      </div>
      <br />
      <Footer/>
    </Grid>
  );
};

export default Contact;
