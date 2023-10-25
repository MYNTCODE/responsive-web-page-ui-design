// NavBar.js
import { useState } from "react";
import ShoppingBagWindow from "./ShoppingBagWindow";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar top-0 z-[100] text-xl flex font-bold h-[40px] bg-red-200 text-blue-500 border-blue-800 px-[10%] py-[8px] border-b-4 sticky">
        <div className="nav-left">
          <Link to={`/`}>
            {" "}
            <p>Logo</p>
          </Link>
        </div>
        <div className="nav-right flex justify-end w-full ">
          <p className="px-[5%] hover:cursor-pointer">
            <Link to={`/about`}>About </Link>
          </p>

          <p className="pr-[5%] hover:cursor-pointer">
            <Link to={`/collections`}>Collections</Link>
          </p>
          <div className="cart" onClick="">
            <img
              className="shopping-bag cursor-pointer absolute w-8 z-0 mt-[-4px]"
              src="https://cdn.discordapp.com/attachments/1144637676016898219/1164481935838556233/shopping-bag.png?ex=65435f50&is=6530ea50&hm=f4447cc26dc50b507531ac60a6369cb1c3330500fc8699bf89b6f94f08f525e7&"
            ></img>
            <div className="alert-count text-[12px] relative left-3 ">
              {/* <p className="bg-red-500 text-white  rounded-2xl w-[20px] h-[20px] mt-[-3px] cursor-pointer"></p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
