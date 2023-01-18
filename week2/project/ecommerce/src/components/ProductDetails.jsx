import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { provideContext } from "../hooks/context";


function ProductDetails() {
  const { id } = useParams();
  const { URL } = useContext(provideContext);
  const { data, isLoading, serverError } = useFetch(URL+`/`+id);
       


  const { image, title, category, description, price } = data;
  return (
    <>
      {serverError && <h1>{serverError} ...</h1>}
      {isLoading && <h1>Please wait to load data ...</h1>} 
      {/* <button className="category" onClick={(e)=> showAllProducts(e)} >
            All-Categories
          </button> */}
      {data && (
        <div
          className={isLoading ? "details-Container none" : "details-Container"}
        >
          <div className="left">
            <img src={image} alt={title} className="product-image" />
          </div>
          <div className="right">
            <h1>{title}</h1>
            <h2>{category}</h2>
            <p>{description}</p>
            <h4>Price: {price}$</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;