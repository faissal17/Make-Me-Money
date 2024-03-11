import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/auth.css';

function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="remeber-forget">
          <Link className="a" to="">
            Forget Password
          </Link>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't you have an account?
            <Link className="a" to="/Register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
