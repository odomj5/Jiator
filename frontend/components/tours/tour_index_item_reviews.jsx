import React from 'react'
import AverageRating from "../reviews/average_rating"


class TourIndexItemReviews extends React.Component {

    componentDidMount() {
        this.props.requestReviews(this.props.tourId)
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.tourId !== prevProps.tourId) {
            // debugger
            this.props.requestReviews(this.props.tourId)
        }
    }


    render() {
        debugger
        return(
            <div>
                <AverageRating reviews={this.props.reviews}/>
            </div>
        )
    }

}


export default TourIndexItemReviews;