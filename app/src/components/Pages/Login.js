import React, { Component } from 'react';

import Empty from '../Layout/Empty';
import { Button } from '../UI/Button';

class Login extends Component {
  render() {
    return (
      <Empty>
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

        <div className="form-description">
          <Button to="#" classes="button-block button-github">Login using GitHub</Button>
          <Button to="#" classes="button-block button-google">Login using Google</Button>
        </div>
      </Empty>
    );
  }
}

export default Login;
