import React from 'react';
import './video.css';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
    //this.state = { stream: null };
  }

  componentDidMount() {
    console.log('Video DidMound()');
  }

  componentWillUnmount() {
    console.log('Video WillUnmount()');
  }

  render() {
    console.log('Video render()');
    const stream = this.props.stream;
    if (this.elementRef.current) {
      this.elementRef.current.srcObject = stream;
    }
    else {
      console.log('ref.current NULL');
    }

    return (
      <video className="video_with_border" ref={this.elementRef} id={this.props.id} width={this.props.width} height={this.props.height} autoPlay muted ></video>
    );
  }
}

export default Video;
