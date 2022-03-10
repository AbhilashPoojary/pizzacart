import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerState = useSelector((state) => state.loginReducer);
  const { error, loading } = registerState;

  const login = (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };
    dispatch(loginUser(loginDetails));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }
  });
  return (
    <section className='card p-5 form'>
      {loading && <Loading space='1' />}
      {error && <Error error='Invalid credentials' />}
      <form onSubmit={login}>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email'
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            className='form-control'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='passsword'
          />
        </div>
        <button type='submit' className='btn btn-danger'>
          Submit
        </button>
        <Link
          to='/signin'
          className='float-end'
          style={{ textDecoration: "none", lineHeight: "2rem" }}
        >
          Click for signin
        </Link>
      </form>
    </section>
  );
}
