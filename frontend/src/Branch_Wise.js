import React, { useState } from 'react';
import './Branch_Wise.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, useNavigate, Routes, Router, Link ,useLocation} from 'react-router-dom';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

export default function Branch_Wise() {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = new URLSearchParams(location.search).get('userType');

  function fun() {
    if(userType==='BOS')
    navigate('/login?userType=BOS');
    else  if(userType==='AD')
    navigate('/Home');

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <Link className="navbar-brand" to="/">
          <FaHome />  HOME
        </Link>
        <Link className="navbar-brand" to="/login?userType=AD">
          <FaUser /> AD
        </Link>
        <Link className="navbar-brand" to="/Branch_wise?userType=BOS">
          <FaUser /> BOS
        </Link>
        <Link className="navbar-brand" to="/login?userType=COE">
          <FaUser /> COE
        </Link>
      </nav>
      <div className="container1">
        <h1>WELCOME TO {userType} PAGE</h1>
        <div className="row">
          <div className="col-auto col-xl-10 col-md-3">
            <div className="row position-absolute">
              <div className="row">
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable cursor-pointer" onClick={fun} name='cse'><h2>Computer Science and Engineering</h2></button>
                </div>
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable" name='civil'><h2>Civil Engineering</h2></button>
                </div>
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable"><h2>Electronics &amp; Telecomm</h2></button>
                </div>
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable"><h2>Electronics Engineering</h2></button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable"><h2>Mechanical Engineering</h2></button>
                </div>
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable"><h2>Information Technology</h2></button>
                </div>
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable"><h2>Honors in AI/ML</h2></button>
                </div>
                <div className="col-md-3">
                  <button className="card mt-5 shadow text-center justify-content-center shadow hoverable"><h2>Honors in Data Science</h2></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
