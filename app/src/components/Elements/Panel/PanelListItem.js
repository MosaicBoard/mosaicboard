import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelListItem extends Component {
  render() {
    return <li>{this.props.children}</li>;
  }
}

PanelListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelListItem;
