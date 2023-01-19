import { useContext } from "react";
import { provideContext } from '../hooks/context'
import Categories from './Categories'
import Product from './Product'


function Products() {
  const { products, isLoading, serverError } = useContext(provideContext);

  return (
    <>
    {serverError && <h1>{serverError} ...</h1>}
    {isLoading && <h1>Please wait to load data ...</h1>}
      <Categories />
      {products && (<div className='products_container'>
        {
          products.map((product) => (
          <Product key={product.id} product={product}/> 
          ))
        }
      </div>
      )}
    </>
  )
  
}

export default Products