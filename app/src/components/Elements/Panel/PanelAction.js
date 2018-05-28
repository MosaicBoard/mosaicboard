import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export class PanelAction extends Component {
  render() {
    return (
      <div className="panel-action">
        <div className="panel-action-inner">
          <NavLink to={this.props.to ? this.props.to : ''}>
            {this.props.icon ? (
              <i className="md-icon">{this.props.icon}</i>
            ) : (
              ''
            )}

            {this.props.title ? <strong>{this.props.title}</strong> : ''}
          </NavLink>
        </div>
      </div>
    );
  }
}

PanelAction.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string
};

export default PanelAction;
