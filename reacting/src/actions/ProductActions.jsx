import axios from "axios";
import { getProducts } from "../store/reducers/ProductReducer";

export const asyncGetProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    //here we have data of products that is sync data
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
