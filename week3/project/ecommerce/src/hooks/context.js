import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";
export const provideContext = createContext();

const ProductContext = ({ children }) => {
  const URL = "https://fakestoreapi.com/products";
  const { data: allProducts, isLoading, serverError } = useFetch(URL);

  // const { data: categories } = useFetch(`${URL}/categories`);
  const [products, setProducts] = useState([]);
  const [filteredPro, setFilteredPro] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );
  //children is the Products component which sent as props from App.js
  //inside the function ProductContext

  useEffect(() => {
    if (filteredPro.length === 0) {
      setProducts(allProducts);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, allProducts, filteredPro]);

  const filterProducts = (e, cate) => {
    const filtered = allProducts.filter((product) => product.category === cate);
    setFilteredPro(filtered);

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

  // clear filter
  const clearFilter = () => {
    setFilteredPro([]);
  };

  // Favorite
  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      const favoritesIds = favorites.filter((favId) => favId !== id);
      setFavorites(favoritesIds);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  // transfer the the list of products after updated + the function filterProducts
  // we place the two parameters inside {}
  const value = {
    URL,
    products,
    favorites,
    isLoading,
    serverError,
    clearFilter,
    isFavorite,
    filteredPro,
    filterProducts,
    handleFavorite,
  };
  return (
    <provideContext.Provider value={value}>{children}</provideContext.Provider>
  );
};

export default ProductContext;
