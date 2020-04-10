import React from "react"

class ReviewIndex extends React.Component {


    deleteReview(reviewId) {
        
    }

    render() {
        let upDate = new Date(this.props.review.updatedAt)
        let year = upDate.getFullYear()
        let month = upDate.getMonth()
        let day = upDate.getDay()
        const months = [
            'January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ]
        // debugger
        return(
            <div className="review-index-div">
               <div className="star-title-cont">
                    <div className="star-icon-div">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        {/* <div>{this.props.review.rating}</div> */}
                    </div>
                    <div>{this.props.review.title}</div>
                </div> 
                <div className="username-date-cont">
                <div>{year} {months[month]} {day}</div>
                <div className="review-user">{this.props.review.user}</div>
                </div>
                <div className="body-cont">
                    <div>{this.props.review.body}</div>
                </div>
                {this.props.currentUserId === this.props.review.userId ? <button>Delete</button> : null }

            </div>
        )
    }   
}

export default ReviewIndex