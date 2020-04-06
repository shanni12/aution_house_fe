import React, { useState, useEffect } from "react";
import Product from "./Product";

import Button from "react-bootstrap/Button";
import axios from "axios";
function productList() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  return (
    <div className="ProductList">
      <br></br>
      {allProducts.map((productitem) => {
        return (
          <Product
            id={productitem.id}
            name={productitem.name}
            description={productitem.description}
            bid={productitem.starting_bid}
            deadline={productitem.deadline}
            contact={productitem.contact}
            img={productitem.image}
            bids={productitem.bids}
          />
        );
      })}
    </div>
  );
}
export default productList;
