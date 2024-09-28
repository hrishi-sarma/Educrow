import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup'; 
import Home from './home'; 

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Signup />} />


        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
