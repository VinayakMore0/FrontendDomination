import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProducts } from "../actions/ProductActions";

function Products() {
  const { products } = useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">Product List</h1>
      <ul>
        {products && products.map((product, index) => {
          return (
            <li key={index}>
              <h1>
                {product.title}{" "}
              </h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
