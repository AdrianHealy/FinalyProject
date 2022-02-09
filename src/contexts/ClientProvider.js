import React, { useState } from "react";
import axios from "axios";
import { API, APIREW } from "../helpers/const";
import { useNavigate } from "react-router-dom";

export const ClientContext = React.createContext();
const INIT_STATE = {
  answer: null,
  review: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ANSWER":
      return { ...state, answer: action.payload };
    case "GET_REVIEW":
      return { ...state, review: action.payload };
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const getAnswer = async () => {
    try {
      const response = await axios(`${API}/${window.location.search}`);
      let action = {
        type: "GET_ANSWER",
        payload: response.data,
      };
      dispatch(action);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getReview = async () => {
    try {
      const response = await axios(APIREW);

      let action = {
        type: "GET_REVIEW",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async (newReview) => {
    try {
      await axios.post(APIREW, newReview);
    } catch (error) {
      console.log(error);
    }
  };

  //! Избранное

  // const addToSpecial = () => {
  //   let elem = JSON.parse(localStorage.getItem("elem"));
  //   if (!elem) {
  //     elem = {
  //       products: [],

  //     };
  // };

  //!

  return (
    <ClientContext.Provider
      value={{
        getAnswer,
        getReview,
        addReview,
        review: state.review,
        answer: state.answer,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
