import { useState } from "react";
import Bottom from "../components/Homepage/Bottom";
import Middle from "../components/Homepage/Middle";
import Top from "../components/Homepage/Top";
import NavBar from "../components/Navbar";
import ShoppingBagWindow from "../components/ShoppingBagWindow";

function HomePage() {
  return (
    <>
      <NavBar />
      <Top />
      <Middle />
      <Bottom />
      {/* <ShoppingBagWindow /> */}
    </>
  );
}

export default HomePage;
