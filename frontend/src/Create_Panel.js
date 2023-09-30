import React from "react";
import './Create_Panel.css';
import Branch_Wise from "./Branch_Wise";
import { useNavigate } from "react-router-dom";

export default function Create_Panel()
{
    const navigate=useNavigate();
    const gotoBranch=()=>{
        navigate('/Branch_Wise');
    }
    return(
        <div>
             <h1>CREATE THE PANEL</h1>
            <div class="wrapper">
            <div class="container">
                <div class="box1">                
                    <h2>Paper Setting Panel</h2>
                    <button class="btn" onClick={gotoBranch}>click here to create panel</button>
                    {/* <a href="Create_panelp.html" class="btn" >click here to create panel</a> */}
                </div>
                <div class="box1">              
                    <h2>Assessment/Examiner Panel</h2>
                    <a href="create_panele.html" class="btn">click here to create panel</a>
                </div>
                <div class="box1">
                    <h2>Moderator Panel</h2>
                    <a href="create_panelm.html" class="btn" >click here to create panel</a>
                </div>

        </div>
        </div>
        </div>
    )
}