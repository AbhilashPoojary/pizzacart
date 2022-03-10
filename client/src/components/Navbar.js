import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart3, PersonFill } from "react-bootstrap-icons";
import { logoutUser } from "../actions";

export default function Navbar() {
  const cartLength = useSelector((state) => state.cartReducer.cartItems.length);
  const currentUser = useSelector((state) => state.loginReducer.currentUser);
  const dispatch = useDispatch();
  return (
    <nav className='navbar navbar-light shadow p-3 mb-5 bg-body rounded mt-2'>
      <div className='container-fluid'>
        <Link className='navbar-brand text-danger dt' to='/'>
          PizzaCart
        </Link>
        <div className='d-flex'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 flex-row'>
            {currentUser && currentUser.isAdmin && (
              <li className='nav-item pe-3'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/admin'
                >
                  Dashboard
                </Link>
              </li>
            )}
            {currentUser ? (
              <Dropdown className='m-1 me-2'>
                <Dropdown.Toggle variant='danger' id='dropdown-basic'>
                  <span className=''>{currentUser.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to='/orders' className='dropdown-item'>
                    orders
                  </Link>
                  <Dropdown.Item
                    href='#/action-2'
                    onClick={() => dispatch(logoutUser())}
                  >
                    logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <li className='nav-item pe-3'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/login'
                >
                  <PersonFill className='h4 text-danger' />
                </Link>
              </li>
            )}

            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/cart'>
                <Cart3 className='h4 text-danger' />
                {cartLength ? (
                  <span className='h6 text-danger'>{cartLength}</span>
                ) : (
                  ""
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
