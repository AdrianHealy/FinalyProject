import { Container } from "@mui/material";
import { integerPropType } from "@mui/utils";
import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import { MainContex } from "../contexts/MainProvider";
import "../styles/Card.css";

const Card = () => {
  const { getProduct, product, deleteProduct } = React.useContext(MainContex);

  // React.useEffect(() => {
  //   getProduct();
  // }, []);
  // if (!product) {
  //   return <h2>Получение данных ...</h2>;
  // }

  return (
    <>
      <div className="row" key="">
        <div className="main-card">
          <div className="product">
            <div className="image">
              <img src="" alt="stuff" />
            </div>
            <div className="info">
              <h3>Название </h3>

              <ul className="rating">
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star"></ion-icon>
                </li>
                <li>
                  <ion-icon name="star-half-outline"></ion-icon>
                </li>
              </ul>

              <div className="info-price">
                <span className="price">
                  400<small>Cом</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

/*className="compare" */
