/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="footer-left">
          &copy; {currentYear} MosaicBoard. All rights reserved.
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
