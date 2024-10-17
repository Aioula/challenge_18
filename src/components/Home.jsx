import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const videos = useSelector(state => state.videos);

  return (
    <div className="home">
      <h1>Home</h1>
      {videos.map(video => (
        <div key={video.id} className="video-card">
          <Link to={`/video/${video.id}`}>
            <h2>{video.title}</h2>
          </Link>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
