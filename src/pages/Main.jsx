import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export default function Main() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/getdetails');
    setUser(result.data);
  };

  const deleteTeam = async (lapid) => {
    await axios.delete(`http://localhost:8080/deletedetails/${lapid}`);
    loadUsers();
  };

  return (
    <div className="bg-dark" style={{ marginBottom: '80px' }}>
      <div className="container">
        <nav className="navbar my-4 navbar-expand-lg navbar-dark bg-secondary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/data">
              All Customer and Laptop Details
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="btn btn-outline-light" to="/addDetails">
              ADD DETAILS
            </Link>
          </div>
        </nav>

        <div className="py-4">
          <table className="table table-bordered table-striped table-hover border dark shadow">
            <thead className="thread-dark">
              <tr>
                <th scope="col">Laptop_Id</th>
                <th scope="col">Customer_Laptop</th>
                <th scope="col">Customer_Wishlist</th>
                <th scope="col">Customer_Expected_Price</th>
                <th scope="col">Customer_Ratings</th>
                <th scope="col">Customer_Mobile</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.cuslap}</td>
                  <td>{user.cusfavlap}</td>
                  <td>{user.cuslapprice}</td>
                  <td>{user.cusratings}</td>
                  <td>{user.cusmobile}</td>
                  <td>
                    <Link className="btn btn-outline-success mx-2" to={`/getdetails/${user.lapid}`}>
                      <FaEye />
                    </Link>
                    <Link className="btn btn-outline-primary mx-2" to={`/editdetails/${user.lapid}`}>
                      <FaEdit />
                    </Link>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => deleteTeam(user.lapid)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
