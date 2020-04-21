import React from 'react';


class AverageRating extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         reviewCount: this.props.reviews.length
    //     }
    //     // debugger
    // }

    reviewCount() {
        if (this.props.reviews.length) {
            return this.props.reviews.length
        }
    }

    tourAvg() {

        if (this.props.reviews.length) {
            const allReviews = this.props.reviews
            const reviewCount = allReviews.length
            const ratings = this.props.reviews.map(review => review.rating)
            const ratingSum = Object.values(ratings).reduce((sum, key) => sum + key) 
            const ratingAvg = (ratingSum / reviewCount)
            const starRounded = Math.round((ratingAvg/5) * 100)
            // debugger
            const starPercentageRounded = Math.round(starRounded / 10) * 10
            // const innerStars = document.getElementById("stars-inner")
            // innerStars.style.width = starPercentageRounded
            debugger
            return starPercentageRounded


        } else {
            return null
        } 

        

    }


    render() {


        return(
            <div className="avg-rating-div">
                <div className="stars-outer">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                    <div className="stars-inner" id="stars-inner"
                    style={{width: `${this.tourAvg()}%`}}
                    >
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
               {/* ({this.tourAvg()}) */}
               {this.reviewCount()}
            </div>
        )
    } 
}

export default AverageRating