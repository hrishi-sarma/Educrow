import { useState } from 'react';
import './explore.css';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Java Basics',
      description: 'Learn the basics of Java with this interactive course.',
      image: 'src/assets/JAVA.jpeg',
      route: '/contentjava',
    },
    {
      id: 2,
      title: 'C++',
      description: 'Dive into the world of C++ with this beginner-friendly course.',
      image: 'src/assets/c++.jpeg',
      route: '/contentcpp',
    },
    {
      id: 3,
      title: 'Unity 3D',
      description: 'Explore 3D development with Unity, featuring multiple projects.',
      image: 'src/assets/unity.jpeg',
      route: '/contentunity',
    },
    {
      id: 4,
      title: 'Advanced Java',
      description: 'Take your Java skills to the next level with advanced concepts.',
      image: 'src/assets/JAVA.jpeg',
      route: '/contentadvjava',
    },
    {
      id: 5,
      title: 'Basics of C',
      description: 'Master C language with this awesome course.',
      image: 'src/assets/c++.jpeg',
      route: '/contentc',
    },
    {
      id: 6,
      title: 'Unity Game Design',
      description: 'Design and develop your first game with Unity.',
      image: 'src/assets/unity.jpeg',
      route: '/contentunitygame',
    }
  ];


  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/home')}>
          <img src="src/assets/educrow1.png" alt="" />
        </div>
        <ul>
          <li><button className='navbuttons' onClick={() => navigate('/explore')}>Explore</button></li>
          <li><button className='navbuttons' onClick={() => navigate('/more')}>More</button></li>
        </ul>
      </nav>

      <div className="line"></div>

      <div className="search-bar-container">
        <input 
          type="text" 
          placeholder="What would you like to learn today?" 
          className="search-bar" 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className="cards-container">
        {filteredCourses.map(course => (
          <div key={course.id} className="card">
            <img src={course.image} alt={`Card ${course.id}`} />
            <div className="card-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button onClick={() => navigate(course.route)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Explore;
