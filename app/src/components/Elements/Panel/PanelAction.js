import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PanelAction extends Component {
  render() {
    return (
      <div className="panel-action">
        <div className="panel-action-inner">
          {this.props.icon ? <i className="md-icon">{this.props.icon}</i> : ''}

          {this.props.title ? <strong>{this.props.title}</strong> : ''}
        </div>
      </div>
    );
  }
}

PanelAction.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

export default PanelAction;