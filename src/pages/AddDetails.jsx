import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function AddDetails() {
  let navigate = useNavigate();

  const [user, setUser] = useState({

    cuslap: '',
    cusfavlap: '',
    cuslapprice: '',
    cusratings: '',
    cusmobile: ''
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { cuslap, cusfavlap, cuslapprice, cusratings, cusmobile } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addDetails",user);
    navigate('/data');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Customer_Laptop
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Bus_NUM"
                name="cuslap"
                value={cuslap}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Customer_Favourite_Laptop
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The StartPoint"
                name="cusfavlap"
                value={cusfavlap}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Customer_Laptop_Price
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The End_Point"
                name="cuslapprice"
                value={cuslapprice}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Customer_Ratings
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter Your Destination"
                name="cusratings"
                value={cusratings}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Customer_Contact
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                placeholder="Enter The Total No of Passengers"
                name="cusmobile"
                value={cusmobile}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success my-2">
              Add Details
            </button>
            <Link className="btn btn-outline-danger my-2 mx-2" to={"/data"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}