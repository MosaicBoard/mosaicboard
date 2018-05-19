import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath, NavLink } from 'react-router-dom';
import { routes } from '../../../routes';

import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  getPaths(pathname) {
    const paths = ['/'];
  }

  render() {
    return (

    );
  }
}

Breadcrumbs.propTypes = {
  location: PropTypes.object.isRequired
};

export default Breadcrumbs;
