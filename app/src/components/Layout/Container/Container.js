/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../Elements/Toolbar';
import Sidebar from '../../Elements/Sidebar';
import PageTitle from '../../Elements/PageTitle';
import Panel from '../../Elements/Panel';
// import Footer from '../../Elements/Footer';

import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="page-inner">
        <Toolbar />
        <Sidebar />

        <div className="main">
          <PageTitle />
          <div className="content">{this.props.children}</div>
          {/* <Footer /> */}
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
