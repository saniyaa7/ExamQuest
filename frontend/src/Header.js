import React from "react";
import Branch_Wise from "./Branch_Wise";
import NavBar from "./NavBar";
import {AiOutlineHome} from "react-icons/ai";
import {BsSpeedometer2,BsFillGrid3X3GapFill} from "react-icons/bs";
import {FaTable} from "react-icons/fa";
import {IoIosAdd} from "react-icons/io";
import { ImEnter } from 'react-icons/im';
import './Header.css';
import Intro from "./Intro";
import Screen from "./Screen";

export default function Header() {
    return (
      <div className="container-fluid" style={{ overflowY: "hidden" }}>
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-lg-2  h-100 position-sticky " style={{background:"white"}}>
                    <div className="text-white min-vh-100">
                    
                    <ul class="nav  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="/" class="nav-link align-middle px-0">
                                        <i><AiOutlineHome class="home"/></i> <p class="home1">Home</p>
                                    </a>
                                </li>
                              <br/>
                                <li>
                                    
                                    

                                    <li>
                                    <a href="/login?userType=AD" >
                                        <span class="btn-gradient-AD">Login as AD</span></a>
                                </li>
                                
                                <li>
                                    <a href="/Branch_wise?userType=BOS" >
                                         <span class="btn-gradient-BOS">Login as BOS</span></a>
                                </li>
                             
                                <li>
                                    <a href="/login?userType=COE" >
                                         <span class="btn-gradient-COE">Login as COE</span></a>
                                </li>
                                        
                                      
                                   
                                </li>

                               
                                
                            </ul>
                    </div>
                </div>
      
                <div className="col-md-9 col-lg-10 text-right position-sticky">
                    <Intro/>
                    
                    <Screen/>
                    
                </div>

            </div>
        </div>
    )
}




