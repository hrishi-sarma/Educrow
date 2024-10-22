import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Home from './home'; 
import Contentc from './contentc';
import Explore from './explore';
import Contentcpp from './contentcpp';
import Contentjava from './contentjava';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Signup />} />


        <Route path="/home" element={<Home />} />

        <Route path='/explore' element={<Explore />} />

        <Route path='/contentc' element={<Contentc />} />

        <Route path='/contentcpp' element={<Contentcpp />} />

        <Route path='/contentjava' element={<Contentjava />} />

      </Routes>
    </Router>
  );
}

export default App;
