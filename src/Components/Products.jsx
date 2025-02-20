import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import products from '../data/products';


const Products = () => {
    const {productId} = useParams();
    const [specificProduct, setSpecificProduct] = useState(null);
    useEffect(() => {
        const foundProduct = products.find((product)=> product.id === productId);
        setSpecificProduct(foundProduct);
    }, [productId])

    if(!specificProduct) return <div className='text-3xl text-red-400'>Error! Product not found</div>

  return (
    <div>
        <img src={specificProduct.image} alt="" />
    </div>
  )
}

export default Products
