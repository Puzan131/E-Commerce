import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-blue-500 h-18">
      <ul className="list-none flex w-full justify-evenly items-center h-full text-white font-mono text-2xl  ">
        <NavLink className={({isActive})=> isActive && "border-b-2 border-black"} to="/">
          <li className="cursor-pointer">Home</li>
        </NavLink>
        <NavLink className={({isActive})=> isActive && "border-b-2 border-black"} to="cart">
          <li className="cursor-pointer">Cart</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
