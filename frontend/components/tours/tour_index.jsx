import React from 'react'
import TourIndexItem from './tour_index_item'
import TourIndexItemContainer from './tour_index_item_container';

class TourIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours()
        this.props.requestReviews("all")
    }
 
    render() {
        
        if (!this.props.reviews.length) return null

        return(
            <div className="index-div">
                <img src="https://jiator-seeds.s3-us-west-1.amazonaws.com/index/SFindex.jpeg"
                className="t-index-img"/>
                <div className="tour-index-item-container">
                    {this.props.tours.map(tour => 
                    <TourIndexItemContainer tour={tour} key={tour.id}
                        reviews={this.props.reviews.filter(review => review.tourId === tour.id)}
                    /> )}
                </div>
            </div>
        )
    }
}

export default TourIndex