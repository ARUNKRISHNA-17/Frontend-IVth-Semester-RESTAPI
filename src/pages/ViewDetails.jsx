import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';

export default function ViewDetails() {
  const [user, setUser] = useState({
    lapid: '',
    cuslap: '',
    cusfavlap: '',
    cusratings: '',
    cusmobile: '',
  });
  
  const { lapid } = useParams();
  console.log(lapid);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/getdetails/${lapid}`);
      setUser(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Laptop and Customer Details</h2>

          <div className="card">
            <div className="card-header">
              Details Of The Laptop:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Laptop_Id: </b>
                  {user.lapid}
                </li>
                <li className="list-group-item">
                  <b>Customer_Laptop: </b>
                  {user.cuslap}
                </li>
                <li className="list-group-item">
                  <b>Customer_Favourite_Laptop: </b>
                  {user.cusfavlap}
                </li>
                <li className="list-group-item">
                  <b>Customer_Ratings: </b>
                  {user.cusratings}
                </li>
                <li className="list-group-item ">
                  <b>Customer_Mobile: </b>
                  {user.cusmobile}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to="/data">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
</motion.div>
  );
}
