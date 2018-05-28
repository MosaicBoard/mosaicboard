/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <NavLink
        to={this.props.to ? this.props.to : ''}
        className={
          this.props.classes ? `${this.props.classes} button` : 'button'
        }
      >
        {this.props.children}
      </NavLink>
    );
  }
}

Button.propTypes = {
  to: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
