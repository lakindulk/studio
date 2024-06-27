import React from "react";
import "./service.css";
import { Button } from "@mui/material";

export default function Servicecard({
  svg,
  text,
  description,
  data1,
  data2,
  link,
}) {
  return (
    <div class="card">
      <div class="content">
        <div class="back">
          <div class="back-content">
            {svg}
            <strong>{text}</strong>
          </div>
        </div>

        <div class="front">
          <div class="img">
            <div class="circle"></div>
            <div class="circle" id="right"></div>
            <div class="circle" id="bottom"></div>
          </div>

          <div class="front-content">
            <small class="badge">{text}</small>
            <a href={link}><Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                width: "160px",
                marginTop: "8px",
                marginLeft: "8px",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  color: "white",
                  borderColor: "white",
                },
              }}
            >
              View More
            </Button></a>
            
            <div class="description">
              <div class="title">
                <p class="title">
                  <strong>{description}</strong>
                </p>
              </div>
              <p class="card-footer">
                {data1} &nbsp; | &nbsp; {data2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
