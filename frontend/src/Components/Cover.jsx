import React from 'react'
import '../css/Cover.css';
import coverVideo from '../media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src={coverVideo} autoPlay loop muted/>
      <h1> Maguey 500</h1>

    </div>
  );
}

export default Cover