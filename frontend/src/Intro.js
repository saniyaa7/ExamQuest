import React from "react";
import logo from "./logo.png";
import './Intro.css'

export default function Intro()
{
    return(
        <div className="row" style={{backgroundColor:"#4667b4",height:"20vh"}}>
        <div className="display-flex text-end pt-2 pb-3" style={{paddingRight:"25px"}}>
            <h1 className="name" style={{color:'white',fontSize:"40px"}}>Walchand Institute Of Technology, Solapur 
            <img src={logo}alt="Logo Image" className="image bg-dark"/></h1>
            <h1 className="project" style={{color:'white'}}>ExamQuest
            <img src={logo}alt="Logo Image" className="image bg-dark"/></h1>
            <h6 className="subname">(An Autonomous Institute)</h6>    
        </div>
        </div>
    )
}