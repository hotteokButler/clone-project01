import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import thumbnail from './css/thumbnails.module.css';

const Thumbnail = memo((props) => {
  const videoData = {
    thumbnailUrl: props.thumbnails.high.url,
    title: props.title,
    channelName: props.channel,
    videoId: props.vidoId,
    videoDesc: props.description,
    videotag: props.tags,
    videoPublishedData: props.publishDate,
  };

  return (
    <li className={thumbnail.card}>
      <Link to="/channel" state={videoData}>
        <figure className={thumbnail.img}>
          <img src={videoData.thumbnailUrl} alt="유튜브 썸네일" />
        </figure>
        <dl className={thumbnail.description}>
          <dt className={thumbnail.profileImg}>
            <img src="" alt="" />
          </dt>
          <div className={thumbnail.titleBox}>
            <dt className={thumbnail.title}>{videoData.title}</dt>
            <dd className={thumbnail.channel}>{videoData.channelName}</dd>
          </div>
          <dd className={thumbnail.moreIcon}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </dd>
        </dl>
      </Link>
    </li>
  );
});

export default Thumbnail;
