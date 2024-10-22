// import { useState } from 'react';
// import './signup.css';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [isSigningUp, setIsSigningUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     const isValidUser = email === 'user@example.com' && password === 'password123';

//     if (isValidUser) {
//       navigate('/home');
//     } else {
//       alert('Invalid email or password. Please try again.');
//     }
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (password !== repeatPassword) {
//       alert('Passwords do not match.');
//       return;
//     }

//     alert('Signed up successfully!');
//     navigate('/home');
//   };

//   return (
//     <div className="bg">
//       <h1 className="main-heading">Educrow</h1>
//       <div className="cardsin">
//         <div className="banner">
//           <span className="banner-text">Educrow</span>
//           <span className="banner-text">Padhai crow</span>
//         </div>
//         <span className="cardsin__title">{isSigningUp ? 'Sign Up' : 'Sign In'}</span>
      
//         <form className="cardsin__form" onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
//           {isSigningUp && (
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//           )}
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {isSigningUp && (
//             <div className="input-group">
//               <input
//                 type="password"
//                 placeholder="Repeat your password"
//                 value={repeatPassword}
//                 onChange={(e) => setRepeatPassword(e.target.value)}
//                 required
//               />
//             </div>
//           )}
//           <div className="button-group">
//             <button type="submit" className="sign-up">{isSigningUp ? 'Sign Up' : 'Sign In'}</button>
//             <button type="button" className="toggle-button" onClick={() => setIsSigningUp(!isSigningUp)}>
//               {isSigningUp ? 'Go to Sign In' : 'Sign Up'}
//             </button>
//           </div>
//         </form>

       
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Handles login (Sign In)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }), // Using email as the username for login
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        navigate('/home'); // Redirect to home on successful login
      } else {
        alert(data.message); // Handle error
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please try again.');
    }
  };

  // Handles Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (password !== repeatPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email,
          password
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Signed up successfully!');
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Sign-up failed', error);
      alert('Sign-up failed. Please try again.');
    }
  };

  return (
    <div className="bg">
      <h1 className="main-heading">Educrow</h1>
      <div className="cardsin">
        <div className="banner">
          <span className="banner-text">Educrow</span>
          <span className="banner-text">Padhai crow</span>
        </div>
        <span className="cardsin__title">{isSigningUp ? 'Sign Up' : 'Sign In'}</span>
      
        <form className="cardsin__form" onSubmit={isSigningUp ? handleSignUp : handleLogin}>
          {isSigningUp && (
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
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
          {isSigningUp && (
            <div className="input-group">
              <input
                type="password"
                placeholder="Repeat your password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </div>
          )}
          <div className="button-group">
            <button type="submit" className="sign-up">
              {isSigningUp ? 'Sign Up' : 'Sign In'}
            </button>
            <button
              type="button"
              className="toggle-button"
              onClick={() => setIsSigningUp(!isSigningUp)}
            >
              {isSigningUp ? 'Go to Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
