import React from 'react';

const Description = ({description, isPlayer}) => {

  let videoDescription = (isPlayer) ? description : (description.split(" ", 20).join(" ")) + "...";
  //Shorten the video description in 20 words if the component is not in the <videoPlayer/> component.
  //console.log(videoDescription);
  return(
    <div >
      <p>{videoDescription}</p>
    </div>
  )
}

Description.defaultProps = {
  isPlayer: false
}

Description.propTypes = {
  description: React.PropTypes.string.isRequired,
  isPlayer: React.PropTypes.bool
}

export default Description;
