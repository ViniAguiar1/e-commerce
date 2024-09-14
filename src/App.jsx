import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'test@example.com' && password === '123456') {
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <h1>GoFinance</h1>
        <p>The most popular peer to peer lending at SEA</p>
        <button>Read More</button>
      </div>
      <div className="right-side">
        <h2>Seja muito bem-vindo</h2>
        {/* <p>de volta</p> */}
        <div className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
