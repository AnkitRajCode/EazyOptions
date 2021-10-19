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

export default Dashboard;