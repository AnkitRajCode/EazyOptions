import React, { Component } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

// Css
import '../Css/Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <section className="home-section">
          <Header/>
        </section>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Dashboard
=======
export default Dashboard;
>>>>>>> a6bf567f77d0ce14a43f14220035c1d0a9187b53
