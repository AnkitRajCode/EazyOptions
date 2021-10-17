import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

// Css
import '../Css/Sidebar.css'
import profile from '../Images/avatar.png'

import { useAuth } from '../Contexts/AuthContext'
import { useHistory } from "react-router";
import { firestore } from '../firebase';
import { useState } from 'react';




export default function Sidebar() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const [welcomeMessage, setWelcomeMessage] = useState("");
  function returnWelcomeMessage() {
    firestore.collection('users').where('email', '==', currentUser.email).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        setWelcomeMessage("Hi!! " + doc.data().username)
      })
    })
  }

  returnWelcomeMessage();

  async function HandleLogout(e) {

    e.preventDefault();
    try {
      await logout();
      history.push('/');
    } catch {
      alert("Couldn't logout");
    }
  }

  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let thisoption = document.querySelector(".thisoption");
    let closeBtn = document.getElementById("btn");
    let optionBtn = document.getElementById("options");
    let searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();//calling the function(optional)
    });

    optionBtn.addEventListener("click", () => {
      thisoption.classList.toggle("unhide");
      menuBtnChange();//calling the function(optional)
    });

    searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });

    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
      }
    }
  }, [])
    return (
      <div className="sidebar">
        <div className="logo-details">
          <Link to="/"><img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" className="icon" alt="brand" style={{ width: "40px", height: "40px" }} /></Link>
          <div className="logo_name ml-3">Eazy Options</div>
          <i className='bx bx-menu' id="btn" ></i>
        </div>
        <ul className="nav-list">
          <li>
            <i className='bx bx-search' ></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          <li  id="options">
            <Link to="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Options</span>
            </Link>
            <span className="tooltip">Options</span>
          </li>
          <div className="thisoption">
            <li>
              <Link to="/straddle" className="outyj">
                <i className='bx bx-line-chart'></i>
                <span className="links_name">Straddle/Strangle</span>
              </Link>
              <span className="tooltip">Straddle/Strangle</span>
            </li>
          </div>
          <li>
            <Link to="/dashboard">
              <i className='bx bx-user' ></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>

          <li className="profile">
            <div className="profile-details">
              <img src={profile} alt="profileImg" />
              <div className="name_job">
                <div className="name">{welcomeMessage}</div>
              </div>
            </div>
            <i className='bx bx-log-out' id="log_out" onClick={(e) => { HandleLogout(e) }}></i>
          </li>
        </ul>
      </div>
  )
}