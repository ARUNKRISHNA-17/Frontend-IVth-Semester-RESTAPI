import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditDetails() {
  const navigate = useNavigate();
  const { lapid } = useParams();
  console.log(lapid);

  const [user, setUser] = useState({
    cuslap: '',
    cusfavlap: '',
    cuslapprice: '',
    cusratings: '',
    cusmobile: ''
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getdetails/${lapid}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { cuslap, cusfavlap, cuslapprice, cusratings, cusmobile } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/editdetails/${lapid}`, user);
      navigate('/data');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Details</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="cuslap" className="form-label">
                Customer Laptop
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                id="cuslap"
                name="cuslap"
                value={cuslap}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cusfavlap" className="form-label">
                Customer Favorite Laptop
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                id="cusfavlap"
                name="cusfavlap"
                value={cusfavlap}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cuslapprice" className="form-label">
                Customer Laptop Price
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                id="cuslapprice"
                name="cuslapprice"
                value={cuslapprice}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cusratings" className="form-label">
                Customer Ratings
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                id="cusratings"
                name="cusratings"
                value={cusratings}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cusmobile" className="form-label">
                Customer Contact
              </label>
              <input
                type="text"
                className="form-control border-dark shadow"
                id="cusmobile"
                name="cusmobile"
                value={cusmobile}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-success my-2">
              Update Details
            </button>
            <Link className="btn btn-outline-danger my-2 mx-2" to="/data">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
