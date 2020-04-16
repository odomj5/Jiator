import React from "react"
import ReviewIndex from "./review_index"

class Review extends React.Component {


    componentDidMount() {
        this.props.requestReviews(this.props.tour.id)
    }

    

    render() {
        if (this.props.reviews === undefined) return null 

        const reviewsRev = this.props.reviews.reverse() 
        // debugger
        return(
            <div className="review-div">
                <div className="review-header">Reviews
                    {this.props.userId === null ? null : <button onClick={() => this.props.openModal("review")}>Leave A Review</button>}
                   
                    
                    {reviewsRev.map(review => 
                    <ReviewIndex 
                        key={review.id}
                        review={review}
                        currentUserId={this.props.userId}
                        deleteReview={this.props.deleteReview}
                        returnSingleReview={this.props.returnSingleReview
                        }
                        openModal={this.props.openModal}
                    />)}
                </div>

               
            </div>
        )
    }

}

export default Review