import React from "react"
import ReviewIndex from "./review_index"

class Review extends React.Component {


    componentDidMount() {
        this.props.requestReviews(this.props.tour.id)
    }

    

    render() {
        if (this.props.reviews === undefined) return null 

        const reviewsRev = this.props.reviews.reverse() 

        return(
            <div className="review-div">
                <div className="review-header">Reviews
                    <button onClick={() => this.props.openModal("review")}>Leave A Review</button>
                    
                    {reviewsRev.map(review => 
                    <ReviewIndex 
                        key={review.id}
                        review={review}
                        currentUserId={this.props.userId}
                        deleteReview={this.props.deleteReview}
                    />)}
                </div>

               
            </div>
        )
    }

}

export default Review