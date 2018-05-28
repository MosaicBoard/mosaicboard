/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
