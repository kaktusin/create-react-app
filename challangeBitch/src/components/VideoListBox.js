import React from 'react';

const VideoListBox = (props) => {
  return(
    <tr>
      <td>{props.data._id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

VideoListBox.propTypes = {
  // rating: React.PropTypes.number.isRequired,
}

export default VideoListBox;
