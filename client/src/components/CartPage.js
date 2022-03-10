import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashFill, PlusLg, DashLg } from "react-bootstrap-icons";
import { addToCart, deleteFromCart, deleteAllItemsCart } from "../actions";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer.cartItems);
  const totalAmount = cartState.reduce((a, item) => a + item.price, 0);
  const btnEnable = cartState.length < 1;
  return (
    <section>
      <div className='d-flex justify-content-between'>
        <h1 className='mb-3'>My cart</h1>
        {cartState.length ? (
          <TrashFill
            className='h1 text-danger'
            onClick={() => dispatch(deleteAllItemsCart())}
          />
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className='row'>
        <div className='col-8'>
          {cartState.map((item) => {
            return (
              <div className='' key={item._id}>
                <div className='row'>
                  <div className='col-6'>
                    <h5>
                      {item.name} [{item.varients}]
                    </h5>
                    <h5>
                      Price : {item.quant} * {item.prices[0][item.varients]} ={" "}
                      {item.price}
                    </h5>
                    <h6>
                      Quantity:{" "}
                      <PlusLg
                        className='text-primary'
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quant + 1, item.varients)
                          )
                        }
                      />{" "}
                      {item.quant}{" "}
                      <DashLg
                        className='text-danger'
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quant - 1, item.varients)
                          )
                        }
                      />
                    </h6>
                  </div>
                  <div className='col-4'>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ height: "80px", width: "80px" }}
                    />
                  </div>
                  <div className='col-2'>
                    <TrashFill
                      className='text-danger h3 mt-4'
                      onClick={() => dispatch(deleteFromCart(item))}
                    />
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className='col-4'>
          <h3>Total Amount: {totalAmount}</h3>
          <button className='btn btn-danger' disabled={btnEnable}>
            Proceed
          </button>
        </div>
      </div>
    </section>
  );
}
