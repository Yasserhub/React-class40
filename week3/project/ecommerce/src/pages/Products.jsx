import { useContext } from "react";
import { provideContext } from '../hooks/context'
import Categories from '../components/Categories'
import Product from '../components/Product'


function Products() {
  const { products, isLoading, serverError, filteredPro } = useContext(provideContext);

  return (
    <>
    {serverError && <h1>{serverError} ...</h1>}
    {isLoading && <h1>Please wait to load data ...</h1>}
      <Categories />
      <div className="products">
        {filteredPro.length === 0
          ? products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : products &&
            filteredPro.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    </>
  )
  
}

export default Products