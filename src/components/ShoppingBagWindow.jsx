import { useState, useEffect } from "react";

function ShoppingBagWindow({
  isOpen,
  onClose,
  selectedItems,
  updateQuantityInMiddle,
  setSelectedItems,
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

  const handleRemoveItem = (itemId) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
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
              <p className="text-3xl" title="Shopping Cart">
                Shopping Cart
              </p>
              {selectedItems.length === 0 ? (
                <div className="m-10">
                  <p title="No items in the cart">No items in the cart</p>
                </div>
              ) : (
                <div className="qty-item-price flex justify-between mt-6 mx-4 ">
                  <div className="item ">
                    <div className="flex">
                      {" "}
                      <div className="qty">
                        <p
                          className="qty text-[20px] mb-1 ml-[15%]"
                          title="Quantity"
                        >
                          QTY
                        </p>
                        <div className="input flex-col">
                          {selectedItems.map((item, index) => (
                            <div key={index}>
                              <div className="text-window  flex mx-4  my-5">
                                <button
                                  title="delete"
                                  className="mr-5 hover:text-white active:text-red-500 text-red-500 font-bold"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  x
                                </button>
                                <button
                                  title="Decrement"
                                  className="px-2 border-white border-[1px] rounded-full cursor-pointer active:bg-white active:text-black"
                                  onClick={() => handleDecrement(item.id)}
                                >
                                  -
                                </button>

                                <p
                                  title={itemQuantities[item.id]}
                                  className="text-window  px-2 w-[35px]"
                                >
                                  {itemQuantities[item.id]}
                                </p>
                                <button
                                  title="Increment"
                                  className="px-2 border-white border-[1px] rounded-full cursor-pointer  active:bg-white active:text-black"
                                  onClick={() => handleIncrement(item.id)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="item-row">
                        <p className="item text-[20px] " title="Item">
                          Item
                        </p>
                        <div className="item-list text-left mt-1 ml-2 ">
                          {selectedItems.map((item, index) => (
                            <div key={index}>
                              <p title={item.name} className="text-window my-5">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <p className="price text-[20px]" title="Price">
                      Price
                    </p>
                    <div className="price-list text-right ">
                      {selectedItems.map((item, index) => (
                        <p
                          key={index}
                          className="text-window my-5"
                          title={`  $${(item.price * item.quantity).toFixed(
                            2
                          )}`}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="total-price text-left my-6 ml-4">
                <p
                  className="text-window "
                  title={`Total item: ${calculateTotalItem(selectedItems)}`}
                >
                  Total item: {calculateTotalItem(selectedItems)}
                </p>
                <p
                  className="text-window "
                  title={`Total item: $${calculateTotalPrice(selectedItems)}`}
                >
                  Total price: ${calculateTotalPrice(selectedItems)}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  title="Close"
                  className="close-window hover:bg-red-200 hover:text-black active:bg-red-800 active:text-white bg-red-800 h-full w-[30%] rounded-lg"
                  onClick={onClose}
                >
                  close
                </button>
                <button
                  title="Next step"
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
