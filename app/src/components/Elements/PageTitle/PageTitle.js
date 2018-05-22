import React, { Component } from 'react';

import Menu from '../Menu';

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
