import React from "react"
import ReviewIndex from "./review_index"
import ReviewForm from "./review_form"

class Review extends React.Component {


    componentDidMount() {
        this.props.requestReviews(this.props.tour.id)
    }

    render() {
        if (this.props.reviews === undefined) return null 
 
        return(
            <div className="review-div">
                <div className="review-header">Reviews
                <button onClick={() => this.props.openModal("review")}>Leave A Review</button>

                {this.props.reviews.map(review => 
                <ReviewIndex 
                    key={review.id}
                    review={review}
                    // user={review.user}
                />)}
                {/* {this.props} */}
                </div>

               
            </div>
        )
    }

}

export default Review