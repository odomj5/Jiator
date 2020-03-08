import React from 'react'

class TourIndexItem extends React.Component {
    render() {
        return(
            <div className="index-item-div">
                
                <li>{this.props.tour.name}</li>
                <li>{this.props.tour.overview}</li>
                <li>{this.props.tour.included}</li>
                <li>{this.props.tour.notIncluded}</li>
                <li>{this.props.tour.additionalInfo}</li>
                <li>{this.props.tour.spaceAvailable}</li>
                <li>{this.props.tour.timeEstimate}</li>
                <li>{this.props.tour.language}</li>
            </div>
        )
    }
}

export default TourIndexItem