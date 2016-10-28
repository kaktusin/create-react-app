import React from 'react'
import { Rating } from 'semantic-ui-react'

// const Rating = ({rating}) => {
//   return(
//     <div>
//       <Rating icon='star' defaultRating={1} maxRating={5} onRate={this.handleRate}/>
//     </div>
//   )
// }

class RatingStars extends React.Component {
  state = {}
  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Rating icon='star' defaultRating={5} maxRating={5} size='huge' onRate={this.handleRate} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}

// Rating.propTypes = {
//   rating: React.PropTypes.number.isRequired,
// }

export default RatingStars;
