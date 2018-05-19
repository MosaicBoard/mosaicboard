import React, { Component } from 'react';

import './MenuSwitchDashboard.css';

class MenuSwitchDashboard extends Component {
  toggleBodyClass() {
    document.body.classList.toggle('sidebar-title-content-open');
  }

  render() {
    return (
      <h1 className="sidebar-title-wrapper">
        <div className="sidebar-title-inner" onClick={this.toggleBodyClass.bind(this)}>
          <div className="sidebar-subtitle">Switch Dashboard</div>
          <div className="sidebar-title">Sales</div>
          <div className="sidebar-action">
            <i className="md-icon">arrow_drop_down</i>
          </div>
        </div>

        <div className="sidebar-title-content">
          <div className="sidebar-title-content-label">
            Switch Dashboard
          </div>

          <div className="sidebar-title-content-body">
            <form action="">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Dashboard" />
              </div>
            </form>

            <ul>
              <li>Social</li>
              <li>Metrics</li>
              <li>Business</li>
              <li>Team</li>
              <li>XYZ</li>
            </ul>

            <div className="sidebar-title-content-body-more">
              Show All Dashboard
            </div>
          </div>
        </div>
      </h1>
    );
  }
}

export default MenuSwitchDashboard;
