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
