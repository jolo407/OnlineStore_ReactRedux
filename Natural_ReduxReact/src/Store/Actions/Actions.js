// action: an arrow fn that returns an object
import Product from "../../components/Product/Product";
//object contains the type of action, payload (optional)

export const increaseCounter= () => {
  return {
    type: "Increase_Counter"
  };
};

export const addProductToCart = (Product) => {
  return {
    type: "ADD_PRODUCT",
    payload: Product,
  };
};

export const removeProductToCart = (Product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: Product,
  };
};