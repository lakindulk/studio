import React from "react";
import { Grid, Box } from "@mui/material";
import CustomTypography from "../Theme/CustomTypography";

export default function About() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#181818",
        paddingLeft: "40px",
        marginTop: "56px",
        paddingBottom: "64px",
        position: "relative", // Ensure container is relative for absolute positioning of SVG
      }}
    >
      <Grid item xs={8}>
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
            <CustomTypography variant="header">About Us</CustomTypography>
          </Grid>
        </Grid>
        <Grid marginTop={{ lg: "8px" }} padding={{ lg: "16px" }} zIndex={999}>
          <CustomTypography variant="navtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem vestibulum, posuere quam sed, congue magna. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Phasellus in orci massa. Vivamus eu purus eu elit vehicula
            ultrices. Donec nec lacinia leo. Nullam porttitor augue sit amet
            nisi ullamcorper congue. Nam tristique erat id nulla lobortis, ac
            aliquet lorem volutpat. Phasellus nec lacus nec risus tincidunt
            bibendum. Proin vehicula consectetur nisl, non tempor urna blandit
            at. Proin quis velit nulla. Mauris eu lectus a dolor scelerisque
            aliquam. Nulla at purus id sem iaculis lobortis. Pellentesque
            habitant morbi tristique senectus et neProin vehicula consectetur
            nisl, non tempor urna blandit at. Proin quis velit nulla. Mauris eu
            lectus a dolor scelerisque aliquam. Nulla at purus id sem iaculis
            lobortis. Pellentesque habitant morbi tristique senectus et ne
          </CustomTypography>
          <CustomTypography variant="navtext"         zIndex={99}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem vestibulum, posuere quam sed, congue magna. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Phasellus in orci massa. Vivamus eu purus eu elit vehicula
            ultrices. Donec nec lacinia leo. Nullam porttitor augue sit amet
            nisi ullamcorper congue. Nam tristique erat id nulla lobortis, ac
            aliquet lorem volutpat. Phasellus nec lacus nec risus tincidunt
            bibendum. Proin vehicula consectetur nisl, non tempor urna blandit
            at. Proin quis velit nulla. Mauris eu lectus a dolor scelerisque
            aliquam. Nulla at purus id sem iaculis lobortis. Pellentesque
            habitant morbi tristique senectus et neProin vehicula consectetur
            nisl, non tempor urna blandit at. Proin quis velit nulla. Mauris eu
            lectus a dolor scelerisque aliquam. Nulla at purus id sem iaculis
            lobortis. Pellentesque habitant morbi tristique senectus et ne
          </CustomTypography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            width: "400px",
            height: "450px",
            backgroundColor: "#333030",
            borderBottom: "4px solid #FCDD00",
            borderRight: "4px solid #FCDD00",
          }}
        ></Box>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          marginLeft: "-2.5%",
          marginTop: "30%",
          left: "0",
          top: "0",
        }}
      >
      <svg width="129" height="120" viewBox="0 0 129 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M90.03 15.9266L74.5673 25.989C70.5944 28.5743 68.1694 25.1681 67.9079 24.7752L66.6399 22.8267C65.0447 20.3754 59.9701 18.8459 54.5891 22.3476L34.0361 35.7225C27.985 39.6603 28.0641 44.5848 29.5934 46.9347L30.8538 48.8716C30.9557 49.0327 33.2984 52.8447 29.2101 55.5052L13.7474 65.5676C12.3819 66.4584 11.4062 67.8246 11.0342 69.3666C10.6622 70.9086 10.9244 72.5005 11.7632 73.7931L34.5874 108.867C36.3348 111.552 40.0686 112.234 42.9117 110.384L55.2818 102.334C55.5552 102.156 55.7506 101.883 55.8251 101.574C55.8995 101.266 55.8468 100.947 55.6787 100.689C55.5105 100.431 55.2407 100.253 54.9284 100.196C54.6162 100.14 54.2872 100.208 54.0138 100.385L41.6437 108.435C39.9387 109.545 37.6978 109.136 36.6491 107.525L20.799 83.1684L37.2925 72.4352C37.9361 76.4092 39.3905 80.1773 41.5709 83.5195C50.66 97.4866 70.0788 101.026 84.857 91.409C99.6352 81.7921 104.264 62.6037 95.1748 48.6366C92.9292 45.1858 90.0474 42.3763 86.7669 40.2396L103.267 29.5024L119.117 53.8591C120.165 55.4705 119.631 57.6848 117.926 58.7944L103.494 68.1859C103.221 68.3638 103.026 68.6371 102.951 68.9456C102.877 69.2541 102.929 69.5726 103.098 69.831C103.266 70.0894 103.536 70.2665 103.848 70.3234C104.16 70.3804 104.489 70.3124 104.762 70.1345L119.194 60.7429C122.037 58.8928 122.926 55.2025 121.178 52.5175L98.3542 17.4438C96.6069 14.7587 92.8731 14.0765 90.03 15.9266ZM83.589 89.4605C69.9468 98.3382 52.023 95.0713 43.6326 82.1778C35.2421 69.2844 39.5145 51.5733 53.1567 42.6956C66.7989 33.8179 84.7227 37.0848 93.1132 49.9783C101.504 62.8717 97.2312 80.5828 83.589 89.4605ZM84.9897 38.6225C84.8434 38.7191 84.7188 38.8446 84.6245 38.9904C74.864 33.7508 62.2425 34.0093 51.8887 40.7471C41.5349 47.4849 36.1867 58.9202 37.0242 69.9664C36.8528 69.9935 36.6875 70.0566 36.5399 70.1512L19.531 81.2198L13.8249 72.4514C12.7763 70.84 13.3104 68.6257 15.0154 67.5161L30.4781 57.4538C35.3602 54.2767 34.2196 49.5881 32.9231 47.5416L31.655 45.5931C30.6356 44.0265 30.7663 40.624 35.3041 37.6711L55.8571 24.2962C60.1743 21.4868 63.721 22.8511 64.5782 24.1683L65.8462 26.1168C67.1624 28.1394 70.9429 31.1212 75.8353 27.9375L91.298 17.8751C93.003 16.7656 95.2439 17.174 96.2926 18.7855L101.999 27.5539L84.9897 38.6225Z" fill="#FCDD00"/>
