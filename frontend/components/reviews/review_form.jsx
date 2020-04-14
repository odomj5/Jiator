import React from "react";
import { withRouter } from 'react-router-dom';
import StarRating from "./starRating";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "", 
            body: "",
            rating: 5
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = Object.assign({}, this.state)
        review.rating = parseInt(this.state.rating)
        review.tour_id = this.props.tourId 
        this.props.createReview(this.props.tourId, review)
        this.props.closeModal()
        
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

    render() {
        return(
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="review-errors">
                        {this.renderErrors()}
                    </div>
                    <StarRating />
                    <label>Title:
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />
                    </label>
                    <label>Body:
                        <input
                            type="text"
                            value={this.state.body}
                            onChange={this.handleInput("body")}
                        />
                    </label>
                    <label>Rating:
                        <select 
                            value={this.state.rating}
                            onChange={this.handleInput("rating")}
                            >
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </label>
                    <button >Submit Review</button>
                </form>
            </div>
        )
    }
}


export default withRouter(ReviewForm); 