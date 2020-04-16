import React from "react"

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review.id)
    }


    currentStars() {
        
        return (
            <div className="curr-star-rating">
                {[...Array(5)].map((star, i) => {

                    return (
                            <i className="fas fa-star"
                                key={i}
                            id={i + 1 <= this.props.review.rating ? "checked" : "notChecked"}></i>
                    )
                })}
            </div>
        )
    }

    render() {
        let upDate = new Date(this.props.review.updatedAt)
        let year = upDate.getFullYear()
        let month = upDate.getMonth()
        let day = upDate.getDate()
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
                        {this.currentStars()}
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
                {this.props.currentUserId === this.props.review.userId ? <button onClick={this.handleDelete}>Delete</button> : null }

            </div>
        )
    }   
}

export default ReviewIndex