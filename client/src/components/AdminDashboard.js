import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas, getAllUser } from "../actions";
import { Link } from "react-router-dom";
import Users from "./Users";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
    dispatch(getAllUser());
  }, [dispatch]);
  const pizzasList = useSelector((state) => state.getAllPizzasReducer.pizzas);
  const usersList = useSelector((state) => state.alluserReducer.users);
  return (
    <section className='border border-dark p-5' style={{}}>
      <h1>Admin Dashboard</h1>
      <p>Total no of products: {pizzasList?.length}</p>
      <p>Total no of users: {usersList?.length}</p>
      <Link className='btn btn-danger' to='/admin/create'>
        Create Products
      </Link>
      <Users usersList={usersList} />
    </section>
  );
}
