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

        if (this.props.reviews.length) {
            const allReviews = this.props.reviews
            const reviewCount = allReviews.length
            const ratings = this.props.reviews.map(review => review.rating)
            const ratingSum = Object.values(ratings).reduce((sum, key) => sum + key) 
            const ratingAvg = (ratingSum / reviewCount)
            return reviewCount
        } else {
            debugger
            return null
        } 

        

    }


    render() {
        // debugger

        // if (this.props.reviews.length) return null

        return(
            <div className="avg-rating-div">
                <div className="stars-outer">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <div className="stars-innner">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                {this.tourAvg()}
            </div>
        )
    } 
}

export default AverageRating