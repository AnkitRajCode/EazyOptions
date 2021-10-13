import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Css
import '../Css/Sidebar.css'
import profile from '../Images/avatar.png'

class Sidebar extends Component {
   componentDidMount(){
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.getElementById("btn");
    let searchBtn = document.querySelector(".bx-search");
    
    closeBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("open");
      menuBtnChange();//calling the function(optional)
    });
    
    searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });
    
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
     if(sidebar.classList.contains("open")){
       closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
     }else {
       closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
     }
    }    
   }
   render() {
      return (
        <div className="sidebar">
            <div className="logo-details">
            <Link to="/"><img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" className="icon" alt="brand" style={{width:"40px",height:"40px"}} /></Link>
                <div className="logo_name ml-3">CodingLab</div>
                <i className='bx bx-menu' id="btn" ></i>
            </div>
            <ul className="nav-list">
            <li>
                <i className='bx bx-search' ></i>
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
            </li>
            <li>
                <a href="/straddle">
                <i className='bx bx-grid-alt'></i>
                <span className="links_name">Straddle</span>
                </a>
                <span className="tooltip">Straddle</span>
            </li>
            <li>
            <a href="/">
                <i className='bx bx-user' ></i>
                <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
            </li>
            
            <li className="profile">
                <div className="profile-details">
                <img src={profile} alt="profileImg" />
                <div className="name_job">
                    <div className="name">Ankit Raj</div>
                    <div className="job">Web designer</div>
                </div>
                </div>
                <i className='bx bx-log-out' id="log_out"></i>
            </li>
            </ul>
        </div>
      )
   }
}

export default Sidebar;