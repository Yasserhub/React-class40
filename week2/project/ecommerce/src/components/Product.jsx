import { Link } from "react-router-dom";

function product({product}) {
    const {title ,  image, id } = product
  
    return (
      <div className='product'>
        {product && (
        <Link to={`/product/${id}`}>
           <img className="image" src={image} alt={title} />
           <h3 className="title">{title}</h3>
        </Link>
        )}
      </div>
    )
  }
  
  export default product