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


      <div class="title">
          <h1>
            Educrow  
          </h1>
      </div>
    </>
  )
}

export default App
