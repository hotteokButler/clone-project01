import React, { memo } from 'react';

const Video = memo((props) => {
  const videoId = props.videoId;

  const src = `https://www.youtube-nocookie.com/embed/${videoId}`;

  return (
    <iframe
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
});

export default Video;
