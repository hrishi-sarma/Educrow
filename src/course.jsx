import React, { useState } from 'react';
import './course.css';

// Array of video data
const videoList = [
    { id: 1, title: 'Introduction to C', url: 'https://www.youtube.com/embed/HRvyei7vFSM' },
    { id: 2, title: 'Variables and Data Types', url: 'https://www.youtube.com/embed/A74TOX803D0?t=274s' },
    { id: 3, title: 'Control Structures', url: 'https://www.youtube.com/embed/5PdEmeopJVQ' },
    // Add more videos as needed
];

// Video player component
const VideoPlayer = ({ url }) => (
    <div className="video-player">
        <iframe
            width="560"
            height="315"
            src={url}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

// Video list component
const VideoList = ({ videos, onVideoSelect }) => (
    <div className="video-list">
        {videos.map((video) => (
            <div key={video.id} className="video-item" onClick={() => onVideoSelect(video)}>
                {video.title}
            </div>
        ))}
    </div>
);

const Course = () => {
    // State to store the selected video
    const [selectedVideo, setSelectedVideo] = useState(videoList[0]);

    return (
        <div className="course-container">
            <h1>C Programming Lectures</h1>
            <div className="content-container">
                {/* Render video player for the selected video */}
                <VideoPlayer url={selectedVideo.url} />
                
                {/* Render video list */}
                <VideoList videos={videoList} onVideoSelect={setSelectedVideo} />
            </div>
        </div>
    );
};

export default Course;
