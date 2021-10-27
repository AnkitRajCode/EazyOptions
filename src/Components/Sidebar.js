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
    let sidebarBtn = document.querySelector("#btn");
    let sidebarBtnt = document.querySelector("#btnt");
    let sidebarBtntt = document.querySelector("#btntt");
    let sidebarBtnttt = document.querySelector("#btnttt");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("closed");
      menuBtnChange();
    });
    sidebarBtnt.addEventListener("click", ()=>{
      sidebar.classList.toggle("closed");
    });
    sidebarBtntt.addEventListener("click", ()=>{
      sidebar.classList.toggle("closed");
    });
    sidebarBtnttt.addEventListener("click", ()=>{
      sidebar.classList.toggle("closed");
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

          <li id="btntt">
            <div className="a">
              <i class='bx bx-grid-alt'></i>
              <span class="link_name">Dashboard</span>
            </div>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Dashboard</a></li>
            </ul>
          </li>

          <li id="btnttt">
            <div class="iocn-link"  >
              <div className="a">
                <i class='bx bx-line-chart' ></i>
                <span class="link_name">Options</span>
              </div>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><Link class="link_name" href="#">Options</Link></li>
              <li><Link to="/straddle">Option Chain</Link></li>
              <li><Link to="/straddle">OI Change</Link></li>
              <li><Link to="/straddle">Options Analysis</Link></li>
              <li><Link to="/straddle">PE-CE Diffrence</Link></li>
              <li><Link to="/straddle">Multi Strike Chart</Link></li>
              <li><Link to="/straddle">IV-Price-OI Chart</Link></li>
              <li><Link to="/straddle">Straddle/Strangle</Link></li>
              <li><Link to="/straddle">Strategy Builder</Link></li>
              <li><Link to="/straddle">Strategy Analyzer</Link></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link" id="btnt">
              <div className="a">
                <i class='bx bx-plug' ></i>
                <span class="link_name">Futures</span>
              </div>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><Link class="link_name" href="#">Futures</Link></li>
              <li><Link to="/futures">Futures Chart</Link></li>
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