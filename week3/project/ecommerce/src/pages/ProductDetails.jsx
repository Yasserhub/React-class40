import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import Product from "../components/Product";


const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, serverError } = useFetch(`https://fakestoreapi.com/products/`+id);
  
  const { title, category, rating, description } = data;
  return (
    <>
      {serverError && <h1>{serverError} ...</h1>}
      {isLoading && <h1>Please wait to load data ...</h1>} 
      
      {data && (
        <div
          className={isLoading ? "details-Container none" : "details-Container"}
        >
          
          <Product product={data} />
          <div className="details">

            <h1>{title}</h1>
            <h2>{category}</h2>
            <p>{description}</p>
            <h3>Rating: {rating.rate}</h3>
            <h3>Sold: {rating.count} times</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;