import React, { useState, useEffect, useRef } from 'react';
import { Table } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function COE() {
  const [paper, setPaper] = useState([]);
  const [mod, setMod] = useState([]);
  const [exam, setExam] = useState([]);
  const [tb, setTb] = useState("");
  const location = useLocation();
  const [selectedDates, setSelectedDates] = useState({});
  useEffect(() => {
    const tableValue = new URLSearchParams(location.search).get('table');
    if (tableValue) {
      setTb(tableValue);
    }
  }, [location.search]);

  const form = useRef();
  const navigate = useNavigate();
  const handleDateChange = (date, rowId) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [rowId]: date
    }));
  };

  useEffect(() => {
    fetch(`http://localhost/php/papersetter.php?tb=${tb}`)
      .then((res) => res.json())
      .then((json) => setPaper(json))
      .catch((error) => {
        console.error("Error fetching paper setter data:", error);
      });
  }, [tb]);

  useEffect(() => {
    fetch(`http://localhost/php/moderator.php?tb=${tb}`)
      .then((res) => res.json())
      .then((json) => setMod(json))
      .catch((error) => {
        console.error("Error fetching moderator data:", error);
      });
  }, [tb]);

  useEffect(() => {
    fetch(`http://localhost/php/examiner.php?tb=${tb}`)
      .then((res) => res.json())
      .then((json) => setExam(json))
      .catch((error) => {
        console.error("Error fetching examiner data:", error);
      });
  }, [tb]);

  const sendEmail = (e, sub_name,name,email,subject,code,selectedDate) => {
    e.preventDefault();
    const date = new Date(selectedDate); // Convert selectedDate to a Date object
  const formattedDate = date.toLocaleDateString();
  
    const templateParams = {
      sub_name:sub_name,
      table:tb,
      user_name: name,
      user_email: email,
      user_subject: subject,
      user_code: code,
      user_selectedDate: formattedDate
    };
    emailjs.send(
      'service_ggv1nvc',
      'template_s720fmr',
      templateParams,
      'TeVXaZaLjuNPq_Qz9'    
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      alert('Mail sent successfully to ' + email);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Error sending mail to ' + email);
    });
  };
  

  const handleSemesterClick = (semester) => {
    navigate(`/coe?table=${semester}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light "  style={{backgroundColor:" #4667b4"}}>
        <a className="navbar-brand" href="/"><FaHome />HOME</a>
        <a className="navbar-brand" href="/login?userType=AD"> <FaUser />AD</a>
        <a className="navbar-brand" href="/Branch_wise?userType=BOS"> <FaUser />BOS</a>
        <a className="navbar-brand" href="/login?userType=COE"> <FaUser />COE</a>
      </nav>
      <div style={{ background: 'rgb(214, 229, 249)' }}>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light" style={{ backgroundColor: "#b0c4de" }}>
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline text-dark">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0" onClick={() => handleSemesterClick("sem3")}>
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">SEMESTER 3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem4")}>
                      <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">SEMESTER 4</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem5")}>
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">SEMESTER 5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem6")}>
                      <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">SEMESTER 6</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem7")}>
                      <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">SEMESTER 7</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem8")}>
                      <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">SEMESTER 8</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col py-3">
              <>
                <h1>WELCOME TO COE</h1>

                <h2>Paper Setters</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course Name</th>
                      <th>Course Code</th>
                      <th>Phone number</th>
                      <th>College/Address</th>
                      <th>Experience</th>
                      <th>Date</th>
                      <th>Email</th>
                    
                    </tr>
                  </thead>
                  <tbody>
  {paper.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.subject}</td>
      <td>{item.code}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>{item.experience}</td>
     
      <td>
        <DatePicker
          selected={selectedDates[item.id]}
          onChange={(date) => handleDateChange(date, item.id)}
        />
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={(e) => sendEmail(e,'Paper Setter', item.name, item.email, item.subject, item.code, selectedDates[item.id])}
        >
          SEND MAIL
        </button>
      </td>
      
    </tr>
  ))}
</tbody>

                </Table>

                <h2>Moderators</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course Name</th>
                      <th>Course Code</th>
                      <th>Phone number</th>
                      <th>College/Address</th>
                      <th>Experience</th>
                      <th>Date</th>
                      <th>Email</th>
                    
                    </tr>
                  </thead>
                  <tbody>
  {mod.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.subject}</td>
      <td>{item.code}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>{item.experience}</td>
      
      <td>
        <DatePicker
          selected={selectedDates[item.id]}
          onChange={(date) => handleDateChange(date, item.id)}
        />
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={(e) => sendEmail(e, 'Moderator',item.name, item.email, item.subject, item.code, selectedDates[item.id])}
        >
          SEND MAIL
        </button>
      </td>
    
    </tr>
  ))}
</tbody>

                </Table>

                <h2>Examiners</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course Name</th>
                      <th>Course Code</th>
                      <th>Phone number</th>
                      <th>College/Address</th>
                      <th>Experience</th>
                      <th>Date</th>
                      <th>Email</th>
                      
                      

                    </tr>
                  </thead>
                <tbody>
  {exam.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.subject}</td>
      <td>{item.code}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>{item.experience}</td>
      
      <td>
        <DatePicker
          selected={selectedDates[item.id]}
          onChange={(date) => handleDateChange(date, item.id)}
        />
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={(e) => sendEmail(e, 'Examiner' ,item.name, item.email, item.subject, item.code, selectedDates[item.id])}
        >
          SEND MAIL
        </button>
      </td>
      
    </tr>
  ))}
</tbody>

                </Table>
              </>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default COE;
