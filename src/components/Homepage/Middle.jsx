import { useState } from "react";
import ButtonAddItem from "../ButtonAddItem";
import ShoppingBagWindow from "../ShoppingBagWindow";
import items from "../../data/item";
import ButtonSeeMore from "../ButtonSeeMore";
import { Link } from "react-router-dom";

function Middle() {
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

  return (
    <>
      <div className="bg-top-section bg-white p-6 lg:h-[90vh] m-[5%] border-solid border-4 border-blue-800 rounded-3xl">
        <div className="item-all lg:flex lg:justify-between lg:mx-[5%] lg:mt-[5%] lg:h-[70vh]">
          {items.map((item, index) => (
            <div key={index} className="lg:flex-col lg:w-[30%] ">
              <div className="bg-white h-[80%] border-solid border-4 border-blue-800 rounded-3xl ">
                <p className=" text-black py-20">PHOTO</p>
              </div>
              <ButtonAddItem
                price={item.price}
                name={item.name}
                onAddToCart={() => handleAddtoCart(item)}
              />
            </div>
          ))}
        </div>

        <ButtonSeeMore />
      </div>

      <div className="hidden lg:block">
        {addToCart && (
          <ShoppingBagWindow
            isOpen={addToCart}
            onClose={() => setAddToCart(false)}
            selectedItem={selectedItem}
            selectedItems={selectedItems} // ส่งรายการทั้งหมดที่เลือกไปให้ ShoppingBagWindow
          />
        )}
      </div>
    </>
  );
}

export default Middle;
