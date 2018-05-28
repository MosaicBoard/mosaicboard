/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position
} from '@blueprintjs/core';

import './Toolbar.css';

class Toolbar extends Component {
  render() {
    const addMenu = (
      <Menu>
        <MenuDivider title="Add new" />
        <MenuItem icon="dashboard" text="Dashboard" />
        <MenuItem icon="widget-header" text="Widget" />
      </Menu>
    );

    return (
      <div className="toolbar">
        <div className="toolbar-inner">
          <div className="logo">
            <span>M</span>
          </div>

          <ul className="top">
            <li>
              <NavLink to="/">
                <i className="md-icon">dashboard</i>
              </NavLink>
            </li>
            <li>
              <Popover content={addMenu} position={Position.RIGHT_BOTTOM}>
                <i className="md-icon">add</i>
              </Popover>
            </li>
            <li>
              <NavLink to="/">
                <i className="md-icon">image</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="md-icon">link</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="md-icon">tv</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="md-icon">file_download</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="md-icon">filter_none</i>
              </NavLink>
            </li>
          </ul>

          <ul className="bottom">
            <li>
              <NavLink to="/">
                <i className="md-icon">settings</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="md-icon">power_settings_new</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Toolbar;
