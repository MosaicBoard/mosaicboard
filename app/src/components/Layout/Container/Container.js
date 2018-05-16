import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="page-inner">
        <div className="main">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
