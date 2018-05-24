import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <NavLink
        to={this.props.to ? this.props.to : ''}
        className={
          this.props.classes ? `${this.props.classes} button` : 'button'
        }
      >
        {this.props.children}
      </NavLink>
    );
  }
}

Button.propTypes = {
  to: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
