import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AllItem from "../components/more/AllItem";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collections" element={<AllItem />} />
    </Routes>
  );
}

export default Router;
