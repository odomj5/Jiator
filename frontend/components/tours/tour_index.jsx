import React from 'react'
import TourIndexItem from './tour_index_item'

class TourIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours()
    }

    render() {
        return(
            <div>
                <img src={window.SFindexURL} className="t-index-img"/>
                <ul>
                    {this.props.tours.map(tour => 
                    <TourIndexItem tour={tour} key={tour.id} /> )}
                </ul>
            </div>
        )
    }
}

export default TourIndex