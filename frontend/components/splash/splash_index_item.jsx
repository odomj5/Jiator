import React from 'react';
import AverageRatingContainer from "../reviews/average_rating_container";


class SplashIndexItem extends React.Component {


    selectTour(id) {
        this.props.history.push(`/api/tours/${id}`)
    }

    render () {
        return(
            <div className="splash-idx-item-cont"
                onClick={() => this.selectTour(this.props.tour.id)}
                >
                <div className="img-cont">
                    <img src={this.props.tour.photoUrls[1]}/>
                </div>
                <h5> <i className="fas fa-globe"></i> San Francisco, United States</h5>
                <h2>{this.props.tour.name}</h2>
                <AverageRatingContainer
                    tourId={this.props.tour.id}
                    reviews={this.props.reviews}
                />
                <h4>from: <span>${this.props.tour.price}</span></h4>
            </div>
        )
    }
}


export default SplashIndexItem;