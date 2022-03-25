import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Video from './video';
import videoPage from './css/videoPage.module.css';
import CommentsList from './commentsList';

const VideoPage = () => {
  const location = useLocation();
  const videoData = location.state;
  const apiKey = process.env.REACT_APP_KEY;
  const [toggleState, setToggleState] = useState(false);
  const [newDate, parseDate] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // jason Date => 년,월,일 변환
    parseDate(() => {
      const date = new Date(videoData.videoPublishedData);
      const parseMonth = date.getMonth() + 1;
      const parseDate = date.getDate();
      const parseYear = date.getFullYear();
      return `${parseYear}.${parseMonth === 13 ? 12 : parseMonth}.${parseDate}`;
    });

    //comments 가져오기
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Bl0s-1c5L0M&maxResults=25&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setComments(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  const changeToggleState = () => {
    setToggleState(!toggleState);
  };

  const toggleDesc = () => {
    if (!toggleState) {
      return `${videoPage.detail} ${videoPage.shortcut}`;
    } else {
      return videoPage.detail;
    }
  };

  return (
    <section className={videoPage.page}>
      <section className={videoPage.videoSection}>
        <div className={videoPage.video}>
          <Video videoId={videoData.videoId} />
        </div>
        <div className={videoPage.descBox}>
          <dl className={videoPage.desc}>
            <dt className={videoPage.title}>{videoData.title}</dt>
            <dd className={videoPage.publishDate}>{newDate}</dd>
          </dl>
          <p className={videoPage.channel}>{videoData.channelName}</p>
          <pre className={toggleDesc()}>{videoData.videoDesc}</pre>
          <button className={videoPage.more} onClick={changeToggleState}>
            더보기
          </button>
        </div>
        {/* video */}
        <section className={videoPage.commentsList}>
          <CommentsList comments={comments} />
        </section>
      </section>
    </section>
  );
};

export default VideoPage;
