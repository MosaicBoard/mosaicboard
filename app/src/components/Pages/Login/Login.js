/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Empty from '../../Layout/Empty';

import './Login.css';

class Login extends Component {
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

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>

            <div className="form-group form-group-button">
              <div className="form-group-button-description">
                <NavLink to="/reset_password">Forgot Password?</NavLink>
              </div>

              {/*
              <button type="submit" className="button button-primary button-right">
                Login
              </button>
              */}

              <NavLink
                to="/dashboard"
                className="button button-primary button-right"
              >
                Login
              </NavLink>
            </div>
          </form>

          <div className="btn-signup">
            <NavLink to="/signup">
              Don't have a login? Click here to sign up!
            </NavLink>
          </div>
        </div>
      </Empty>
    );
  }
}

export default Login;
