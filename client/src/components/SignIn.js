import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions";
import Loading from "./Loading";
import Success from "./Success";
import Error from "./Error";

export default function SignIn() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const registerState = useSelector((state) => state.userReducer);
  const { error, loading, success } = registerState;

  const register = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password should match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  };
  return (
    <section className='card p-5 form'>
      <form onSubmit={register}>
        {loading && <Loading space='1' />}
        {success && <Success />}
        {error && <Error />}
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            name='name'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete='off'
          />
        </div>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='off'
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='off'
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            name='passwordconfirm'
            placeholder='confirm password'
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            required
            autoComplete='off'
          />
        </div>
        <button type='submit' className='btn btn-danger'>
          Submit
        </button>
        <Link
          to='/login'
          className='float-end'
          style={{ textDecoration: "none", lineHeight: "2rem" }}
        >
          Click for login
        </Link>
      </form>
    </section>
  );
}
