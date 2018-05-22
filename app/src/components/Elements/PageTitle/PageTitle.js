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
