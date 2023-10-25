import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Collections from "./Collections";
import About from "./About";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Router;
