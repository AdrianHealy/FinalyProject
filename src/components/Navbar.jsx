import { Logout, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { ClientContext } from "../contexts/ClientProvider";
import "../styles/Navbar.css";

const Navbar = () => {
  const { authWithGoogle, logout, user } = React.useContext(AuthContext);
  const { getAnswer } = React.useContext(ClientContext);
  const search = new URLSearchParams(window.location.search);
  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const navigate = useNavigate();

  const searchProduct = (key, value) => {
    search.set(key, value);
    let newPath = `${window.location.pathname}?${search.toString()}`;
    setSearchValue(search.get("q") || "");
    navigate(newPath);
    getAnswer();
    setSearchValue("");
  };
  const handleSubmit = (key, value) => {
    navigate("/search");
    searchProduct(key, value);
  };

  // const resetProduct = () => {
  //
  //   setSearchValue("");
  //   getAnswer();
  // };

  return (
    <div className="navbar__main">
      <div className="container__navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="nav-item">
            <Link to="/market">Товары </Link>
          </li>
          <li className="nav-item">
            <Link to="/review">Отзывы</Link>
          </li>
          <li className="nav-item">
            <Link to="/galery">Галерея</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">Добавить </Link>
          </li>
          <li className="nav-item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit("q", searchValue);
                // resetProduct();
              }}
            >
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Поиск..."
              />
            </form>
          </li>
          <li>
            <IconButton size="large" color="inherit">
              <Badge color="error" badgeContent="">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </li>
          <li>
            {user ? (
              <>
                <IconButton size="small" color="inherit"></IconButton>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
                <IconButton onClick={logout} size="large" color="inherit">
                  <Logout />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={authWithGoogle} size="small" color="inherit">
                Войти
              </IconButton>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
