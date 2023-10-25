import { useState } from "react";
import ButtonAddItem from "../ButtonAddItem";
import ShoppingBagWindow from "../ShoppingBagWindow";
import items from "../../data/item";
import ButtonSeeMore from "../ButtonSeeMore";
import { Link } from "react-router-dom";

function Middle() {
  const [addToCart, setAddToCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddtoCart = (item) => {
    setSelectedItem(item);
    setAddToCart(true);
  };

  return (
    <>
      <div className="bg-top-section bg-white lg:h-[90vh] m-[5%] border-solid border-4 border-blue-800 rounded-3xl">
        <div className=" item-all lg:flex lg:justify-between lg:mx-[5%] lg:mt-[5%] lg:h-[70vh]">
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
        <Link to={`/collections`} autoFocus={false}>
          <ButtonSeeMore />
        </Link>
      </div>

      <div className="hidden lg:block">
        {addToCart && (
          <ShoppingBagWindow
            isOpen={addToCart}
            onClose={() => setAddToCart(false)}
            selectedItem={selectedItem}
          />
        )}
      </div>
    </>
  );
}

export default Middle;
