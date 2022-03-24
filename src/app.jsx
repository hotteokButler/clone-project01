import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Nav from './components/nav';
import ThumbnailList from './components/thumbnailList';
import Video from './components/video';

const App = (props) => {
  const apiKey = process.env.REACT_APP_KEY;
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${apiKey}`,
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
      <Nav />
      <div id="wrap">
        <div className="container">
          <Routes>
            <Route path="/main" element={<ThumbnailList thumbnail={thumbnail} />} />
            <Route path="/channel" element={<Video />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
