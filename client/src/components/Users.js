import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getAllUser } from "../actions";
import moment from "moment";

export default function Users({ usersList }) {
  const dispatch = useDispatch();
  const deleteUserWithId = (id) => {
    dispatch(deleteUser(id));
    dispatch(getAllUser());
  };
  return (
    <section className='mt-3'>
      <h3>Users</h3>
      <div className='row'>
        {usersList.map((user) => {
          const disabled = user.isAdmin ? true : false;
          return (
            <div className='col-md-6 col-lg-4' key={user._id}>
              <div className='card mb-2'>
                <img
                  src='https://www.speakersbank.org.au/wp-content/uploads/2016/01/photo-icon.png'
                  className='card-img-top img-fluid'
                  alt='user'
                />
                <div className='card-body'>
                  <h5 className='card-title'>User name: {user.name}</h5>
                  <p className='card-text'>User email: {user.email}</p>
                  <p className='card-text'>
                    created at: {moment(user.createdAt).fromNow()}
                  </p>

                  <p className='card-text'>
                    {user.isAdmin
                      ? "This user is admin"
                      : "This user is not an admin"}
                  </p>
                  <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary' disabled={disabled}>
                      Edit
                    </button>
                    <button
                      disabled={disabled}
                      className='btn btn-danger'
                      onClick={() => deleteUserWithId(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
