import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../Elements/Toolbar';
import Sidebar from '../../Elements/Sidebar';
import PageTitle from '../../Elements/PageTitle';

import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="page-inner">
        <Toolbar />
        <Sidebar />

        <div className="main">
          <PageTitle />

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
