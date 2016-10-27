import React from 'react';

const Rating = ({rating}) => {
  return(
    <div>
      <h3>The Rating is: {rating}</h3>
    </div>
  )
}

Rating.propTypes = {
  rating: React.PropTypes.number.isRequired,
}

export default Rating;
