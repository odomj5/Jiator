import React from 'react'
import TourIndexItem from './tour_index_item'

class TourIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours()
    }

    getReviews() {

    }

    render() {
        // debugger
        return(
            <div className="index-div">
                <img src="https://jiator-seeds.s3-us-west-1.amazonaws.com/index/SFindex.jpeg"
                className="t-index-img"/>
                <div className="tour-index-item-container">
                    {this.props.tours.map(tour => 
                    <TourIndexItem tour={tour} key={tour.id}
                    
                    requestReviews={this.props.requestReviews}
                    history={this.props.history}
                    location={this.props.location}
                    match={this.props.match}

                    
                    /> )}
                </div>
            </div>
        )
    }
}

export default TourIndex