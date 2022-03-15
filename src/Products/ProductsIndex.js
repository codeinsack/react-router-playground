import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { listProducts } from "./ProductsServer";
import ProductCard from "./ProductCard";

const ProductsIndex = () => {
  const location = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (location.state) {
      console.warn(`Nothing found for ${location.state.id}`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      console.log("data", data);
      setProducts(data);
    })();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsIndex;
