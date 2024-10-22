import React, { useState } from 'react';
import './contentc.css'
import { useNavigate } from 'react-router-dom';


    

const Content = () => {
  const [selectedVideo, setSelectedVideo] = useState('https://www.youtube.com/embed/iVLQeWbgbXs?si=dTxvCG7t1WGmYb05');
  const navigate = useNavigate();
  const videoList = [
    { id: 1, title: 'Topic 1', url: 'https://www.youtube.com/embed/1LGJSRFrxqQ?si=fcbhtU4jh_DZVtxj' }, 
    { id: 2, title: 'Topic 2', url: 'https://www.youtube.com/embed/a8ZB-TPB6EU?si=S84FFElueVChuhGV' }, // YouTube video
    { id: 3, title: 'Topic 3', url: 'https://www.youtube.com/embed/-W-TYjL0aFE?si=uRiSUU-x7U2H_ClL' } // YouTube video
  ];

  return (

    

    <div className="learning-page">

        <nav className="navbar">
            <div className="logo" onClick={() => navigate('/home')}>
              <img src="src/assets/educrow1.png" alt="" />
            </div>
            <ul >
              <li><button className='navbuttons' onClick={() => navigate('/explore')}>Explore</button></li>
              <li><button className='navbuttons' onClick={() => window.location.href = 'https://www.youtube.com'}>More</button></li>
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
