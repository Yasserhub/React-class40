import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const provideContext = createContext();

const ProductContext = ({ children }) => {
  const URL = "https://fakestoreapi.com/products";
  const { data: allProducts, isLoading, serverError } = useFetch(URL);
  const { data: categories } = useFetch(`${URL}/categories`);
  const [products, setProducts] = useState([]);
  //children is the Products component which sent as props from App.js
  //inside the function ProductContext

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const filterProducts = (e, cate) => {
    //filter out the products to that related to clicked button
    const filteredProducts = allProducts.filter(
      (product) => product.category === cate
    );
    filteredProducts.length === 0
      ? setProducts(allProducts)
      : setProducts(filteredProducts);
    //activate the clicked button
    activeButton(e);
  };

  const activeButton = (e) => {
    const buttons = Array.from(e.target.parentNode.children);
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  if (categories.length === 4) categories.unshift("showAllProducts");

  // transfer the the list of products after updated + the function filterProducts
  // we place the two parameters inside {}
  const value = {
    products,
    categories,
    filterProducts,
    isLoading,
    serverError,
    URL,
  };

  return (
    <provideContext.Provider value={value}>{children}</provideContext.Provider>
  );
};

export default ProductContext;
