import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import products from "../data/products";
import { addToCart } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import {ToastContainer, toast} from "react-toastify"
import { useSelector } from "react-redux";

const Products = () => {
  const { productId } = useParams();
  const [specificProduct, setSpecificProduct] = useState(null);
  useEffect(() => {
    const foundProduct = products.find((product) => product.id === productId);
    setSpecificProduct(foundProduct);
  }, [productId]);

  if (!specificProduct)
    return (
      <div className="text-3xl text-red-400">Error! Product not found</div>
    );


    const addToCartFunc = ()=>{
        dispatch(addToCart(specificProduct));
    }

  return (
    <div className="container w-full h-screen flex justify-center items-center">
      <div className="h-4/5 w-4/5 border-1 border-gray-300 rounded-2xl flex gap-20 p-10">
      <Link to="/cart">
    <ToastContainer theme="dark" closeOnClick={false} autoClose={2000} /></Link>
        <div className="w-1/2 border-r-1 border-gray-400 h-full flex justify-center items-center ">
          <img src={specificProduct.image} />
        </div>
        <div>
          <div className=" w-xl flex justify-between">
            <h1 className="font-[Fira code] font-semibold text-xl">
              {specificProduct.name}
            </h1>
            <h1 className="font-[Geist Mono] font-mono text-xl">
              {specificProduct.price}$
            </h1>
          </div>
          <div className="w-xl">
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    className="size-5 shrink-0 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="size-5 shrink-0 text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.   382-1.831-4.401Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
              </div>
              <div className="w-full mt-5">
                <p className="flex flex-wrap">
                  {specificProduct.longDescription}
                </p>
                <button onClick={addToCartFunc} className="bg-blue-600 hover:bg-blue-500 transition duration-150 mt-10 w-full py-2 rounded-sm text-white font-[Geist Mono] text-2xl font-semibold cursor-pointer">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
