import React from 'react'
import AverageRating from "../reviews/average_rating"


class TourIndexItemReviews extends React.Component {


    render() {
        return(
            <div>
                <AverageRating reivew={this.props.reviews}/>
            </div>
        )
    }

}


export default TourIndexItemReviews;