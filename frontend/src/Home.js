import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import emailjs from "@emailjs/browser";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
  const [adData, setAdData] = useState([]);
  const [bosData, setBosData] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAdPanel, setShowAdPanel] = useState(false);
  const [showBosPanel, setShowBosPanel] = useState(true);
  const [paper, setPaper] = useState([]);
  const [mod, setMod] = useState([]);
  const [exam, setExam] = useState([]);
  const form = useRef();
  const [showEmailForm, setShowEmailForm] = useState(false); // New state for showing/hiding email form
  const [tb, setTb] = useState("");
  const location = useLocation();
  useEffect(() => {
    const tableValue = new URLSearchParams(location.search).get('table');
    if (tableValue) {
      setTb(tableValue);
    }
  }, [location.search]);

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

  useEffect(() => {
    fetch("http://localhost/php/BOS.php")
      .then((res) => res.json())
      .then((json) => setBosData(json))
      .catch((error) => {
        console.error("Error fetching BOS data:", error);
      });
  }, []);

  const navigate = useNavigate();

  const handleSemesterClick = (semester) => {
    navigate(`/Home?table=${semester}`);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost/php/sendmail.php", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Handle the response from the PHP file
        // Show success message or handle any errors
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const [isValidEmail, setIsValidEmail] = useState(false); // New state for email validation

  // ... (other code)

  // Function to check email format using regular expression
  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@gmail\.com$/;
    return emailRegex.test(email);
  };

  // Use effect to check email validity whenever the email state changes
  useEffect(() => {
    setIsValidEmail(validateEmail(email));
  }, [email]);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdtj7ri",
        "template_e4tapxw",
        form.current,
        "U1Lp2D9Loh-iaQ-qY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const handleAdPanelClick = () => {
    setShowAdPanel(true);
    setShowBosPanel(false);
  };

  const handleBosPanelClick = () => {
    setShowAdPanel(false);
    setShowBosPanel(true);
  };

  const handleEmailButtonClick = () => {
    setShowEmailForm(true); // Show the email form when the button is clicked
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: " #4667b4" }}>
        <a className="navbar-brand" href="/">
          <FaHome />
          HOME
        </a>

        <a className="navbar-brand" href="/login?userType=AD">
          <FaUser />
          AD
        </a>
        <a className="navbar-brand" href="/login?userType=BOS">
          <FaUser />
          BOS
        </a>
        <a className="navbar-brand" href="/login?userType=COE">
          <FaUser />
          COE
        </a>
      </nav>
      {showAdPanel && (
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light" style={{ backgroundColor: "#b0c4de " }}>
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
                    <a href="#" class="nav-link px-0 align-middle" onClick={() => handleSemesterClick("sem5")}>
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
                <h1 className="heading">CSE Panel Member for {tb}</h1>
                <div className="button-container">
                  <button className="toggle-button" onClick={handleBosPanelClick}>
                    Show BOS Members
                  </button>
                  <button className="toggle-button" onClick={handleAdPanelClick}>
                    Show Panel Members
                  </button>
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
      )}
      <div className="container1">


        {showBosPanel && (
          <div>
            <h1 className="heading">Welcome to Academic Dean</h1>
            <div className="button-container">
              <button className="toggle-button" onClick={handleBosPanelClick}>
                Show BOS Members
              </button>
              <button className="toggle-button" onClick={handleAdPanelClick}>
                Show Panel Members
              </button>
            </div>
            <h2 className="panel-heading">BOS Panel Members</h2>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                {bosData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td><a href={`http://localhost/php/BOS_update.php?id=${data.id}`} className="btn btn-success">Update</a></td>
                    <td><a href={`http://localhost/php/BOS_delete.php?id=${data.id}`} className="btn btn-danger">Delete</a></td>

                  </tr>
                ))}
              </tbody>
            </Table>

            {showEmailForm && ( // Show the email form if the state is true
              <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="form-input"
                  value={email} // Bind the value of the email input to the email state
                  onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
                />
                <br />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="form-textarea"
                  value={message} // Bind the value of the message input to the message state
                  onChange={(e) => setMessage(e.target.value)} // Update the message state on input change
                ></textarea>
                <br />
                {/* <input type="file"></input> */}
                <br />
                <br />



                <button
                  type="submit"
                  className="form-button"
                  onClick={() => {
                    if (isValidEmail) {
                      window.alert("Mail sent Successfully");

                    } else {
                      window.alert("Email is invalid");
                      return;
                    }
                  }}
                  disabled={!isValidEmail}
                >
                  Send Message
                </button>
              </form>
            )}

            {!showEmailForm && ( // Show the email button if the state is false
              <button
                className="toggle-button"
                onClick={handleEmailButtonClick}
              >
                Send Email
              </button>
            )}
          </div>
        )}



      </div>
    </>
  );
}

export default Home;
