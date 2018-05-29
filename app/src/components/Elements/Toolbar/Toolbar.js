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
  Position,
  Tooltip
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
                <Tooltip
                  content={<span>Dashboards</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">dashboard</i>
                </Tooltip>
              </NavLink>
            </li>
            <li>
              <Popover content={addMenu} position={Position.RIGHT_BOTTOM}>
                <Tooltip
                  content={<span>New</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">add</i>
                </Tooltip>
              </Popover>
            </li>
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>Change Background</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">image</i>
                </Tooltip>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>Public URLs</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">link</i>
                </Tooltip>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>TV Mode</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">tv</i>
                </Tooltip>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>Export Dashboard</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">file_download</i>
                </Tooltip>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>Duplicate Dashboard</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">filter_none</i>
                </Tooltip>
              </NavLink>
            </li>
          </ul>

          <ul className="bottom">
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>Settings</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">settings</i>
                </Tooltip>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <Tooltip
                  content={<span>Logout</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <i className="md-icon">power_settings_new</i>
                </Tooltip>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Toolbar;
