import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Empty extends Component {
  render() {
    return (
      <div className="page-empty">
        <div className="page-empty-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Empty.propTypes = {
  children: PropTypes.node.isRequired
};

export default Empty;
