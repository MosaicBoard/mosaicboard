import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelContainer extends Component {
  render() {
    return <div className="panel">{this.props.children}</div>;
  }
}

PanelContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelContainer;
