import React, { useState } from 'react';
import './content.css'
import { useNavigate } from 'react-router-dom';


    

const Content = () => {
  const [selectedVideo, setSelectedVideo] = useState('https://www.youtube.com/embed/VIDEO_ID');
  const navigate = useNavigate();
  const videoList = [
    { id: 1, title: 'Video 1', url: 'https://youtu.be/p9RtakBZiTM?si=PwjC8pQGCHGbe1Ez' },
    { id: 2, title: 'Video 2', url: 'https://youtu.be/rLpXI9wIRLw?si=STbdIheqJySsCUl0' },
    { id: 3, title: 'Video 3', url: 'https://youtu.be/L07xPMyL8sY?si=UR9Z-jetFAc5lTiD' },

  ];

  return (

    

    <div className="learning-page">

        <nav className="navbar">
            <div className="logo" onClick={() => navigate('/home')}>
              <img src="src/assets/educrow1.png" alt="" />
            </div>
            <ul >
              <li><button className='navbuttons' onClick={() => navigate('/explore')}>Explore</button></li>
              <li><button className='navbuttons' onClick={() => navigate('/content')}>Content</button></li>
              <li><button className='navbuttons' onClick={() => navigate('/more')}>More</button></li>
            </ul>
          </nav>



      <div className="videocontainer">
        <div className="video">
          <iframe
            src={selectedVideo}
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="selection">
          {videoList.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => setSelectedVideo(video.url)}
            >
              {video.title}
            </div>
          ))}
        </div>
      </div>

      <div className="pdf">
        <iframe
          src="/peedeeff.pdf"
          title="PDF Viewer"
    
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </div>
  );
};

export default Content;
