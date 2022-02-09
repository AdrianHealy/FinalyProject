import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cellar.css";

const Cellar = () => {
  return (
    <>
      <div className="main-block">
        <div> </div>
        <div className="first">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/market">Товары </Link>
          </li>
        </div>
        <div className="second">
          <li>
            <Link to="/review">Отзывы</Link>
          </li>
          <li>Контакты</li>
        </div>
        <div className="third">
          <li>
            <Instagram />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
        </div>
      </div>
    </>
  );
};

export default Cellar;
