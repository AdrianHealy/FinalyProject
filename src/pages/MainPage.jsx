import React from "react";
import { Link } from "react-router-dom";
import Cellar from "../components/Cellar";

import Navbar from "../components/Navbar";
import SearchCard from "../components/SearchCard";

import "../styles/MainPage.css";
import Video from "../video/main-page-video.mp4";

const MainPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="main__section">
        <div className="content">
          <div className="content-text">
            <h1>Магазин живых</h1>
            <h1> тропических бабочек</h1>
            <p>
              Мы выращиваем живых тропических бабочек со всего Мира, чтобы вы
              могли соприкоснуться с этими удивительными существами.
            </p>
          </div>
          <Link to="/market">
            <button>Бабочки</button>
          </Link>
        </div>
      </section>

      <div>
        <video autoPlay loop muted className="main-video">
          <source src={Video} />
        </video>
      </div>
      <Cellar />
    </>
  );
};

export default MainPage;
