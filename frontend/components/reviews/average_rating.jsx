import React from 'react';


class AverageRating extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ratingAverage: this.props.reviews.map(review => review.rating)
    //     }
    //     debugger
    // }


    tourAvg() {
        const allReviews = this.props.reviews
        const reviewCount = allReviews.length
        const ratings = this.props.reviews.map(review => review.rating)
        const ratingSum = ratings.sum()
        debugger
        const ratingAvg = (ratingSum / reviewCount)
        return reviewCount
    }


    render() {
        return(
            <div className="avg-rating-div">
                <h1>test</h1>
                {this.tourAvg()}
            </div>
        )
    } 
}

export default AverageRating