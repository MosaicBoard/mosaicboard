/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Empty.css';

class Empty extends Component {
  render() {
    return (
      <div className="page-empty">
        <div className="page-empty-content">{this.props.children}</div>
      </div>
    );
  }
}

Empty.propTypes = {
  children: PropTypes.node.isRequired
};

export default Empty;
