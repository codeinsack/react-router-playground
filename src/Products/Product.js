import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    &-Button {
      border: 2px solid #50fa7b;
      color: #50fa7b;
      background: none;
      padding: 10px 15px;
      margin-right: 5px;
      border-radius: 6px;
      outline: 0;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 15px;
    }
  }
`;

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const product = await retrieveProduct(id);
        setProduct(product);
      } catch (error) {
        console.warn(error);
        navigate("/", { replace: true, state: { id } });
      }
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
      <button
        className="Product-Button"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Product;
