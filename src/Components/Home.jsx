import React,{useState} from "react";
import products from "../data/products";
import { Link } from "react-router";

const Home = () => {


  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-36 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/products/${product.id}`}>
                <div key={product.id} className="group relative">
                  <img
                    src={product.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="aspect-square w-full rounded-md bg-gray-200  group-hover:opacity-75 group-hover:scale-110 ease-in lg:aspect-auto lg:h-80
                    object-cover transition overflow-hidden"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{`${product.price}$`}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
