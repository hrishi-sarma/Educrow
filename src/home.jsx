import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './home.css';

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate(); // Use navigate function

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="src/assets/educrow1.png" alt="" />
        </div>
        <ul >
          <li><button className='navbuttons' onClick={() => navigate('/')}>Explore</button></li>
          <li><button className='navbuttons' onClick={() => navigate('/progress')}>Progress</button></li>
          <li><button className='navbuttons' onClick={() => navigate('/more')}>More</button></li>
        </ul>
      </nav>

      <div className="line"></div>

      <div className="title-container">
        <div className="overlay">
          <div className="title">
            <h1>Educrow</h1>
            <p>(Educate karo)</p>
          </div>
        </div>
      </div>

      <div className="search-bar-container">
        <input type="text" placeholder="What would you like to learn today?" className="search-bar" />
      </div>

      <div className="cards-container">
        <div className="card">
          <img src="src/assets/JAVA.jpeg" alt="Java Basics" />
          <div className="card-content">
            <h2>Java Basics</h2>
            <p>Learn the basics of java with this interactive course.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/c++.jpeg" alt="C++" />
          <div className="card-content">
            <h2>C++</h2>
            <p>Dive into the world of C++ with this beginner-friendly course.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/unity.jpeg" alt="Unity 3D" />
          <div className="card-content">
            <h2>Unity 3D</h2>
            <p>Dive into the world of 3D with this Unity 3D course, coupled with multiple projects.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="resumeContainer">
        <div className="resumecard">
          <div className="resumecard-content">
            <h2>Python</h2>
            <p>Pick up where you left off...</p>
            <progress></progress>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
