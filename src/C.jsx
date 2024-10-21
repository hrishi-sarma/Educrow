import React from 'react';

const videos = [
    { id: 1, title: 'Introduction to C', url: 'https://www.youtube.com/watch?v=HRvyei7vFSM' },
    { id: 2, title: 'Variables and Data Types', url: 'https://www.youtube.com/watch?v=A74TOX803D0&t=274s' },
    { id: 3, title: 'Control Structures', url: 'https://www.youtube.com/watch?v=5PdEmeopJVQ' },
    // Add more videos as needed
];

const VideoPlayer = ({ url }) => (
    <div className="video-player">
        <iframe
            width="560"
            height="315"
            src={url}
            title="Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
);

const VideoList = ({ videos, onVideoSelect }) => (
    <div className="video-list">
        {videos.map(video => (
            <div key={video.id} className="video-item" onClick={() => onVideoSelect(video)}>
                {video.title}
            </div>
        ))}
    </div>
);

const C = () => {
    const [selectedVideo, setSelectedVideo] = React.useState(videos[0]);

    return (
        <div className="c-lectures">
            <h1>C Programming Lectures</h1>
            <div className="content">
                <VideoPlayer url={selectedVideo.url} />
                <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
        </div>
    );
};

export default C;