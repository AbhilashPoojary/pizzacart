import React, { useState } from "react";
import ModalPizza from "./ModalPizza";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

export default function Pizza({ pizza }) {
  const dispatch = useDispatch();
  const [quant, setQuant] = useState(1);
  const [varients, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const addToCartFunc = () => {
    dispatch(addToCart(pizza, quant, varients));
  };

  return (
    <>
      <div className='card h-100 mb-3 shadow p-3 mb-5 bg-body rounded'>
        <div onClick={handleShow} className='text-center user-select-all'>
          <h5 className='card-title p-3'>{pizza?.name?.toUpperCase()}</h5>
          <img
            className='img-fluid m-auto'
            src={pizza?.image}
            alt={pizza?.name}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div className='flex-container'>
          <div className='p-3'>
            <p>Varients</p>
            <select
              className='form-select'
              value={varients}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza?.varients?.map((varient) => {
                return (
                  <option key={varient} value={varient}>
                    {varient}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='p-3'>
            <p>Qunatity</p>
            <select
              className='form-select'
              value={quant}
              onChange={(e) => setQuant(e.target.value)}
            >
              {[...Array(10).keys()].map((item, index) => {
                return (
                  <option value={index + 1} key={item}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className='flex-container p-3 pt-0'>
          <div className='m-1'>
            <h5>Price: {pizza?.prices[0][varients] * quant}</h5>
          </div>
          <div className='m-1 '>
            <button
              className='btn btn-danger'
              onClick={() => addToCartFunc(pizza, quant, varients)}
            >
              Add to cart
            </button>
          </div>
        </div>

        <ModalPizza pizza={pizza} show={show} setShow={setShow} />
      </div>
    </>
  );
}
