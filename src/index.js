import React from 'react';
import ReactDOM from 'react-dom';
import Video from './video'; // video.js

import './index.css';

// ------ App class ------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.localSteam = null;
    this.state = {
      playing: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.startVideo = this.startVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  }

  componentDidMount() {
    console.log('App DidMound()');
  }

  componentWillUnmount() {
    console.log('App WillUnmount()');
    if (this.localStream) {
      this.stopVideo();
    }
  }

  // -----------

  startVideo(e) {
    e.preventDefault();
    console.log('start Video');
    if (this.localStream) {
      console.warn('localVideo ALREADY started');
      return;
    }

    const constraints = { video: true, audio: false };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.localStream = stream;
        this.setState({ playing: true });
      })
      .catch(err => console.error('media ERROR:', err));
  }

  stopVideo(e) {
    e.preventDefault();
    console.log('stop Video');
    if (this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
      this.localStream = null;
      this.setState({ playing: false });
    }
  }

  render() {
    console.log('App render()');
    return (
      <div className="App" >
        App body<br />
        <button onClick={this.startVideo}> Start Video</button >
        <button onClick={this.stopVideo}>Stop Video</button>
        <div className="VideoContainer">
          <Video id={"local_video"} width={"240px"} height={"180px"} stream={this.localStream}>
          </Video>
        </div>
      </div >
    );
  }
}

// ====================== ReactDOM rendering ====================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
