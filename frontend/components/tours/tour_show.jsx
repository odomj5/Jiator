import React from 'react'


class TourShow extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state = this.props.tour
    //     debugger
    // }
    
    componentDidMount() {
        this.props.requestTour(this.props.match.params.tourId)
    }

    render() {
        if (this.props.tour === undefined) return null
     
        const included = this.props.tour.included
        // console.log(included instanceof Array)
        // debugger
        return(
            <div className="show-div">
                <h1 className="tour-name">
                    {this.props.tour.name}
                </h1>
                <div className='booking-outer-div'>
                    <img className="default-img" src={this.props.tour.photoUrl}/>
                    <div className="booking-div-cont">

                        <div className="booking-div">

                            <div className="booked-div"><i class="fas fa-clipboard-check"></i>Booked by {this.props.tour.spacesAvailable * 13} travelors</div>
                            <div className="booked-avail-div">
                                <div>Only {this.props.tour.spacesAvailable} spaces available</div>
                                <div>From ${this.props.tour.price}</div>
                                <div>Lowest Price Guarantee</div>
                            </div>
                            <div className="booking-calendar">
                                <div>Date</div>
                                <div>Number of travelors</div>
                            </div>
                            <div className="reservation-dets">
                                <h2>Reserve Now and Pay Later</h2>
                                <h3>Secure your spot while staying flexible</h3>
                                <h2>Free Cancellation</h2>
                                <h3>Up to 24 hours in advance</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-div">
                    <div className='ttl-bar'>
                        <div className='ttl-bar-time'><i class="far fa-clock"></i> {this.props.tour.timeEstimate}</div>
                        <div className='ttl-bar-ticket'> <i class="fas fa-envelope-open-text"></i> Mobile ticket</div>
                        <div className='ttl-bar-lang'> <i class="far fa-comment-dots"></i> Offered in: {this.props.tour.language}</div>
                    </div>
                    <div className="overview-div">
                        <div className="overview-title">Overview</div>
                        <div>
                            <p className="overview-par">{this.props.tour.overview}</p>
                        </div>
                    </div>
                    <div className="included-div">
                        <div className="included-title">What's Included</div>
                        <div className='included-yes'>{included}</div>
                        
                        {/* <ul className="included-yes">
                            {included.map((feature, idx) => (
                                <li key="idx">feature</li>))}
                            
                        </ul> */}
                        <div className='included-no'>{this.props.tour.notIncluded}</div>
                    </div>
                </div>
                <div className="additional-div">
                    <div className="additional-title">Additional Info</div>
                    <div className="additional-info">{this.props.tour.additionalInfo}</div>
                </div>
            </div>
        )
        
    }
}

export default TourShow