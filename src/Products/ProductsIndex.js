import React, { useEffect, useState } from "react";

import { listProducts } from "./ProductsServer";

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
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ProductsIndex;
