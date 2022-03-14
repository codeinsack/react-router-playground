import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieveProduct } from "./ProductsServer";
import { css } from "@emotion/css";

const ProductStyles = css`
  color: #fff;
  background-color: #2a2c37;
  border-radius: 6px;
  padding: 15px;
  .Product {
    &-Title {
      display: flex;
    }
    &-Name {
      font-weight: 600;
      font-size: 1.2rem;
      margin: 0;
    }
    &-Price {
      color: #50fa7b;
      font-weight: 600;
      font-size: 1rem;
      margin: 0;
    }
    &-Icon {
      width: 50px;
      margin-right: 15px;
    }
    &-Description {
      margin-top: 15px;
    }
  }
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const product = await retrieveProduct(id);
      setProduct(product);
    })();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={ProductStyles}>
      <div className="Product-Title">
        <img
          className="Product-Icon"
          src={`/assets/img/products/${product.id}.svg`}
          alt={product.name}
        />
        <div>
          <h1 className="Product-Name">{product.name}</h1>
          <p className="Product-Price">{`$${product.price / 100}`}</p>
        </div>
      </div>
      <div className="Product-Description">{product.description}</div>
    </div>
  );
};

export default Product;
