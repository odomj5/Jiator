import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "", 
            body: "",
            rating: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = Object.assign({}, this.state)
        review.rating = parseInt(this.state.rating)
        this.props.createReview(this.props.tourId, review)
    }

    handleInput(inputType) {
        return e => this.setState({[inputType]: e.target.value})
    }

    render() {
        return(
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
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


export default ReviewForm; 