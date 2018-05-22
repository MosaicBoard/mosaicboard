import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../Elements/Toolbar';
import Sidebar from '../../Elements/Sidebar';
import PageTitle from '../../Elements/PageTitle';
import Panel from '../../Elements/Panel';

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

        <div className="content-side-wrapper">
          <div className="content-side-overlay" />
          <div className="content-side">
            <Panel />
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
