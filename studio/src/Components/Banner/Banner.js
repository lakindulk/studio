import React from "react";
import "./Banner.css";


export default function Banner() {
 

  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/iplus/video/upload/v1719160401/3752424-hd_1920_1080_24fps_a1jmor.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <h1 className="BannerHeader">
          Malka Studio  
        </h1>
      </div>
    </div>
  );
}
