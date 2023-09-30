import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaHome, FaUser, FaCog, FaBuilding } from 'react-icons/fa';
import "./sem.css";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Registration from './Registration';
import { useNavigate, useLocation } from "react-router-dom";

function Sem() {
  const [sem3Data, setSem3Data] = useState([]);
  const [paper, setPaper] = useState([]);
  const [mod, setMod] = useState([]);
  const [exam, setExam] = useState([]);
  const location = useLocation();
  const db = new URLSearchParams(location.search).get('database');
  const [tb, setTb] = useState("");
  useEffect(() => {
    const tableValue = new URLSearchParams(location.search).get('table');
    if (tableValue) {
      setTb(tableValue);
    }
  }, [location.search]);
  let x;
  if(tb==='sem3')
    x='SEMESTER 3'
  if(tb==='sem4')
    x='SEMESTER 4'
  if(tb==='sem5')
    x='SEMESTER 5'
  if(tb==='sem6')
    x='SEMESTER 6'
  if(tb==='sem7')
    x='SEMESTER 8'
 
 
  useEffect(() => {
    if (tb) {
      axios.get(`http://localhost:8081/${tb}`)
        .then(res => {
          setSem3Data(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [tb]);
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

  const navigate = useNavigate();

  const handleSemesterClick = (semester) => {
    navigate(`/sem?table=${semester}`);
  };

  const handleCheckboxChange = (itemId, fieldName, value, tb) => {
    const requestData = {
      id: itemId,
      fieldName: fieldName,
      value: value,
    };
  
    axios
      .put(`http://localhost:8081/${tb}`, requestData)
      .then((res) => {
        console.log(res.data);
        // If the update was successful, update the state
        setSem3Data((prevData) => {
          return prevData.map((item) => {
            if (item.id === itemId) {
              return {
                ...item,
                [fieldName]: value,
              };
            }
            return item;
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

  return (
    <div className="sem">
      {/* <NavBar/> */}
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#4682b4 "}}>
        <a class="navbar-brand" href="/"><FaHome/>HOME</a>
        <a class="navbar-brand" href="/Branch_wise?userType=BOS"> <FaBuilding /> BRANCH</a>
        <a class="navbar-brand" href="/login?userType=AD"> <FaUser />AD</a>
        <a class="navbar-brand" href="/Branch_wise?userType=BOS"> <FaUser />BOS</a>
        <a class="navbar-brand" href="/login?userType=COE"> <FaUser />COE</a>
      </nav>

      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light" style={{backgroundColor:"#b0c4de "}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline text-dark">Menu</span>
              </a>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <a href="#" class="nav-link align-middle px-0" onClick={() => handleSemesterClick("sem3")}>
                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">SEMESTER 3</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem4")}>
                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">SEMESTER 4</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle"onClick={() => handleSemesterClick("sem5")}>
                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">SEMESTER 5</span>
                  </a>
                </li>
                <li>
                  <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle " onClick={() => handleSemesterClick("sem6")}>
                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">SEMESTER 6</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem7")}>
                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">SEMESTER 7</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem8")}>
                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">SEMESTER 8</span>
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
          <div class="col py-3">
            <>
              {/* Table Content */}
              <h1 style={{marginBottom:"40px"}}>CSE {x}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Update</th>
            <th>Delete</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Phone number</th>
            <th>College/Address</th>
            <th>Experience</th>
            <th>Chairman</th>
            <th>Paper Setter</th>
            <th>Examiner</th>
            <th>Moderator</th>
          </tr>
        </thead>
        <tbody>
          {sem3Data.map((item) => (
            <tr key={item.id}>
              <td>
      <a href={`http://localhost/php/AD_update.php?tb=${tb}&id=${item.id}`} className="btn btn-success">Update</a>
    </td>
    <td>
      <a href={`http://localhost/php/AD_delete.php?tb=${tb}&id=${item.id}`} className="btn btn-danger">Delete</a>
    </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
              <td>{item.code}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.experience}</td>
              <td>
                <Button
                  variant={item.chairman ? "success" : "outline-success"}
                  onClick={() =>
                    handleCheckboxChange(item.id, "chairman", !item.chairman,tb)
                  }
                >
                  {item.chairman ? "Selected" : "Select"}
                </Button>
              </td>
              <td>
                <Button
                  variant={item.papersetter ? "success" : "outline-success"}
                  onClick={() =>
                    handleCheckboxChange(
                      item.id,
                      "papersetter",
                      !item.papersetter,tb
                    )
                  }
                >
                  {item.papersetter ? "Selected" : "Select"}
                </Button>
              </td>
              <td>
                <Button
                  variant={item.examiner ? "success" : "outline-success"}
                  onClick={() =>
                    handleCheckboxChange(item.id, "examiner", !item.examiner,tb)
                  }
                >
                  {item.examiner ? "Selected" : "Select"}
                </Button>
              </td>
              <td>
                <Button
                  variant={item.moderator ? "success" : "outline-success"}
                  onClick={() =>
                    handleCheckboxChange(item.id, "moderator", !item.moderator,tb)
                  }
                >
                  {item.moderator ? "Selected" : "Select"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="button-container">
        
      {tb && (
  <>
    <Button onClick={() => { navigate(`/registration?table=${tb}`) }}>ADD MEMBER</Button>
    <Button onClick={() => { navigate('/email') }}>MAIL TO AD</Button>
  </>
)}
      </div>
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
                    </tr>
                  ))}
                </tbody>
              </Table>



              <h2>Moderator</h2>
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
                    </tr>
                  ))}
                </tbody>
              </Table>



              <h2>Examiner</h2>
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
                    </tr>
                  ))}
                </tbody>
              </Table>


            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sem;