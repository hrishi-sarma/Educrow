import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Home from './home'; 
import Contentc from './contentc';
import Explore from './explore';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Signup />} />


        <Route path="/home" element={<Home />} />

        <Route path='/explore' element={<Explore />} />

        <Route path='/contentc' element={<Contentc />} />

      </Routes>
    </Router>
  );
}

export default App;
