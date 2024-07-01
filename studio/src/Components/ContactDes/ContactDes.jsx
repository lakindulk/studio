import React from "react";
import { Grid, Box } from "@mui/material";
import CustomTypography from "../Theme/CustomTypography";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

import "./Contactdes.css";

export default function ContactDes() {
  const googleMapsUrl = "https://maps.app.goo.gl/S4JhBPTnwSSMabwB9";

  const handleClick = () => {
    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#ffffff",
        paddingLeft: "40px",
        paddingBottom: "64px",
        position: "relative", // Ensure container is relative for absolute positioning of SVG
      }}
    >
      <Grid item xs={6} pt={8}>
        <Grid container>
          <Grid item xs="auto">
            <Box
              sx={{
                width: "6px",
                height: "48px",
                backgroundColor: "#FCDD00",
              }}
            ></Box>
          </Grid>
          <Grid item xs={5} marginLeft="8px">
            <CustomTypography variant="headerblack">
              Contact US
            </CustomTypography>
          </Grid>
        </Grid>
        <Grid marginTop={{ lg: "8px" }} padding={{ lg: "16px" }} zIndex={999}>
          <CustomTypography variant="navtext2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem vestibulum, posuere quam sed, congue magna. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Phasellus in orci massa. Vivamus eu purus eu elit vehicula
            ultrices. Donec nec lacinia leo. Nullam porttitor augue sit amet
            nisi ullamcorper congue. Nam tristique erat id nulla lobortis, ac
            aliquet lorem volutpat. Phasellus nec lacus nec risus tincidunt
            bibendum.
          </CustomTypography>
          <CustomTypography pt={2} variant="data2">
            Our Address{" "}
          </CustomTypography>
          <CustomTypography variant="navtext2">
            No 305,Main Street,Kegalle
          </CustomTypography>
          <CustomTypography variant="navtext2" marginTop="24px">
            Find us on google map :{" "}
          </CustomTypography>
          <Box  onClick={handleClick} sx={{width:{lg:'500px'},cursor:'pointer',height:{lg:'300px'},marginTop:'16px',
       '&:hover': {
          transition: 'transform 0.5s ease, box-shadow 0.6s ease', 
          boxShadow: `
            15px 15px 30px #e0e0e0, 
            -15px -15px 30px #ffffff
          `, 
          borderRadius:'20px'
        },
        }}>
            <img onClick={handleClick}  src="https://res.cloudinary.com/iplus/image/upload/v1719848648/Screenshot_2024-07-01_211341_byd97h.png" alt="location" style={{width:'100%',height:'100%',borderRadius:'20px'}}/>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={6} pt={8}>
        <div className="login-box">
          <form>
            <div className="user-box">
              <input type="text" name="username" required />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input type="text" name="subject" required />
              <label>Subject</label>
            </div>
            <div className="user-box">
              <input type="text" name="description" required />
              <label>Description</label>
            </div>
            <center>
              <a href="/#">
                SEND
                <span></span>
              </a>
            </center>
          </form>
        </div>
      </Grid>
      <Grid
        pt={2}
        pl={2}
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        width="800px"
      >
        <Grid item xs={2} sm={4} md={4}>
          <PhoneInTalkIcon />
          <CustomTypography variant="navtext2">
           035 2223799
          </CustomTypography>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <EmailIcon />
          <CustomTypography variant="navtext2">
          malkastudio305@gmail.com
          </CustomTypography>
        </Grid>
      </Grid>
    </Grid>
  );
}
