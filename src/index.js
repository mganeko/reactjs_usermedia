import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  function startVideo(e) {
    e.preventDefault();
    console.log('start Video');
  }

  function stopVideo(e) {
    e.preventDefault();
    console.log('stop Video');
  }

  return (
    <div className="App">
      App body<br />
      <button onClick={startVideo}>Start Video</button>
      <button onClick={stopVideo}>Stop Video</button>
      <div className="VideoContainer">
        <video id="local_video">
        </video>
      </div>
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
