/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelActionWrapper extends Component {
  render() {
    return <div className="panel-actions">{this.props.children}</div>;
  }
}

PanelActionWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelActionWrapper;
