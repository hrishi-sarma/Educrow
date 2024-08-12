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
          <li><a href="teams2.html">Teams</a></li>
          <li><a href="#skill-bg">Contacts</a></li>
          <li><a href="project.html">Projects</a></li>
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

              {/* <p>
                Educate karo
              </p> */}
          </div>

        </div>


      </div>
      <div className="search-bar-container">
          <input type="text" placeholder="What would you like to learn today?" className="search-bar" />
      </div>


      <div className="cards-container">
        <div className="card">
          <img src="src/assets/card1.jpg" alt="Card 1" />
          <div className="card-content">
            <h2>Card 1 Title</h2>
            <p>Description of card 1.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/card2.jpg" alt="Card 2" />
          <div className="card-content">
            <h2>Card 2 Title</h2>
            <p>Description of card 2.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <img src="src/assets/card3.jpg" alt="Card 3" />
          <div className="card-content">
            <h2>Card 3 Title</h2>
            <p>Description of card 3.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
