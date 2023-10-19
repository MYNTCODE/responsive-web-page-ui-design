import { useState, useEffect } from "react";

function ShoppingBagWindow({ lastAddedItem, totalPrice, onClose }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Reset quantity when a new item is added
    setQuantity(1);
  }, [lastAddedItem]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const clampedValue = Math.min(10, Math.max(1, value));
    setQuantity(clampedValue);
  };
  const calculateTotalPrice = () => {
    if (lastAddedItem) {
      const rawTotalPrice = lastAddedItem.price * quantity;
      return rawTotalPrice.toFixed(2); // Limit to two decimal places
    }
    return 0;
  };

  return (
    <>
      <div className="h-screen z-[99] w-screen fixed flex items-center justify-center top-0 left-0 ">
        <div
          id="popUp"
          className="h-screen w-screen bg-blue-800  bg-opacity-40 flex items-center justify-center"
        >
          <div className="shopping-box border-solid bg-black opacity-90 border-black rounded-3xl border-4  lg:p-[2%] w-[30%] px-[5%]">
            <p className="text-3xl">Shopping Cart</p>
            <div className="qty-item-price flex justify-between mt-6 mx-4">
              <div className="item ">
                <div className="flex">
                  <div className="qty">
                    <p className="price text-[20px] mb-1">QTY</p>
                    <div className="input flex-col">
                      <div>
                        <input
                          className="w-[40px] pl-2 bg-white mx-4 rounded  text-black"
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max="10"
                          value={quantity}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item-row">
                    <p className="item text-[20px] ">Item</p>
                    <div className="item-list text-left mt-1 ">
                      <div>
                        <p>
                          {lastAddedItem && (
                            <>
                              {lastAddedItem.name} ({quantity})
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price">
                <p className="price text-[20px]">Price</p>
                <div className="price-list text-right ">
                  {lastAddedItem && <p>{calculateTotalPrice()} </p>}
                </div>
              </div>
            </div>
            <div className="total-price text-left mt-6 ml-4">
              <p className=" ">Total item: {quantity}</p>
              <p className=" ">Total price: {calculateTotalPrice()} $ </p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="close-window bg-red-800 h-full w-[30%] rounded-lg"
                onClick={handleClose}
              >
                close
              </button>
              <button className="bg-green-800 h-full w-[30%] rounded-lg">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingBagWindow;
