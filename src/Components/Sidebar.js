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
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
      });
    }

    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("closed");
      menuBtnChange();
    });
    function menuBtnChange() {
      if(sidebar.classList.contains("closed")){
        sidebarBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
      }else {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      }
    }
  }, [])
    return (
      <div className="sidebar closed">
        <div className="logo-details">
          <Link to="/"><img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" className="icon" alt="brand" style={{ width: "40px", height: "40px" }} /></Link>
          <div className="logo_name">Eazy Options</div>
          <i className='bx bx-menu' id="btn"></i>
        </div>
        <ul class="nav-links">
          <li>
            <Link to="/dashboard">
              <i class='bx bx-grid-alt' ></i>
              <span class="link_name">Dashboard</span>
            </Link>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Dashboard</a></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <Link href="#">
                <i class='bx bx-line-chart' ></i>
                <span class="link_name">Options</span>
              </Link>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><Link class="link_name" href="#">Options</Link></li>
              <li><Link to="/straddle">Straddle/Strangle</Link></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="#">
                <i class='bx bx-plug' ></i>
                <span class="link_name">Posts</span>
              </a>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><Link class="link_name" href="#">Futures</Link></li>
              <li><Link href="#">Futures Analysis</Link></li>
              <li><Link href="#">Futures Chart</Link></li>
              <li><Link href="#">Top Futures</Link></li>
              <li><Link href="#">Advance/Decline</Link></li>
              <li><Link href="#">Watch List</Link></li>
              <li><Link href="#">HV-IV</Link></li>
            </ul>
          </li>
          
          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img src={profile} alt="profileImg" />
              </div>
              <div class="name-job">
                <div className="name_job">
                  <div className="profile_name">{welcomeMessage}</div>
                </div>
              </div>
              <i className='bx bx-log-out' id="log_out" onClick={(e) => { HandleLogout(e) }}></i>
            </div>
          </li>
        </ul>
      </div>
  )
}