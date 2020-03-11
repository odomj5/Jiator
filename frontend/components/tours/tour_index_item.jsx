import React from 'react'

class TourIndexItem extends React.Component {
    render() {
        // debugger
        let ovrSnip = this.props.tour.overview.split(" ").slice(0, 55).join(" ")

        return(
            <div className="index-item-div">
                <img src={this.props.tour.photoUrls[0]} />
                <div className="index-item-details">
                    <div className='idx-tour-n'>{this.props.tour.name}</div>
                    <div className='idx-tour-o'>{ovrSnip}</div>
                    <div className="idx-more">more...</div>
                    <div className='idx-tour-l'>{this.props.tour.language}</div>
                    
                </div>
                <div className='index-item-booking'>
                    <div className='idx-tour-p'>from <span className="price-span">${this.props.tour.price}</span> </div>
                    <div>{this.props.tour.spacesAvailable}</div>
                    <div className='idx-tour-t'>{this.props.tour.timeEstimate}</div>
                    <div className='idx-tour-c'>Free Cancellation</div>
                </div>
                <span></span>
            </div>
        )
    }
}

export default TourIndexItem