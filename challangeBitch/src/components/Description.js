import React from 'react';

const Description = ({description, isPlayer}) => {

  let videoDescription = (isPlayer) ? description : (description.split(" ", 20).join(" ")) + "...";
  //Shorten the video description in 20 words if the component is not in the <videoPlayer/> component.
  //console.log(videoDescription);
  return(
    <div className="row">
      <div className="col-xs-3">
        <p>{videoDescription}</p>
      </div>
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
