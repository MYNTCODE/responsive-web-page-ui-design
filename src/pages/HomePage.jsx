import { useState } from "react";
import Bottom from "../components/Homepage/Bottom";
import Middle from "../components/Homepage/Middle";
import NavBar from "../components/Navbar";
import ShoppingBagWindow from "../components/ShoppingBagWindow";
import Header from "../components/Homepage/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      <Middle />
      <Bottom />
      <Footer />
    </>
  );
}

export default HomePage;
