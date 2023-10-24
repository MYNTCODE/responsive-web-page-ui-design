import React, { useState } from "react";
import NavBar from "../Navbar";
import ButtonAddItem from "../ButtonAddItem";
import items from "../../data/item";
import ShoppingBagWindow from "../ShoppingBagWindow";

export default function AllItem() {
  const [addToCart, setAddToCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddtoCart = (item) => {
    setSelectedItem(item);
    setAddToCart(true);
  };

  return (
    <>
      <NavBar />
      <div className=" h-[100vh]">
        <div>
          <div className="col-head bg-white h-[15%]">
            <h1 className=" text-black font-bold text-[60px] pt-4  justify-center">
              Collection
            </h1>
          </div>
          <div className="box-container bg-blue-800 h-screen flex justify-center">
            {items.map((item, index) => (
              <div className="img w-[360px] mx-[5%] pt-[5%]" key={index}>
                <div className="bg-black rounded-3xl h-[60%] w-[40$] m-[4%]">
                  <img className="h-[60%]" src="" alt="" />
                </div>
                <ButtonAddItem
                  price={item.price}
                  name={item.name}
                  onAddToCart={() => handleAddtoCart(item)}
                />
              </div>
            ))}
          </div>
          <div className="col-head bg-white h-[15%]">
            <h1 className=" text-black font-bold text-[60px] pt-4  justify-center">
              Winter
            </h1>
          </div>
          <div className="box-container bg-blue-800 h-screen flex justify-center">
            {items.map((item, index) => (
              <div className="img w-[360px] mx-[5%] pt-[5%]" key={index}>
                <div className="bg-black rounded-3xl h-[60%] w-[40$] m-[4%]">
                  <img className="h-[60%]" src="" alt="" />
                </div>
                <ButtonAddItem
                  price={item.price}
                  name={item.name}
                  onAddToCart={() => handleAddtoCart(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {addToCart && (
        <ShoppingBagWindow
          isOpen={addToCart}
          onClose={() => setAddToCart(false)}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
}
