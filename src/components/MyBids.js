import React from "react";
import myProducts from "./List";
import Product from "./Product";
function view(productitem) {
  return (
    <div>
      <p>your bid is:{productitem.bids["sha"]}</p>
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
    </div>
  );
}
function MyBids() {
  const hisProducts = myProducts.filter((Productitem) => {
    return "sha" in Productitem.bids;
  });

  return <div>{hisProducts.map(view)}</div>;
}
export default MyBids;
