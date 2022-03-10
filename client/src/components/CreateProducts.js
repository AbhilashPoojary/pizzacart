import React from "react";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { createProducts } from "../actions";

export default function CreateProducts() {
  const dispatch = useDispatch();
  const createProductValues = (pizzaValues) => {
    dispatch(createProducts(pizzaValues));
  };
  return (
    <section>
      <ProductForm createProductValues={createProductValues} />
    </section>
  );
}
