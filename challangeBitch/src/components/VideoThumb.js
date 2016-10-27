import React from 'react';

const VideoThumb = ({imgSource, videoTitle, videoId}) => {
  const videoUrl = `./player/${videoId}`;
  return(
    <div>
      <a href={videoUrl}>
        <img src={imgSource} alt={videoTitle}/>
      </a>
    </div>
  )
}

VideoThumb.propTypes = {
  imgSource: React.PropTypes.string.isRequired,
  videoTitle: React.PropTypes.string.isRequired,
  videoId: React.PropTypes.string.isRequired
}

export default VideoThumb;
