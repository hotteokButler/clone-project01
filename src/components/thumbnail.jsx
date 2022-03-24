import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import thumbnail from './css/thumbnails.module.css';

const Thumbnail = memo((props) => {
  const url = props.thumbnails.high.url;
  const title = props.title;
  const channelName = props.channel;
  const videoId = props.vidoId;

  return (
    <li className={thumbnail.card}>
      <Link to="/channel" state={videoId}>
        <figure className={thumbnail.img}>
          <img src={url} alt="유튜브 썸네일" />
        </figure>
        <dl className={thumbnail.description}>
          <dt className={thumbnail.profileImg}>
            <img src="" alt="" />
          </dt>
          <div className={thumbnail.titleBox}>
            <dt className={thumbnail.title}>{title}</dt>
            <dd className={thumbnail.channel}>{channelName}</dd>
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
