// Middle.js
import { useState } from "react";
import ButtonAddItem from "../ButtonAddItem";
import items from "../../data/item";

function Middle({ addToCart }) {
  return (
    <>
      <div className="bg-top-section bg-gradient-to-r from-red-200 to-indigo-500 lg:h-[90vh] m-[5%] border-solid border-4 border-blue-800 rounded-3xl">
        <div className="item-all lg:flex lg:justify-between lg:mx-[5%] lg:mt-[5%] lg:h-[70vh]">
          {items.map((item, index) => (
            <div key={index} className="lg:flex-col lg:w-[30%] ">
              <div className="bg-white h-[80%] border-solid border-4 border-blue-800 rounded-3xl ">
                <p className=" text-black py-20">PHOTO</p>
              </div>
              <ButtonAddItem
                price={item.price}
                onClick={() => addToCart(item)}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Middle;
