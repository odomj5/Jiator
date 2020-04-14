import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "", 
            body: "",
            rating: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = Object.assign({}, this.state)
        review.tour_id = this.props.tourId 
        this.props.createReview(this.props.tourId, review)

        if (this.props.errors.length) {
            debugger
            this.props.closeModal() 
        }
    }

    handleInput(inputType) {
        return e => this.setState({[inputType]: e.target.value})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    StarRating() {

        const updateRating = (ratingVal) => {
            this.setState({rating: ratingVal})

        }

        return (
            <div className="star-rating-div">
                {[...Array(5)].map((star, i) => {
                    const ratingVal = i + 1;

                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingVal}
                                onClick={() => updateRating(ratingVal)} />
                            <i className="fas fa-star"
                                id={ratingVal <= (this.state.rating) ? "checked" : "notChecked"}
                                onMouseEnter={() => updateRating(ratingVal)}
                                
                                />
                        </label>
                    )
                })}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.clearReviewErrors();
    }
     
    render() {
        return(
            <div className="review-form-cont">
                    <div className="review-errors">
                        {this.renderErrors()}
                    </div>
                <form 
                  className="review-form"
                  onSubmit={this.handleSubmit}>
                    <div className="rating-div">
                        <label>Rating:
                        </label>
                        {this.StarRating()}
                    </div> 
                    <div>
                        <label>Title:</label>
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />    
                    </div> 
                    <div>
                    <label>Body:</label>
                        <textarea
                            type="text"
                            value={this.state.body}
                            onChange={this.handleInput("body")}
                        />
                    </div>
                    
                    <button >Submit Review</button>
                </form>
            </div>
        )
    }
}


export default ReviewForm; 