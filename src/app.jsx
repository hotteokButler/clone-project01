import React, { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Nav from './components/nav';
import ThumbnailList from './components/thumbnailList';
import VideoPage from './components/videoPage';

const App = (props) => {
  const apiKey = process.env.REACT_APP_KEY;
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    async function getDataFromYoutube(apiKey) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${apiKey}`,
        requestOptions
      );

      return await response.json();
    }

    getDataFromYoutube(apiKey)
      .then((result) => {
        setThumbnail(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact index element={<Nav />} />
      </Routes>
      <div id="wrap">
        <div className="container">
          <Routes>
            <Route exact index element={<ThumbnailList thumbnail={thumbnail} />} />
            <Route path="channel" element={<VideoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
