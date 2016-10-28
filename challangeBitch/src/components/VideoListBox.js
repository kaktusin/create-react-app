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
  data: React.PropTypes.object.isRequired,
}

export default VideoListBox;
