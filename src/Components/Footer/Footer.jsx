import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import CustomTypography from "../Theme/CustomTypography";

export default function Footer() {
  return (
    <Grid>
      <Grid
        container
        spacing={2}
        sx={{
          height: { lg: "auto" },
          marginTop: "40px",
          backgroundColor: "#181818",
        }}
      >
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "#181818",
          }}
        >
          <Box
            sx={{
              width: "auto",
              paddingLeft: "24px",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: "#FFFFFF" }}>
              Malka Studio
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ backgroundColor: "#181818" }}>
          <Grid container sx={{ paddingLeft: { lg: "25%" } }}>
            <Grid item xs="auto">
            <a href="/" style={{textDecoration:'none'}}>
            <CustomTypography variant="navtext">Home</CustomTypography></a>
            </Grid>
            <Grid item xs="auto" marginLeft="48px">
              <CustomTypography variant="navtext">
                Our Services
              </CustomTypography>
            </Grid>
            <Grid item xs="auto" marginLeft="48px">
              <CustomTypography variant="navtext">Price List</CustomTypography>
            </Grid>
            <Grid item xs="auto" marginLeft="48px">
              <CustomTypography variant="navtext">Gallery</CustomTypography>
            </Grid>
            <Grid item xs={2} marginLeft="48px">
                         <a href="/contact" style={{textDecoration:'none'}}>
             <CustomTypography variant="navtext">Contact Us</CustomTypography> </a>
            </Grid>
          </Grid>
        </Grid>
          <Grid item={1} sx={{marginLeft:'90%',marginBottom:'8px'}}>
          <Typography sx={{ fontSize: "12px", color: "#FFFFFF" }}>
          @ MalkaStudio.Pvt ltd</Typography>
          </Grid>
          
      </Grid>
    </Grid>
  );
}
