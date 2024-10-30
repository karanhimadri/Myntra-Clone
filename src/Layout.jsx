import React from "react";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Bag from "./components/Bag/Bag";
import SearchPage from "./components/SearchPage/SearchPage";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/search_item/:id" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
