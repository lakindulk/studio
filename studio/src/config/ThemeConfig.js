// Project Functions/Constants
import { createTheme } from "@mui/material/styles";

const baseFont = "Inter";
const whiteText = "#FFFFFF";
const blackText = "#181818";
const whiteText2 = "#C1C1C1";


export const theme = createTheme({
 
  typography: {
    navtext: {
      fontFamily: baseFont,
      fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
      fontWeight: 300,
      color: whiteText,
    },
    navtext2: {
      fontFamily: baseFont,
      fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
      fontWeight: 300,
      color: blackText,
    },
    navtext3: {
      fontFamily: baseFont,
      fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "16px" },
      fontWeight: 400,
      color: whiteText2,
    },
    data: {
      fontFamily: baseFont,
      fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "16px" },
      fontWeight: 400,
      color: whiteText,
    },
    data2: {
      fontFamily: baseFont,
      fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "16px" },
      fontWeight: 400,
      color: blackText,
    },
    header: {
      fontFamily: baseFont,
      fontSize: { lg: "32px", md: "32px", sm: "32px", xs: "24px" },
      fontWeight: 600,
      color: whiteText,
    },
    headerblack: {
      fontFamily: baseFont,
      fontSize: { lg: "32px", md: "32px", sm: "32px", xs: "24px" },
      fontWeight: 600,
      color: blackText,
    },
  },
});
