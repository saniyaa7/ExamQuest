import React, { useState, useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";
import "./Email.css"; // Import the custom CSS file

function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const navigate = useNavigate();
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
        "template_evhui9f",
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

    setEmail("");
    setMessage("");
    alert("Mail sent Successfully");
    navigate("/sem");
  };

  return (
    <div className="email-container">
      <h2 className="form-heading">Send Mail to AD</h2><br/><br/>
      <Form className="form" ref={form} onSubmit={sendEmail}>
      
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email adrress of AD"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <br/><br/><br/>
        {/* <Button type="submit" className="form-button">
          Send Message
        </Button> */}

        <Button
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
                </Button>

        <br/><br/><br/><br/>
      </Form>
    </div>
  );
}

export default Email;
