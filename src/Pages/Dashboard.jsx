import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';

// Css
import '../Css/Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <section className="home-section">
        </section>
      </div>
    )
  }
}

export default Dashboard;