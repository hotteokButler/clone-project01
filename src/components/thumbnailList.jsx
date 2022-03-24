import React from 'react';
import thumbList from './css/thumbList.module.css';
import Thumbnail from './thumbnail';

const ThumbnailList = (props) => {
  console.log(props);

  return (
    <section className="youtube__thumbnails">
      <ul className={thumbList.thumbnailsList}>
        {props.thumbnail.map((list) => (
          <Thumbnail
            key={list.id}
            channel={list.snippet.channelTitle}
            vidoId={list.id}
            title={list.snippet.title}
            thumbnails={list.snippet.thumbnails}
          />
        ))}
      </ul>
    </section>
  );
};

export default ThumbnailList;
