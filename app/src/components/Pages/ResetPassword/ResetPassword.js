import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Empty from '../../Layout/Empty';

class ResetPassword extends Component {
  render() {
    return (
      <Empty>
        <div className="login">
          <h1>MosaicBoard</h1>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>

            <div className="form-group form-group-button">
              <div className="form-group-button-description">
                <NavLink to="/">← Back to login</NavLink>
              </div>

              <button type="submit" className="button button-primary button-right">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </Empty>
    );
  }
}

export default ResetPassword;
