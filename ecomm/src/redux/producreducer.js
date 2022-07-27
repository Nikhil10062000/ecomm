import {  SET_PRODUCT  } from "./constant";

export const productlist = (state = [], action) => {
   
  switch (action.type) {
    case SET_PRODUCT:
      return [...action.payload];

    default:
      return state;
  }
};
