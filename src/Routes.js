import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import MainProvider from "./contexts/MainProvider";
import AboutUs from "./pages/AboutUs";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import DetailPage from "./pages/DetailPage";
import ClientProvider from "./contexts/ClientProvider";
import AuthProvider from "./contexts/AuthProvider";
import SearchCard from "./components/SearchCard";
import ReviewPage from "./pages/ReviewPage";
import Navbar from "./components/Navbar";
import GaleryPage from "./pages/GaleryPage";
import Cellar from "./components/Cellar";

const Routes = () => {
  return (
    <AuthProvider>
      <ClientProvider>
        <MainProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" element={<MainPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/search" element={<SearchCard />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/galery" element={<GaleryPage />} />
            </Switch>
          </BrowserRouter>
        </MainProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default Routes;
