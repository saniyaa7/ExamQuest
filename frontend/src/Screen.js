import React, { useState } from 'react';
import './screen.css';

function Screen() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      alert('Form submitted successfully!');
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <div className="background-container">
      <div className="content">
        <div className="popup-card">
          <h2>ABOUT WEBSITE</h2>
          <p>1.Our pre-examination system offers a user-friendly platform for efficient coordination of the examination process.</p>
          <p>2.The system has three distinct logins: Administration (AD), Board of Studies (BOS), and Examination Section (COE).</p>
          {/* <p>3.AD initiates the process by sending a request via email to BOS for the creation of a panel.</p> */}
          {/* <p>4.BOS promptly creates the panel and shares the details with AD.</p> */}
          {/* <p>5.AD verifies the panel member information and forwards it to COE.</p> */}
          {/* <p>6.COE generates a detailed schedule for the panel members, including date, time, and venue.</p> */}
          {/* <p>7.The schedule is communicated to the panel members via email.</p> */}
          {/* <p>8.The examination section is responsible for generating bills and reports.</p> */}

          <p>3.The system ensures seamless communication and coordination throughout the examination process.</p>
          <p>Disclaimer: The information provided on this website is intended for private institute use only. We take precautions to ensure the security and confidentiality of the data shared on our platform. However,Our Users are responsible for maintaining the confidentiality of their login credentials and using the website at their own risk.</p>

        </div>
      </div>
    </div>
  );
}

export default Screen;
