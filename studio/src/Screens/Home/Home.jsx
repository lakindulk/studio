import React from "react";
import Banner from "../../Components/Banner/Banner";
import {Grid} from '@mui/material';

import "./Home.css";
const Home = () => {
  return (
    <Grid >
      <Banner />
      <div className="home">
        <div style={{ paddingLeft: "19vh", paddingTop: "2vh" }}>
          <div className="row">
            <div className="col-6">
              <h4 style={{ color: "green" }}>
                Experience the beauty and serenity of Sri Lanka
              </h4>
              <p style={{ color: "white" }}>
                Sri Lanka is a beautiful, exotic destination full of culture,
                nature, wildlife, and smiling faces. For a country with such a
                violent (and recently so, at that) history, the island is
                actually home to some of the friendliest people out
                there.Experience the beauty and serenity of Sri Lanka’s scenic
                hill country within the luxurious comforts of a boutique hotel
                par excellence. 98 Acres Resort and Spa is an elegant, chic
                hotel that stands on a scenic 198 acre tea estate, surrounded by
                a stunning landscape.
              </p>{" "}
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <br />
    </Grid>
  );
};

export default Home;
