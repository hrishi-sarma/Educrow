import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <img src="src/assets/educrow1.png" alt="" />
        </div>
        <ul>
          <li><a href="src/explore.jsx">Explore</a></li>
          <li><a href="#skill-bg">Progress</a></li>
          <li><a href="project.html">More</a></li>
        </ul>
      </nav>

      <div class="line">
        
      </div>


      <div class="title-container">

        <div class="overlay">
          <div class="title">
              <h1>
                Educrow  
              </h1>

              { <p>
                (Educate karo)
              </p> }
          </div>

        </div>


      </div>
      <div className="search-bar-container">
          <input type="text" placeholder="What would you like to learn today?" className="search-bar" />
      </div>


      <div className="cards-container">
        <div className="card">
          <img src="src/assets/JAVA.jpeg" alt="Card 1" />
          <div className="card-content">
            <h2>Java Basics</h2>
            <p>Learn the basics of java with this interactive course.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/c++.jpeg" alt="Card 2" />
          <div className="card-content">
            <h2>C++</h2>
            <p>Dive into the world of C++ with this beginner friendly course.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/unity.jpeg" alt="Card 3" />
          <div className="card-content">
            <h2>Unity 3D</h2>
            <p>Dive into the world of 3D with this Unity 3D course, coupled with multiple projects.</p>
            <button>Learn More</button>
          </div>
        </div>
        
        
        
      </div>

      

      <div class="resumeContainer">
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
  )
}

export default App
