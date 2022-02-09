import { Container } from "@mui/material";
import React from "react";
import { ClientContext } from "../contexts/ClientProvider";
import "../styles/SearchCard.css";
const SearchCard = () => {
  const { answer } = React.useContext(ClientContext);

  if (!answer) {
    return <h2>КуКу</h2>;
  }

  return (
    <>
      <Container>
        {answer.map((item) => (
          <div className="detail-page">
            <div className="detail-left-img">
              <img src={item.image} alt="#" />
            </div>
            <div className="detail-right">
              <h2>{item.name}</h2>
              <h3>{item.description}</h3>
              <strong>{item.price} y.e</strong>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default SearchCard;

/*

 {answer.map((item) => (
        <div className="row" key="">
          <div className="main-card">
            <div className="product">
              <div className="image">
                <img src={item.image} alt="stuff" />
              </div>
              <div className="info">
                <h3>{item.name}</h3>

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
      ))}



*/
