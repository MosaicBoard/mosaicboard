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
              <Tooltip
                content={<span>Dashboards</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">dashboard</i>
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Popover content={addMenu} position={Position.RIGHT_BOTTOM}>
                <Tooltip
                  content={<span>New</span>}
                  position={Position.RIGHT}
                  usePortal={false}
                >
                  <a
                    href="#add"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    <i className="md-icon">add</i>
                  </a>
                </Tooltip>
              </Popover>
            </li>
            <li>
              <Tooltip
                content={<span>Change Background</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">image</i>
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                content={<span>Public URLs</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">link</i>
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                content={<span>TV Mode</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">tv</i>
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                content={<span>Export Dashboard</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">file_download</i>
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                content={<span>Duplicate Dashboard</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">filter_none</i>
                </NavLink>
              </Tooltip>
            </li>
          </ul>

          <ul className="bottom">
            <li>
              <Tooltip
                content={<span>Settings</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">settings</i>
                </NavLink>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                content={<span>Logout</span>}
                position={Position.RIGHT}
                usePortal={false}
              >
                <NavLink to="/">
                  <i className="md-icon">power_settings_new</i>
                </NavLink>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Toolbar;
