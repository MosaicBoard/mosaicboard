/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelListWrapper extends Component {
  render() {
    return <div className="panel-list">{this.props.children}</div>;
  }
}

PanelListWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelListWrapper;
