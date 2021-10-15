import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import RegularChart from '../Components/ChartType/RegularChart';
import PieChart from '../Components/ChartType/PieChart';

// Css
import '../Css/Dashboard.css'
import BarChart from '../Components/ChartType/BarChart';
import CandleStickChart from '../Components/ChartType/CandleStickChart';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <section className="home-section">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="dashboardStatsCard">
                <p className="text-center">1,504</p>
                <p className="text-center">Data</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="dashboardStatsCard">
                <p className="text-center">1,504</p>
                <p className="text-center">Data</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="dashboardStatsCard">
                <p className="text-center">1,504</p>
                <p className="text-center">Data</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="dashboardStatsCard">
                <p className="text-center">1,504</p>
                <p className="text-center">Data</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <BarChart />
            </div>
            <div className="col-md-6">
              <CandleStickChart />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <RegularChart />
            </div>
            <div className="col-md-6">
              <PieChart />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard;