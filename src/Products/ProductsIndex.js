import React, { useEffect, useState } from "react";

import { listProducts } from "./ProductsServer";
import ProductCard from "./ProductCard";

const ProductsIndex = () => {
  const [products, setProducts] = useState(null);

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
