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
