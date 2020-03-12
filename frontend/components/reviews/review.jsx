import React from "react"
import ReviewIndex from "./review_index"

class Review extends React.Component {


    componentDidMount() {
        this.props.requestReviews(this.props.tour.id)
    }

    render() {

        if (this.props.reviews === undefined) return null 
 
        return(
            <div className="review-div">
                <div className="review-header">Reviews

                {this.props.reviews.map(review => 
                <ReviewIndex 
                    key={review.id}
                    review={review}
                    // user={review.user}
                />)}

                </div>

               
            </div>
        )
    }

}

export default Review