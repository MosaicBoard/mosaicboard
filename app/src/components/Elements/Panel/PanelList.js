/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelList extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}

PanelList.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelList;
