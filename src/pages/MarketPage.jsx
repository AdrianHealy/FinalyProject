import React from "react";

import ProductTable from "../components/ProductTable";
import StuffPagination from "../components/StuffPagination";
import { MainContex } from "../contexts/MainProvider";
import "../styles/MarketPage.css";

const MarketPage = () => {
  const { getProduct, product } = React.useContext(MainContex);

  React.useEffect(() => {
    getProduct();
  }, []);
  if (!product) {
    return <h2>Получение данных ...</h2>;
  }

  return (
    <>
      <div className="market__content">
        <div className="card-form">
          <ProductTable />
        </div>
      </div>

      <div className="pagination-block">
        <StuffPagination />
      </div>
    </>
  );
};

export default MarketPage;
