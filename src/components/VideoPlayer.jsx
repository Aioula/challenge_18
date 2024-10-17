import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const { id } = useParams();
  const video = useSelector(state => state.videos.find(video => video.id === id));

  return (
    <div className="video-player">
      {video ? (
        <>
          <h1>{video.title}</h1>
          <video src={video.url} controls />
          <p>{video.description}</p>
        </>
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
};

export default VideoPlayer;
