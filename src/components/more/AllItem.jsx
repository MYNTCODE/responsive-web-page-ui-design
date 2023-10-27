import React, { useState, useEffect } from "react";
import ButtonAddItem from "../ButtonAddItem";
import items from "../../data/item";
import ShoppingBagWindow from "../ShoppingBagWindow";

function AllItem() {
  const [addToCart, setAddToCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]); // เพิ่ม state นี้

  const handleAddtoCart = (item) => {
    const existingItemIndex = selectedItems.findIndex(
      (selected) => selected.id === item.id
    );

    if (existingItemIndex !== -1) {
      // ถ้ารายการมีอยู่แล้ว ให้เพิ่มจำนวน
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {
      // ถ้ารายการยังไม่มีในรายการที่เลือก ให้เพิ่มรายการใหม่
      setSelectedItem(item);
      setAddToCart(true);
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        { ...item, quantity: 1 },
      ]);
    }
    setAddToCart(true);
  };

  const updateQuantityInMiddle = (itemId, newQuantity) => {
    const updatedItems = selectedItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setSelectedItems(updatedItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
  };

  useEffect(() => {
    // ตั้งค่า scroll ที่ Top ทุกครั้งที่ component ถูก render
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" lg:h-screen bg-blue-800 lg:pt-[3%] pb-10 lg:pb-0">
        <h1
          title="Collection"
          className=" text-red-200 font-bold text-[60px]  justify-center"
        >
          Collection
        </h1>
        <div className="box-container lg:flex justify-center m-0 pt-10">
          {items.map((item, index) => (
            <div
              className="img  lg:w-[360px] lg:h-[480px] mx-[5%] pt-[2%]"
              key={index}
            >
              <div
                title={item.name}
                className="bg-black h-[250px] rounded-3xl lg:h-[100%] m-[4%]"
              >
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
      <div className=" lg:h-screen bg-red-200 lg:pt-[3%] pb-10 lg:pb-0">
        <h1
          title="Collection"
          className=" text-blue-800 font-bold text-[60px]  justify-center"
        >
          Collection
        </h1>
        <div className="box-container lg:flex justify-center m-0 pt-10">
          {items.map((item, index) => (
            <div
              className="img  lg:w-[360px] lg:h-[480px] mx-[5%] pt-[2%]"
              key={index}
            >
              <div
                title={item.name}
                className="bg-black h-[250px] rounded-3xl lg:h-[100%] m-[4%]"
              >
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
      <div className="hidden lg:block">
        {addToCart && (
          <ShoppingBagWindow
            isOpen={addToCart}
            onClose={() => setAddToCart(false)}
            selectedItem={selectedItem}
            selectedItems={selectedItems}
            updateQuantityInMiddle={updateQuantityInMiddle}
            setSelectedItems={setSelectedItems}
            handleRemoveItem={handleRemoveItem}
          />
        )}
      </div>
    </>
  );
}

export default AllItem;
