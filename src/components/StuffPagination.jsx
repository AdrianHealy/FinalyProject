import { Pagination } from "@mui/material";

import React, { useState, useContext, useEffect } from "react";
import { MainContex } from "../contexts/MainProvider";

const StuffPagination = () => {
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [countriesPerPage] = useState(10);

  // useEffect(() => {
  //   const getStuff = async () => {
  //     setLoading(true);
  //     const response = await axios.get("http://localhost:8000/product");
  //     console.log(response);
  //   };
  // }, []);

  const { productsPerPage, totalProductsCount, setCurrentPage } =
    useContext(MainContex);
  const count = Math.ceil(totalProductsCount / productsPerPage);

  return (
    <div className="pagination-block">
      <Pagination
        onChange={(event, value) => setCurrentPage(value)}
        count={count}
        variant="contained"
        shape="rounded"
      />
    </div>
  );
};

export default StuffPagination;
