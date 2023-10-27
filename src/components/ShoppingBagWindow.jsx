import { useState, useEffect } from "react";

function ShoppingBagWindow({
  isOpen,
  onClose,
  selectedItems,
  updateQuantityInMiddle,
}) {
  const handleNextStep = () => {
    // ทำสิ่งที่ต้องการเมื่อคลิก Next Step
  };
  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce(
      (total, item) => total + (item.price * item.quantity || 0),
      0
    );

    // ใช้ toFixed(2) เพื่อกำหนดให้มีทศนิยม 2 ตำแหน่ง
    return parseFloat(totalPrice.toFixed(2));
  };

  const calculateTotalItem = (items) => {
    return items.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  const [itemQuantities, setItemQuantities] = useState(
    selectedItems.reduce((quantities, item) => {
      quantities[item.id] = item.quantity || 1;
      return quantities;
    }, {})
  );

  const handleIncrement = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[itemId] || 1) + 1;
      updateQuantityInMiddle(itemId, newQuantity); // Update quantity in Middle.jsx
      return {
        ...prevQuantities,
        [itemId]: newQuantity,
      };
    });
  };

  const handleDecrement = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, (prevQuantities[itemId] || 1) - 1);
      updateQuantityInMiddle(itemId, newQuantity); // Update quantity in Middle.jsx
      return {
        ...prevQuantities,
        [itemId]: newQuantity,
      };
    });
  };

  return (
    <>
      {isOpen && (
        <div className="h-screen z-[99] w-screen fixed flex items-center justify-center top-0 left-0 ">
          <div
            id="popUp"
            className="h-screen w-screen bg-black  bg-opacity-40 flex items-center justify-center"
          >
            <div className="shopping-box border-solid bg-black border-neutral-400 rounded-3xl border-4  lg:p-[2%] w-[30%] px-[5%]">
              <p className="text-3xl">Shopping Cart</p>
              <div className="qty-item-price flex justify-between mt-6 mx-4">
                <div className="item ">
                  <div className="flex">
                    <div className="qty">
                      <p className="price text-[20px] mb-1">QTY</p>
                      <div className="input flex-col">
                        {selectedItems.map((item, index) => (
                          <div key={index}>
                            <div className="text-window  flex mx-4">
                              <p
                                className="text-window  cursor-pointer"
                                onClick={() => handleDecrement(item.id)}
                              >
                                -
                              </p>
                              <p className="text-window  px-2">
                                {itemQuantities[item.id]}
                              </p>
                              <p
                                className="text-window cursor-pointer"
                                onClick={() => handleIncrement(item.id)}
                              >
                                +
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="item-row">
                      <p className="item text-[20px] ">Item</p>
                      <div className="item-list text-left mt-1 ">
                        {selectedItems.map((item, index) => (
                          <div key={index}>
                            <p className="text-window ">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <p className="price text-[20px]">Price</p>
                  <div className="price-list text-right ">
                    {selectedItems.map((item, index) => (
                      <p key={index} className="text-window ">
                        {item.price}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="total-price text-left mt-6 ml-4">
                <p className=" ">
                  Total item: {calculateTotalItem(selectedItems)}
                </p>
                <p className=" ">
                  Total price: ${calculateTotalPrice(selectedItems)}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="close-window bg-red-800 h-full w-[30%] rounded-lg"
                  onClick={onClose}
                >
                  close
                </button>
                <button
                  className="bg-green-800 h-full w-[30%] rounded-lg"
                  onClick={handleNextStep}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingBagWindow;
