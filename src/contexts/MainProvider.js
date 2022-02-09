import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";

export const MainContex = React.createContext();

const INIT_STATE = {
  product: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    // case "GET_PRODUCT_TO_EDITE":
    //   return { ...state, productToEdite: action.payload };
    case "GET_PRODUCTS":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

const MainProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const response = await axios(API);
      console.log(response);
      let action = {
        type: "GET_PRODUCT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // const getProductToEdite = async (id) => {
  //   try {
  //     const response = await axios(`${API}/${id}`);

  //     let action = {
  //       type: "GET_PRODUCT_TO_EDITE",
  //       payload: response.data,
  //     };
  //     dispatch(action);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const saveEditedProduct = async (productEdite) => {
    try {
      await axios.patch(`${API}/${productEdite.id}`, productEdite);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };
  //!
  const getProducts = async () => {
    try {
      const response = await axios(`${API}/${window.location.search}`);

      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  //! Пагинация !
  const productsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (state.product) {
      setPosts(state.product);
    }
  }, [state.product]);
  console.log(state.product);
  // console.log(state.productToEdite);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProductsCount = posts.length;

  //!
  return (
    <MainContex.Provider
      value={{
        getProduct,
        addProduct,
        saveEditedProduct,
        deleteProduct,
        setCurrentPage,
        totalProductsCount,
        currentProducts,
        productsPerPage,
        product: state.product,
        productToEdite: state.productToEdite,
      }}
    >
      {props.children}
    </MainContex.Provider>
  );
};

export default MainProvider;
