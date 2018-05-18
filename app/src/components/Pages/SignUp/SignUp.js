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
              <label for="name">Name</label>
              <input type="text" name="name" className="form-control" />
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>

            <div className="form-group">
              <label for="re-enter-email">Re-enter email</label>
              <input type="email" name="re-enter-email" className="form-control" />
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" className="form-control" />
            </div>

            <div className="form-group">
              <label for="re-enter-email">Re-enter password</label>
              <input type="password" name="re-enter-email" className="form-control" />
            </div>

            <div className="form-group form-group-button">
              <div className="form-group-button-description">
                Have an account? <NavLink to="/">Log in</NavLink>
              </div>

              <button type="submit" className="button button-primary button-right">
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
