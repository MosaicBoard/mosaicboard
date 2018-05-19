import React, { Component } from 'react';

import MenuSwitchDashboard from '../MenuSwitchDashboard';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <MenuSwitchDashboard />
      </div>
    );
  }
}

export default Sidebar;
