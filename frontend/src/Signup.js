import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
import { FaHome, FaUser, FaCog ,FaBuilding} from 'react-icons/fa';
function Signup() {
  const location = useLocation();
  const userType = new URLSearchParams(location.search).get('userType');

  const [values, setValues] = useState({
    email: '',
    password: '',
    userType:userType
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  useEffect(() => {
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:8081/signup', values)
        .then((res) => {
          navigate(`/login?userType=${userType}`);
        })
        .catch((err) => console.log(err));
    }
  }, [errors]);
    return(
      <><nav className="navbar navbar-expand-lg navbar-dark bg-light">
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
      </nav><section className="login">
          <h1 className='x'>SIGN UP AS {userType}</h1>
          <div className="login_box">
            <div className="left">
              <div className="top_link">
                <a href="/">
                  <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="Return home" />
                </a>
              </div>
              <div className="contact">
                <form action="" onSubmit={handleSubmit}>
                  <h3>SIGN UP</h3>
                  <input type="username" placeholder="USERNAME" name='name' onChange={handleInput} />
                  {errors.name && <span className='text-danger'> {errors.name}</span>}
                  <input type="email" placeholder="EMAIL" name='email' onChange={handleInput} />
                  {errors.email && <span className='text-danger'> {errors.email}</span>}
                  <input type="text" placeholder="PASSWORD" name='password' onChange={handleInput} />
                  {errors.password && <span className='text-danger'> {errors.password}</span>}
                  <button className="submit">SIGN UP</button>
                  <p className='link'>Already have an account?<Link to={`/login?userType=${userType}`}>Login</Link></p>

                </form>
              </div>
            </div>
            <div className="right">
              <div className="right-text">
                <h2>EXAM QUEST</h2>
                <h5>WEBSITE FOR EXAM SECTION MEMBER'S OF COLLEGE</h5>
              </div>
              <div className="right-inductor">
                <img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt="" />
              </div>
            </div>
          </div>
        </section></>
    )
}
export default Signup;