/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {
  toggleBodyClass() {
    document.body.classList.toggle('content-side-open');
  }

  render() {
    return (
      <div className="menu">
        <a className="menu-item" onClick={this.toggleBodyClass.bind(this)}>
          <i className="md-icon">menu</i>
          <span>Menu</span>
        </a>
      </div>
    );
  }
}

export default Menu;
