import React, { useState } from 'react';
import './login-form.scss';

interface Props {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLoginSuccess();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Travel Planner</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group"> {/* Added class for potential styling of form groups */}
          <label htmlFor="username">Username:</label>
          <input 
            id="username" 
            type="text" 
            className="form-input" // Class for styling inputs
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </div>
        <div className="form-group"> {/* Added class for potential styling of form groups */}
          <label htmlFor="password">Password:</label>
          <input 
            id="password" 
            type="password" 
            className="form-input" // Class for styling inputs
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Error message class for styling */}
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;