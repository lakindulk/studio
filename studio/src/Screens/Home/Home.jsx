import React from "react";
import Banner from "../../Components/Banner/Banner";
import { Grid } from "@mui/material";

import "./Home.css";
import Nav from "../../Components/Nav/Nav";
import CustomTypography from "../../Components/Theme/CustomTypography";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <Grid>
      <Nav />
      <Banner />
      <div className="home">
        <div style={{ paddingLeft: "40px", paddingTop: "2vh" }}>
          <div className="row">
            <div className="col-6">
              <CustomTypography variant="data">
                All kinds of photo printing, album making, framing, graphic
                design, digital printing
              </CustomTypography>
            </div>
          </div>
        </div>
        <About />
        <Services />
      </div>
      <br />
      <Footer/>
    </Grid>
  );
};

export default Home;
