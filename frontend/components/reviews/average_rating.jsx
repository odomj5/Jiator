import React from 'react';


class AverageRating extends React.Component {

    tourAvg() {
        const allReviews = this.props.reviews
        const reviewCount = allReviews.length
        let reviewSum = 0
        allReviews.map((review, idx) => {
            let rating = review.rating
            reviewSum += rating
            debugger
        })
        debugger
        const ratingAvg = (reviewSum / reviewCount)
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