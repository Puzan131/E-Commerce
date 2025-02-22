import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [cartLength, setCartLength] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <div className="bg-white pb-10 h-32 sticky top-0 z-10  w-full ">
      <div className="w-full  font-[poppins] h-1/3 flex px-12 text-sm justify-between items-center bg-gray-200">
        <div>
          <ul className="flex gap-10 items-center h-full justify-between">
            <li className="border-r-1 px-4 border-gray-600">About us</li>
            <li className="border-r-1 px-4 border-gray-600">Privacy policy</li>
          </ul>
        </div>
        <div>Customer-Service: 9862803644</div>
      </div>
      <ul className=" list-none flex w-full mt-4  justify-evenly items-center h-full text-black font-mono text-2xl ">
        <NavLink
          className={({ isActive }) => isActive && "border-b-2 border-black"}
          to="/"
        >
          <li className="cursor-pointer scale-150 py-2">
            <FaHome />
          </li>
        </NavLink>
        <li>
            <form>
          <input
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
            placeholder="Search"
            className="bg-gray-100 text-xl px-4 outline-none focus:border-2 focus:border-black  border-1 font-[montserrat] border-gray-300 w-3xl focus:bg-white transition duration-150 py-2.5"
          />
          <button type="submit" className="py-3 align-middle px-4 text-white border-none cursor-pointer  bg-blue-800">
            <FaSearch width="1" />
          </button>
          </form>
        </li>

          <NavLink
            className={({isActive})=> isActive && "border-b-2 border-black "}
            to="/cart"
          >
            <li className="cursor-pointer py-3 align-middle scale-130">
              <FaShoppingCart
                className=""
                fill="none"
                stroke="black"
                strokeWidth="50"
              />
              {cartLength !== 0 && (
                <div className="h-4 w-4 bg-red-700 rounded-full absolute bottom-7 left-5  text-white text-[13px] font-[geist mono] text-center">
                  {cartLength}
                </div>
              )}
            </li>
          </NavLink>
      </ul>
    </div>
  );
};

export default Header;
