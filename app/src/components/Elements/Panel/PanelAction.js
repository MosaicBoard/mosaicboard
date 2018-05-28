/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export class PanelAction extends Component {
  render() {
    return (
      <div className="panel-action">
        <div className="panel-action-inner">
          <NavLink to={this.props.to ? this.props.to : ''}>
            {this.props.icon ? (
              <i className="md-icon">{this.props.icon}</i>
            ) : (
              ''
            )}

            {this.props.title ? <strong>{this.props.title}</strong> : ''}
          </NavLink>
        </div>
      </div>
    );
  }
}

PanelAction.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string
};

export default PanelAction;
