import React, { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Video = memo((props) => {
  const location = useLocation();
  const videoId = location.state;
  console.log(videoId);
  const src = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="1280"
        height="720"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
});

export default Video;
