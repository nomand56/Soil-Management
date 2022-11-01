
import { useProductsContext } from '../../context/products_context';
import React,{useEffect} from 'react'
import GridView from '../GridView';
import ListView from '../ListView';
function ProductList(){
    const {
        products_loading: loading,
        products_error: error,
        products,
        fetchProducts,
        grid_view
      } = useProductsContext();
    useEffect(() => {
      
  fetchProducts()
    }, [])
    if (loading){
        return <h1>Loading...</h1>
    }
if (error){
    return <h1>error...</h1>
}
console.log("product",products)

if (grid_view === false) {
  return <ListView products={products}>product list</ListView>;
}

return <GridView products={products}>product list</GridView>;
};



export default ProductList