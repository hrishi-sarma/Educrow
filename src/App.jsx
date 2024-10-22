import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup'; 
import Home from './home'; 
import Explore from './explore';
import Course from './course';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Signup />} />


        <Route path="/home" element={<Home />} />

        <Route path='/explore' element={<Explore />} />

        <Route path='/course' element={<Course />} />
        

      </Routes>
    </Router>
  );
}

export default App;
