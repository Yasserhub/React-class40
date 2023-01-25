import { Link } from "react-router-dom";
import Heart from "./Heart";

function product({product}) {
    const {title ,  image, id , price} = product
  
    return (
      <>
      
        {product && (
          <div className='product'>
        <Link to={`/product/${id}`}>
           <img className="product-image" src={image} alt={title} />
           <h3 className="product-description">{title}</h3>
        </Link>

        <div className="rating">
            <h3>Price: {price}€</h3>
            <Heart id={id} />
          </div>

        </div>
        )}
      
      </>
    )
  }
  
  export default product