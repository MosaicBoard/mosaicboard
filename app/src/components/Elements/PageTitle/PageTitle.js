/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';

import Menu from '../../UI/Menu';

import './PageTitle.css';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <Menu />
      </div>
    );
  }
}

export default PageTitle;
