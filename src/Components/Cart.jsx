import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/CartSlice";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const sum = cart.reduce((acc,current)=>(
        acc+current.price
    ),0)

    setCartTotal(parseFloat(sum))
  }, [cart])


  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="w-full flex items-center justify-center h-screen text-8xl font-[Geist Mono] font-semibold text-gray-600">
        <ToastContainer theme="dark" autoClose={2000} />
        The cart is empty
      </div>
    );
  }

  return (
    <div>
      <div className=" max-w-full overflow-x-hidden px-4 h-96">
        <ToastContainer />
        <div className="flex justify-between">
          <h2
            className="text-lg font-medium text-center w-full mt-4 text-gray-900"
            id="slide-over-title "
          >
            Shopping cart
          </h2>
        </div>

        <div className="mt-8">
          <div className="">
            <ul role="list" className="-my-6 divide-y p-4 divide-gray-200">
              {cart.map((cartItem) => (
                <li key={cartItem.id} className="flex py-6">
                  <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={cartItem.image}
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      className="size-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/products/${cartItem.id}`}>
                            {cartItem.name}
                          </Link>
                        </h3>
                        <p className="ml-4">{cartItem.price}$</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1</p>

                      <div className="flex">
                        <button
                          onClick={() => dispatch(removeFromCart(cartItem.id))}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{cartTotal}$</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={()=> navigate("/")}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
