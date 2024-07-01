import React from "react";
import "./Banner.css";
import { Grid, Box } from "@mui/material";

export default function Banner({link}) {
  return (
    <Grid className="video-container">
      <video autoPlay muted loop>
        <source
          src={link?link:"https://res.cloudinary.com/iplus/video/upload/v1719160401/3752424-hd_1920_1080_24fps_a1jmor.mp4"}
          type="video/mp4"
        />
      </video>
      <Grid className="content" >
        <Box
          sx={{
            width: "280px",
            height: "125px",
            borderRadius: "16px",
            backgroundColor: "rgba(217, 217, 217, 0.3)", 
            marginLeft:'80%',
            marginTop:'22%'
          }}
        >
          {" "}
          <Box sx={{ width: "260px" }}>
            <img
              src="https://res.cloudinary.com/iplus/image/upload/v1719467230/WhatsApp_Image_2024-06-24_at_2.22.01_PM_1_cdqpt5.png"
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
