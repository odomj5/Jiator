import React from 'react';


class AverageRating extends React.Component {

    reviewCount() {
        if (this.props.reviews.length) {
            return this.props.reviews.length
        }
    }

    starFillPercentage() {

        // if (this.props.reviews.length) {
            const allReviews = this.props.reviews
            const reviewCount = allReviews.length
            const ratings = this.props.reviews.map(review => review.rating)
            const ratingSum = Object.values(ratings).reduce((sum, key) => sum + key) 
            const ratingAvg = (ratingSum / reviewCount)
            const starRounded = Math.round((ratingAvg/5) * 100)
            const starPercentageRounded = Math.round(starRounded / 10) * 10
            return starPercentageRounded
        // } else {
        //     return null
        // } 
    }

    render() {

        if (!this.props.reviews.length) return null


        return(
            <div className="avg-rating-div">
                <div className="stars-outer">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                    <div className="stars-inner" id="stars-inner"
                        style={{ width: `${this.starFillPercentage()}%`}}
                    >
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
               {/* ({this.tourAvg()}) */}
               <div className='review-count'>
               ({this.reviewCount()})
               </div>
                
            </div>
        )
    } 
}

export default AverageRating