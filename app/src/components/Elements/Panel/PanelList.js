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