<path d="M26.9113 54.2275C27.1847 54.0496 27.3801 53.7763 27.4546 53.4678C27.529 53.1593 27.4763 52.8408 27.3082 52.5824L26.0402 50.6339C24.9915 49.0225 22.7506 48.614 21.0456 49.7236L12.7988 55.0902C11.0938 56.1997 10.5597 58.414 11.6083 60.0254L12.8763 61.974C13.0445 62.2324 13.3143 62.4095 13.6266 62.4664C13.9388 62.5233 14.2678 62.4553 14.5412 62.2774C14.8146 62.0995 15.01 61.8262 15.0844 61.5177C15.1588 61.2092 15.1062 60.8907 14.938 60.6323L13.67 58.6838C13.5019 58.4254 13.4492 58.1069 13.5236 57.7984C13.598 57.4899 13.7935 57.2166 14.0668 57.0387L22.3136 51.6721C22.587 51.4942 22.916 51.4262 23.2282 51.4831C23.5404 51.54 23.8103 51.7172 23.9785 51.9755L25.2465 53.9241C25.4146 54.1825 25.6845 54.3596 25.9967 54.4165C26.3089 54.4734 26.6379 54.4054 26.9113 54.2275ZM56.9608 48.5412C46.7287 55.1998 43.5259 68.4843 49.8177 78.1529C56.1096 87.8215 69.5529 90.2735 79.7851 83.6149C90.0172 76.9563 93.22 63.6719 86.9282 54.0032C80.6363 44.3346 67.193 41.8826 56.9608 48.5412ZM78.5171 81.6664C69.4229 87.5844 57.4726 85.4063 51.8794 76.8113C46.2862 68.2163 49.1347 56.4078 58.2288 50.4898C67.323 44.5718 79.2733 46.7499 84.8665 55.3449C90.4597 63.9399 87.6112 75.7483 78.5171 81.6664Z" fill="#FCDD00"/>
</svg>


      </Box>
    </Grid>
  );
}
