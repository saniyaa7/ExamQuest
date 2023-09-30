import axios from 'axios';
import './Registration.css';
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaBuilding } from 'react-icons/fa';


const Registration = () => {
  const location = useLocation();
  const tb = new URLSearchParams(location.search).get('table');
  const [values, setValues] = useState({
    name: '',
    subject: '',
    email: '',
    code: '',
    phone: '',
    address: '',
    gender: '',
    experience: '',
    tb: tb,
    errors: {
      name: '',
      subject: '',
      email: '',
      code: '',
      phone: '',
      address: '',
      gender: '',
      experience: '',
    },
  });

  const navigate = useNavigate();

  const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  
  const email_regex = /^[\w\.-]+@(?:[\w-]+\.)+(?:com|in)$/;
  const sub_regex = /^[A-Z]{3}\d{5}$/;
  const subjectname_regex = /^[A-Za-z\s]+$/;
  const Exp_regex = /^(?:[0-9]|[1-4][0-9]|50)$/;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: '',
      },
    }));
  };

  const validateForm = () => {
    const errors = {};

    

    if (values.subject.trim() === '') {
      errors.subject = 'Course name is required';
    } else if (!subjectname_regex.test(values.subject)) {
      errors.subject = 'Invalid course name format';
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!email_regex.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (values.code.trim() === '') {
      errors.code = 'Course code is required';
    } else if (!sub_regex.test(values.code)) {
      errors.code = 'Invalid course code format';
    }

    if (values.phone.trim() === '') {
      errors.phone = 'Phone number is required';
    } else if (!PHONE_REGEX.test(values.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    if (values.address.trim() === '') {
      errors.address = 'College/Address is required';
    }

    if (values.gender === '') {
      errors.gender = 'Gender is required';
    }

    if (values.experience.trim() === '') {
      errors.experience = 'Experience is required';
    } else if (!Exp_regex.test(values.experience)) {
      errors.experience = 'Invalid experience format';
    }

    setValues((prev) => ({ ...prev, errors }));

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post('http://localhost:8081/CSE', values)
        .then((res) => {
          console.log(res.data);
          navigate(`/sem?table=${tb}`);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <Link className="navbar-brand" to="/">
          <FaHome /> HOME
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
      <div className="container2">
        <div className="title">CSE {tb} Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleInput}
                  name="name"
                  required
                />
                {values.errors.name && <div className="error">{values.errors.name}</div>}
              </div>
              <div className="input-box">
                <span className="details">Course name</span>
                <input
                  type="text"
                  placeholder="Enter Course name"
                  onChange={handleInput}
                  name="subject"
                  required
                />
                {values.errors.subject && <div className="error">{values.errors.subject}</div>}
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={handleInput}
                  name="email"
                  required
                />
                {values.errors.email && <div className="error">{values.errors.email}</div>}
              </div>
              <div className="input-box">
                <span className="details">Course code</span>
                <input
                  type="text"
                  placeholder="Enter Course code"
                  onChange={handleInput}
                  name="code"
                  required
                />
                {values.errors.code && <div className="error">{values.errors.code}</div>}
              </div>
              <div className="input-box">
                <span className="details">Phone number</span>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  onChange={handleInput}
                  name="phone"
                  required
                />
                {values.errors.phone && <div className="error">{values.errors.phone}</div>}
              </div>
              <div className="input-box">
                <span className="details">College/Address</span>
                <input
                  type="text"
                  placeholder="Enter College/Address"
                  onChange={handleInput}
                  name="address"
                  required
                />
                {values.errors.address && <div className="error">{values.errors.address}</div>}
              </div>
              <div className="input-box">
                <span className="details">Experience in Year</span>
                <input
                  type="text"
                  placeholder="Enter your Experience"
                  onChange={handleInput}
                  name="experience"
                  required
                />
                {values.errors.experience && (
                  <div className="error">{values.errors.experience}</div>
                )}
              </div>
            </div>

            <div className="gender-details">
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="male"
                onChange={handleInput}
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                value="female"
                onChange={handleInput}
              />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                value="other"
                onChange={handleInput}
              />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
              {values.errors.gender && <div className="error">{values.errors.gender}</div>}
            </div>

            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
