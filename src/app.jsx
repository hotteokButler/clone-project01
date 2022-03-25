import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Nav from './components/nav';
import ThumbnailList from './components/thumbnailList';
import Video from './components/video';
import VideoPage from './components/videoPage';

const App = (props) => {
  const apiKey = process.env.REACT_APP_KEY;
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setThumbnail(result.items);
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
      <div id="wrap">
        <div className="container">
          <Routes>
            <Route path="/" element={<ThumbnailList thumbnail={thumbnail} />} />
            <Route path="/channel" element={<VideoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
