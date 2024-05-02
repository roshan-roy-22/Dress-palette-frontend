import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopConext"
import { useParams } from "react-router-dom";
import ProductHd from '../components/ProductHd'
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import RelatedProduct from '../components/RelatedProduct';


const Product = () => {
  const {allProducts}=useContext(ShopContext)
  const {productId} = useParams();
  // console.log(all_products);
  console.log(productId);
  const product = allProducts.find((e)=>e.id===Number(productId))
  if(!product){
    return <div>Product not found!</div>
  }
  return (
   <section className='max_padd_container py-28'>
    <ProductHd product={product}/>
    <ProductDisplay product={product} />
    <ProductDescription/>
    <RelatedProduct/>
   </section>
  )
}

export default Product