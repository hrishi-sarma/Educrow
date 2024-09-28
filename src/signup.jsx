import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();


    const isValidUser = email === 'user@example.com' && password === 'password123';

    if (isValidUser) {
      navigate('/home');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="bg">

      <div className="cardsin">
        <div className="banner">
          <span className="banner-text">SignIn</span>
          <span className="banner-text">JOIN US</span>
        </div>
        <span className="cardsin__title">EDUCROW</span>
      


        <form className="cardsin__form" onSubmit={handleSignIn}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="sign-up">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
