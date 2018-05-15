import React, { Component } from 'react';

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
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" />
            </div>

            <div className="form-group form-group-button">
              <div className="form-group-button-description">
                <a>Forgot Password?</a>
              </div>

              <button type="submit" className="button button-primary button-right">Login</button>
            </div>
          </form>

          <div className="btn-signup">
            <a>Don't have a login? Click here to sign up!</a>
          </div>
        </div>
      </Empty>
    );
  }
}

export default Login;
