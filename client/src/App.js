import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import PizzaList from "./components/PizzaList";
import CartPage from "./components/CartPage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Orders from "./components/Orders";
import AdminDashboard from "./components/AdminDashboard";
import CreateProducts from "./components/CreateProducts";

function App() {
  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<PizzaList />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/create' element={<CreateProducts />} />
      </Routes>
    </section>
  );
}

export default App;
