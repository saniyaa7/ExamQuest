
import {AiOutlineHome} from "react-icons/ai";
import { ImEnter } from 'react-icons/im';
import React from "react";
export default function Sidebar() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-lg-2 bg-dark h-100 position-sticky">
                    <div className="text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="/" class="nav-link align-middle px-0">
                                        <i><AiOutlineHome/></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    
                                    <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">

                                    <li>
                                    <a href="/login?userType=AD" class="nav-link px-0 align-middle">
                                        <i><ImEnter/></i> <span class="ms-1 d-none d-sm-inline">Login as AD</span></a>
                                </li>
                                <li>
                                    <a href="/login?userType=BOS" class="nav-link px-0 align-middle">
                                        <i><ImEnter/></i> <span class="ms-1 d-none d-sm-inline">Login as BOS</span></a>
                                </li>
                                <li>
                                    <a href="/login?userType=COE" class="nav-link px-0 align-middle">
                                        <i><ImEnter/></i> <span class="ms-1 d-none d-sm-inline">Login as COE</span></a>
                                </li>
                                        
                                      
                                    </ul>
                                </li>

                               
                                
                            </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
