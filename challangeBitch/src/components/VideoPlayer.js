
import React from 'react';
// import '../node_modules/ReactHtml5Video.css';
// import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import Video from 'react-html5video';
import 'react-html5video/dist/ReactHtml5Video.css';


class VideoPlayer extends React.Component {
  render() {
    return (
      <Video
        controls
        // autoPlay
        poster="https://unsplash.it/800/600">
        <source src="http://localhost:3000/videos/How_Does_AngularJS_Work_Beginners_Angular_Tutorial.mp4" type="video/mp4" />
      </Video>
        );
    }
}

// VideoPlayer.propTypes = {
//   rating: React.PropTypes.number.isRequired,
// }

export default VideoPlayer;
