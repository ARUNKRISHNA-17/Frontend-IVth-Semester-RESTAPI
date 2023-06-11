import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className="bg-warning" style={{ marginBottom: '80px' }}>

    <div className="container">
      <nav className="navbar my-4 navbar-expand-lg navbar-dark  bg-secondary">
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
          <thead class="thread-dark">
            <tr>
              <th scope="col">Laptop_Id</th>
              <th scope="col">Customer_Laptop</th>
              <th scope="col">Customer_Favourite_Laptop</th>
              <th scope="col">Customer_Laptop_Price</th>
              <th scope="col">Customer_Ratings</th>
              <th scope="col">Customer_Mobile</th>              
              <th scope="col">Operations</th>              
              {/* <th scope="col">totalnoofpass</th>
              <th scope="col">route</th>
              <th scope="col">busownership</th>
            <th scope="col">time</th> */}
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
                {/* <td>{user.total_no_of_passengers}</td>
                <td>{user.route}</td>
                <td>{user.busownership}</td>
              <td>{user.time}</td> */}
                <td>
                  <Link className="btn btn-outline-success mx-2" to={`/getdetails/${user.lapid}`}>
                    VIEW 
                  </Link>
                  {console.log(user.lapid)}
                  <Link className="btn btn-outline-primary mx-2" to={`/editdetails/${user.lapid}`}>
                    EDIT
                  </Link>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteTeam(user.lapid)}
                    >
                    DELETE
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