// src/pages/login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing the CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hwzthat.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });

      const loginData = await response.json();

      if (loginData.status) {
        // Save relevant data to local storage
        localStorage.setItem('booking-userid', loginData.userData.official_email_id);
        localStorage.setItem('booking-token', loginData.access_token);
        localStorage.setItem('booking-roll-code', loginData.roll_code);
        localStorage.setItem('expires-at', loginData.expires_at);

        // Redirect to dashboard after successful login
        navigate('/dashboard');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="login elite_y_space">
      <div className="elite_space login-row">
        <div className="login-left">
          <h1>Welcome to Elite Cricket Academy</h1>
          <h5>
            "Experience a learning environment like no other, where technique and talent are nurtured into true
            excellence. We don't just teach cricket; we shape champions."
          </h5>
        </div>
        <div className="login-right">
          <div className="login-card">
            <img src="/logo2.png" alt="logo" style={{ margin: '0 auto', display: 'flex', width: '120px' }} />
            <form onSubmit={handleLogin}>
              <div className="input-field">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <h6 className="text-danger text-right w-100">Forgot password?</h6>
              <button className="btn button-elite2 w-100" style={{ borderRadius: '6px' }}>
                Log In
              </button>
            </form>
            <div className="login-card-bottom">
              <h6 className="text-dark">
                Don’t have an account?
                <a href="/signup" className="text-danger">
                  Sign Up
                </a>
              </h6>
              <h6 className="text-dark">Or</h6>
              <div className="login-card-bottom-icons">
                <a href="/auth/google">
                  <img src="/google-icon.png" alt="google" />
                </a>
                <a href="/auth/facebook">
                  <img src="/facebook-icon.png" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
