/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Empty from '../../Layout/Empty';

class SignUp extends Component {
  render() {
    return (
      <Empty>
        <div className="login">
          <h1>MosaicBoard</h1>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="re-enter-email">Re-enter email</label>
              <input
                type="email"
                name="re-enter-email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="re-enter-email">Re-enter password</label>
              <input
                type="password"
                name="re-enter-email"
                className="form-control"
              />
            </div>

            <div className="form-group form-group-button">
              <div className="form-group-button-description">
                Have an account? <NavLink to="/">Log in</NavLink>
              </div>

              <button
                type="submit"
                className="button button-primary button-right"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </Empty>
    );
  }
}

export default SignUp;
