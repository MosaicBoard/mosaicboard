/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelListTitle extends Component {
  render() {
    return <div className="panel-list-title">{this.props.children}</div>;
  }
}

PanelListTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelListTitle;
