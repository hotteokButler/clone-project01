import React from 'react';
import Thumbnail from './thumbnail';
import pageThumbnail from './css/videoPageThumbnail.module.css';
const VideoPageThumbnail = (props) => {
  return (
    <section className={pageThumbnail.thumbnails}>
      <ul>
        {props.thumbnail &&
          props.thumbnail.map((list) => (
            <Thumbnail
              key={Math.random()}
              channel={list.snippet.channelTitle}
              vidoId={typeof list.id === 'object' ? list.id.videoId : list.id}
              title={list.snippet.title}
              thumbnails={list.snippet.thumbnails}
              description={list.snippet.description}
              tags={list.snippet.tags}
              publishDate={list.snippet.publishedAt}
            />
          ))}
      </ul>
    </section>
  );
};

export default VideoPageThumbnail;
