import { Container } from "@mui/material";
import React from "react";
import "../styles/GaleryPage.css";
import ImageGalery from "../image/review.jpg";

const GaleryPage = () => {
  return (
    <>
      <div>
        <img src={ImageGalery} alt="photo" id="galery_page" />
      </div>

      <Container>
        <div className="galery__main">
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
          <div className="galary_list"></div>
        </div>
      </Container>
      <div className="cellar"></div>
    </>
  );
};

export default GaleryPage;
