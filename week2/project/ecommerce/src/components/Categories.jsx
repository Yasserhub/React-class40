import { provideContext } from "../hooks/context"
import { useContext } from "react"
import Category from "./Category"


function Categories() {
  const {showAllProducts, categories} = useContext(provideContext)
  
  return (
    <div className="categories_container"> 
    <button className="category" onClick={(e)=> showAllProducts(e)} >
            All-Categories
          </button>
      { categories &&
        (categories.map((category, index) => (
          <Category key={index} category={category} />
        ))
      )}
    </div>
  )
}

export default Categories