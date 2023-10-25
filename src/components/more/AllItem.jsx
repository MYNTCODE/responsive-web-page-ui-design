import React, { useState, useEffect } from "react";
import ButtonAddItem from "../ButtonAddItem";
import items from "../../data/item";
import ShoppingBagWindow from "../ShoppingBagWindow";

function AllItem() {
  const [addToCart, setAddToCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddtoCart = (item) => {
    setSelectedItem(item);
    setAddToCart(true);
  };

  useEffect(() => {
    // ตั้งค่า scroll ที่ Top ทุกครั้งที่ component ถูก render
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" lg:h-screen bg-blue-800 lg:pt-[3%] pb-10 lg:pb-0">
        <h1 className=" text-red-200 font-bold text-[60px]  justify-center">
          Collection
        </h1>
        <div className="box-container lg:flex justify-center m-0 pt-10">
          {items.map((item, index) => (
            <div
              className="img  lg:w-[360px] lg:h-[480px] mx-[5%] pt-[2%]"
              key={index}
            >
              <div className="bg-black h-[250px] rounded-3xl lg:h-[100%] m-[4%]">
                img
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
      <div className=" h-screen bg-red-200 pt-[5%]">
        <h1 className=" text-blue-800 font-bold text-[60px]  justify-center">
          Collection
        </h1>
        <div className="box-container lg:flex justify-center m-0 p-0">
          {items.map((item, index) => (
            <div
              className="img lg:w-[360px] lg:h-[480px] mx-[5%] pt-[2%]"
              key={index}
            >
              <div className="bg-black rounded-3xl h-[100%] m-[4%]">img</div>
              <ButtonAddItem
                price={item.price}
                name={item.name}
                onAddToCart={() => handleAddtoCart(item)}
              />
            </div>
          ))}
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

export default AllItem;
