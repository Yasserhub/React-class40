import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

export const provideContext = createContext();

const ProductContext = ({ children }) => {
  const URL = "https://fakestoreapi.com/products";
  const { allProducts, isLoading, serverError } = useFetch(URL);
  const { categories } = useFetch(`${URL}/categories`);
  const [products, setProducts] = useState([]);
  //children is the Products component which sent as props from App.js
  //inside the function ProductContext

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  const showAllProducts = (e) => {
    const allProductsShowing = allProducts;
    setProducts(allProductsShowing);
  };

  const filterProducts = (e, cate) => {
    //filter out the products to that related to clicked button
    const filteredProducts = allProducts.filter(
      (product) => product.category === cate
    );
    setProducts(filteredProducts);
    //activate the clicked button
    const btn = Array.from(e.target.parentNode.children);
    btn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  // transfer the the list of products after updated + the function filterProducts
  // we place the two parameters inside {}
  const value = {
    products,
    categories,
    filterProducts,
    showAllProducts,
    isLoading,
    serverError,
    URL,
  };

  return (
    <provideContext.Provider value={value}>{children}</provideContext.Provider>
  );
};

export default ProductContext;
