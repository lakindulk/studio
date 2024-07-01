import React, { useState,useEffect } from "react";
import { theme } from "../../config/ThemeConfig";
import { Grid, Box } from "@mui/material";
import CustomTypography from "../Theme/CustomTypography";

export default function Nav({selected}) {
  const [select, setSelect] = useState("home");
 
  useEffect(() => {
    if (selected) {
      setSelect(selected);
    }
  }, [selected]);

  const handleClick = (value) => {
    setSelect(value);
  };


  return (
    <Grid>
      <Grid container spacing={2} sx={{ height: { lg: "auto" } }}>
        <Grid
          item
          xs={4}
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/iplus/image/upload/v1719462467/ffffff_666666_181818_1920_1080_3_pqdwff.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              width: "120px",
              paddingLeft: "24px",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <img
              src="https://res.cloudinary.com/iplus/image/upload/v1719462470/WhatsApp_Image_2024-06-24_at_2.20.40_PM_kslvgy.png"
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ backgroundColor: "#181818" }}>
          <Grid container sx={{ marginTop: "16px", paddingLeft: { lg: "25%" } }}>
            <Grid item xs='auto' >
            <a href="/" style={{textDecoration:'none'}}>
              <CustomTypography
                variant="navtext"
                sx={{
                  ...theme.typography.navtext,
                  borderBottom: select === "home" ? "2px solid white" : "none",
                  cursor: "pointer",
                  width: "50px",
                  paddingBottom: "2px",
                  borderColor: "#FCDD00",
                  textDecoration: "none",
                }}
                onClick={() => handleClick("home")}
              >
                Home
              </CustomTypography></a>
            </Grid>
            <Grid item xs='auto' marginLeft='48px'>
              <CustomTypography
                variant="navtext"
                sx={{
                  ...theme.typography.navtext,

                  borderBottom:
                    select === "services" ? "2px solid white" : "none",
                  cursor: "pointer",
                  width: "100px",
                  paddingBottom: "2px",
                  borderColor: "#FCDD00",
                  textDecoration: "none",
                }}
                onClick={() => handleClick("services")}
              >
                Our Services
              </CustomTypography>
            </Grid>
            <Grid item xs='auto' marginLeft='48px'>
              <CustomTypography
                variant="navtext"
                sx={{
                  ...theme.typography.navtext,

                  borderBottom: select === "price" ? "2px solid white" : "none",
                  cursor: "pointer",
                  width: "80px",
                  paddingBottom: "2px",
                  borderColor: "#FCDD00",
                  textDecoration: "none",
                }}
                onClick={() => handleClick("price")}
              >
                Price List
              </CustomTypography>
            </Grid>
            <Grid item xs='auto' marginLeft='48px'>
              <CustomTypography
                variant="navtext"
                sx={{
                  ...theme.typography.navtext,

                  borderBottom:
                    select === "gallery" ? "2px solid white" : "none",
                  cursor: "pointer",
                  width: "60px",
                  paddingBottom: "2px",
                  borderColor: "#FCDD00",
                  textDecoration: "none",
                }}
                onClick={() => handleClick("gallery")}
              >
                Gallery
              </CustomTypography>
            </Grid>
            <Grid item xs={2} marginLeft='48px'>
              <a href="/contact" style={{textDecoration:'none'}}>
              <CustomTypography
                variant="navtext"
                sx={{
                  ...theme.typography.navtext,

                  borderBottom:
                    select === "contact" ? "2px solid white" : "none",
                  cursor: "pointer",
                  width: "90px",
                  paddingBottom: "2px",
                  borderColor: "#FCDD00",
                  textDecoration: "none",
                }}
                onClick={() => handleClick("contact")}
              >
                Contact Us
              </CustomTypography>
              </a>
            </Grid>
            <Grid item xs={2}>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1378 5.34625L5.26027 3.92125L4.47527 0.94687C4.44799 0.847111 4.3888 0.759022 4.30676 0.69605C4.22472 0.633079 4.12432 0.598685 4.0209 0.59812H2.08777C2.01791 0.504069 1.92721 0.427476 1.82279 0.374344C1.71836 0.321211 1.60306 0.292982 1.4859 0.29187C1.28011 0.29187 1.08274 0.37362 0.937228 0.519137C0.791711 0.664653 0.709961 0.862016 0.709961 1.06781C0.709961 1.2736 0.791711 1.47096 0.937228 1.61648C1.08274 1.76199 1.28011 1.84375 1.4859 1.84375C1.7359 1.84375 1.94715 1.71875 2.08902 1.53625H3.65902L6.92777 13.9112C6.57121 14.2908 6.37235 14.7917 6.37152 15.3125C6.37128 15.5828 6.42432 15.8505 6.52763 16.1003C6.63093 16.35 6.78247 16.577 6.97356 16.7681C7.16466 16.9593 7.39157 17.1109 7.64131 17.2143C7.89106 17.3177 8.15873 17.3708 8.42902 17.3706C8.97515 17.3708 9.499 17.1541 9.8854 16.7681C10.2718 16.3822 10.4892 15.8586 10.4896 15.3125C10.4886 15.156 10.4691 15.0001 10.4315 14.8481H13.8896C13.8527 15.0002 13.8334 15.156 13.8321 15.3125C13.8321 16.45 14.7546 17.3706 15.8921 17.3706C17.0296 17.3706 17.9503 16.45 17.9503 15.3125C17.9504 14.7663 17.7336 14.2423 17.3476 13.8559C16.9615 13.4695 16.4378 13.2522 15.8915 13.2519C15.2978 13.2519 14.7665 13.5081 14.3903 13.91H9.93027C9.73887 13.7028 9.50672 13.5374 9.24838 13.4241C8.99004 13.3109 8.71109 13.2522 8.42902 13.2519C8.19152 13.2519 7.96777 13.3006 7.7559 13.3744L7.64215 12.9456H16.7565C17.1068 12.9385 17.4445 12.8138 17.7154 12.5916C17.9863 12.3695 18.1747 12.0627 18.2503 11.7206L19.2346 6.84687C19.2512 6.76162 19.2596 6.67497 19.2596 6.58812C19.2601 6.27874 19.1456 5.98023 18.9382 5.75061C18.7309 5.52098 18.4456 5.37726 18.1378 5.34625ZM15.8928 15.4962C15.8438 15.4961 15.7969 15.4766 15.7621 15.4421C15.7274 15.4076 15.7076 15.3608 15.7071 15.3119C15.709 15.2081 15.7915 15.1256 15.8934 15.1256C15.9953 15.1256 16.0778 15.2081 16.079 15.3112C16.0784 15.3601 16.0585 15.4067 16.0238 15.4411C15.9891 15.4755 15.9423 15.4948 15.8934 15.495L15.8928 15.4962ZM17.0053 10.8119L17.5978 10.2181L17.399 11.2056L17.0053 10.8119ZM7.97215 5.16375L8.61902 5.8125L7.81277 6.61875L7.00465 5.8125L7.68402 5.1325L7.97215 5.16375ZM10.7834 5.475L11.1196 5.8125L10.3134 6.61875L9.50527 5.8125L9.93527 5.38125L10.7834 5.475ZM6.01902 6.7975L6.56277 6.255L7.36902 7.0625L6.56277 7.86875L6.20965 7.51687L6.01965 6.79687L6.01902 6.7975ZM5.83465 6.0975L5.62965 5.32249L6.12027 5.81312L5.83465 6.0975ZM13.619 8.3125L12.8128 9.11875L12.0046 8.3125L12.8121 7.50437L13.619 8.3125ZM13.2546 7.0625L14.0621 6.255L14.8684 7.0625L14.0621 7.87L13.2546 7.0625ZM11.5628 7.86875L10.7546 7.0625L11.5621 6.25437L12.3684 7.06187L11.5628 7.86875ZM11.119 8.3125L10.3128 9.11875L9.50527 8.3125L10.3128 7.50437L11.119 8.3125ZM9.06277 7.86875L8.25465 7.0625L9.06215 6.25437L9.8684 7.06187L9.06277 7.86875ZM8.61902 8.3125L7.81277 9.11875L7.00465 8.3125L7.81215 7.50437L8.61902 8.3125ZM6.56277 8.75437L7.36902 9.56187L6.87902 10.0512L6.54152 8.77375L6.56215 8.75312L6.56277 8.75437ZM7.06402 10.7525L7.81215 10.0044L8.6184 10.8119L7.81215 11.6181L7.1059 10.9119L7.06402 10.7525ZM8.25527 9.56187L9.06152 8.75374L9.86965 9.56124L9.0634 10.3675L8.2559 9.56124L8.25527 9.56187ZM10.3128 10.0037L11.1203 10.8112L10.3128 11.6175L9.50527 10.8112L10.3128 10.0037ZM10.7553 9.56124L11.5628 8.75312L12.369 9.56062L11.5628 10.3669L10.7553 9.56124ZM12.8115 10.0031L13.6196 10.8106L12.8134 11.6169L12.0059 10.8094L12.8115 10.0031ZM13.2553 9.56062L14.0615 8.7525L14.8696 9.56L14.0634 10.3662L13.2553 9.56062ZM14.5053 8.31062L15.3115 7.5025L16.1196 8.31L15.3134 9.11624L14.5053 8.31062ZM15.7553 7.06062L16.5615 6.2525L17.369 7.0625L16.5628 7.87L15.7546 7.06187L15.7553 7.06062ZM15.3115 6.61812L14.5896 5.89562L15.8909 6.03937L15.3115 6.61812ZM13.6203 5.8125L12.814 6.62L12.0059 5.8125L12.1871 5.63125L13.5953 5.7875L13.6203 5.8125ZM9.06402 5.36875L8.96902 5.275L9.13965 5.29375L9.06465 5.36875H9.06402ZM6.56402 5.37L6.15777 4.96375L6.88902 5.045L6.56402 5.37ZM9.06402 11.2544L9.81715 12.0075H8.3109L9.06402 11.2544ZM11.564 11.2544L12.3171 12.0081H10.8096L11.564 11.2544ZM14.064 11.2544L14.8184 12.0087H13.3096L14.064 11.2544ZM14.5059 10.8119L15.3134 10.0037L16.1196 10.8112L15.3134 11.6175L14.5059 10.8119ZM15.7559 9.56187L16.5634 8.75437L17.3696 9.56062L16.5634 10.3687L15.7553 9.5625L15.7559 9.56187ZM17.8134 9.11812L17.0059 8.31187L17.8121 7.50437L18.0903 7.78187L17.8215 9.10937L17.8128 9.11875L17.8134 9.11812ZM18.1259 6.30562L17.8134 6.61812L17.4009 6.2075L18.0365 6.2775C18.0703 6.2825 18.099 6.29375 18.1265 6.305L18.1259 6.30562ZM8.43027 15.4956C8.38299 15.4929 8.33854 15.4722 8.30603 15.4377C8.27352 15.4033 8.25541 15.3577 8.25541 15.3103C8.25541 15.2629 8.27352 15.2174 8.30603 15.1829C8.33854 15.1485 8.38299 15.1277 8.43027 15.125C8.4774 15.1277 8.52169 15.1484 8.55409 15.1827C8.58648 15.2171 8.60453 15.2625 8.60453 15.3097C8.60453 15.3569 8.58648 15.4023 8.55409 15.4366C8.52169 15.471 8.4774 15.4916 8.43027 15.4944V15.4956ZM16.7571 12.0081H15.809L16.5634 11.2537L17.1446 11.835C17.0278 11.9412 16.8803 12.0162 16.7571 12.0081Z" fill="white"/>
</svg>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
