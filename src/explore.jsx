import { useState } from 'react'
import './explore.css'

function Explore() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="src/assets/educrow1.png" alt="Logo" />
        </div>
        <ul>
        <li><button className='navbuttons' onClick={() => navigate('/explore')}>Explore</button></li>
          <li><button className='navbuttons' onClick={() => navigate('/progress')}>Progress</button></li>
          <li><button className='navbuttons' onClick={() => navigate('/more')}>More</button></li>
        </ul>
      </nav>

      <div className="line"></div>

      <div className="search-bar-container">
        <input type="text" placeholder="What would you like to learn today?" className="search-bar" />
      </div>

      <div className="cards-container">
        <div className="card">
          <img src="src/assets/JAVA.jpeg" alt="Card 1" />
          <div className="card-content">
            <h2>Java Basics</h2>
            <p>Learn the basics of Java with this interactive course.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/c++.jpeg" alt="Card 2" />
          <div className="card-content">
            <h2>C++</h2>
            <p>Dive into the world of C++ with this beginner-friendly course.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/unity.jpeg" alt="Card 3" />
          <div className="card-content">
            <h2>Unity 3D</h2>
            <p>Explore 3D development with Unity, featuring multiple projects.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/JAVA.jpeg" alt="Card 4" />
          <div className="card-content">
            <h2>Advanced Java</h2>
            <p>Take your Java skills to the next level with advanced concepts.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/c++.jpeg" alt="Card 5" />
          <div className="card-content">
            <h2>Data Structures in C++</h2>
            <p>Master data structures and algorithms using C++.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/unity.jpeg" alt="Card 6" />
          <div className="card-content">
            <h2>Unity Game Design</h2>
            <p>Design and develop your first game with Unity.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
