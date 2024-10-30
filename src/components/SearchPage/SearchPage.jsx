import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { products } from "../../store/itemSlice";
import HomeItem from "../Home/HomeItem";
import "./SearchPage.css";

const SearchPage = () => {
  const { a } = useOutletContext();

  const matchedProducts = products.filter((product) => a.includes(product.id));

  return (
    <div className="flex-item">
      {matchedProducts.length === 0 ? (
        <div className="no-item-found">No Items Found</div>
      ) : (
        matchedProducts.map((item) => (
          <HomeItem key={item.id} item={item}></HomeItem>
        ))
      )}
    </div>
  );
};

export default SearchPage;
