import React from 'react'
import TourIndexItem from './tour_index_item'

class TourIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours()
    }

    render() {
        return(
            <div className="index-div">
                <img src="https://jiator-seeds.s3-us-west-1.amazonaws.com/index/SFindex.jpeg"
                className="t-index-img"/>
                <ul>
                    {this.props.tours.map(tour => 
                    <TourIndexItem tour={tour} key={tour.id} /> )}
                </ul>
            </div>
        )
    }
}

export default TourIndex