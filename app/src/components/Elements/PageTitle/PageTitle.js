import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import { routes } from '../../../routes';

// import Breadcrumbs from '../Breadcrumbs';
import Menu from '../Menu';

import './PageTitle.css';

class PageTitle extends Component {
  findTitle() {
    for (let route of routes) {
      if (matchPath(this.props.location.pathname, route)) {
        return route.title;
      }
    }

    return null;
  }

  render() {
    return (
      <div className="page-title">
        {/* <h1>{this.findTitle()}</h1> */}
        <Menu />
      </div>
    );
  }
}

PageTitle.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(PageTitle);
