import React from "react";
import myProducts from "./List";
import Product from "./Product";
import { Redirect } from "react-router-dom";

function viewProduct() {
  if (productitem.uploadedBy === "sha")
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
}
function my_products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {allProducts ? (
        allProducts.map(viewProduct)
      ) : (
        <p style={{ margin: 60 }}>No products to display</p>
      )}
    </div>
  );
}
export default my_products;
