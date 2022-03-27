import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Nav from './components/nav';
import ThumbnailList from './components/thumbnailList';
import VideoPage from './components/videoPage';

const App = (props) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [inputData, setInputData] = useState(null);
  const apiKey = process.env.REACT_APP_KEY;

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      mode: 'cors',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setThumbnail(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const getSearchData = (inputData) => {
    if (inputData) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${inputData}&key=${apiKey}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setInputData(result.items))
        .catch((error) => console.log('error', error));
    } else {
      setInputData(null);
    }
  };

  const logoClickEvent = () => {
    setInputData(null);
  };

  return (
    <>
      <Header getSearchData={getSearchData} onLogoClick={logoClickEvent} />
      <Routes>
        <Route exact path="/" element={<Nav />} />
      </Routes>
      <div id="wrap">
        <div className="container">
          <Routes>
            <Route path="/" element={<ThumbnailList thumbnail={inputData ? inputData : thumbnail} />} />
            <Route path="channel" element={<VideoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
