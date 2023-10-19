import { useState } from "react";
import Bottom from "../components/Homepage/Bottom";
import Middle from "../components/Homepage/Middle";
import Top from "../components/Homepage/Top";
import NavBar from "../components/Navbar";
import ShoppingBagWindow from "../components/ShoppingBagWindow";

function HomePage() {
  const [cart, setCart] = useState([]);
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [price1, setPrice1] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setPrice1([...price1, item.price]);
    setLastAddedItem(item);
  };

  return (
    <>
      <NavBar cartItemCount={cart.length} />
      <Top />
      <Middle addToCart={addToCart} />
      <Bottom />
      {lastAddedItem && (
        <ShoppingBagWindow
          lastAddedItem={lastAddedItem}
          price1={price1}
          onClose={() => setLastAddedItem(null)}
        />
      )}
    </>
  );
}

export default HomePage;
