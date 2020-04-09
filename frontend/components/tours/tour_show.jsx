import React from 'react'
import PhotoMain from "../photos/photo_main"
import Review from "../reviews/review"


class TourShow extends React.Component {
    
    componentDidMount() {
        this.props.requestTour(this.props.match.params.tourId)
        // this.props.requestReviews(this.props.match.params.tourId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.tourId !== prevProps.match.params.tourId) {
            this.props.requestTour(this.props.match.params.tourId)
        }
    }

    render() {

        if (this.props.tour === undefined) return null
     
        return(
            <div className="show-div">
                <h1 className="tour-name">
                    {this.props.tour.name}
                </h1>
                <div className='booking-outer-div'>
                    <PhotoMain photos={this.props.tour.photoUrls} className="photo-main"/>
                    <div className="booking-div-cont">

                        <div className="booking-div">

                            <div className="booked-div"><i className="fas fa-clipboard-check"></i>Booked by {this.props.tour.spacesAvailable * 13} travelors</div>
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
                        <div className='ttl-bar-time'><i className="far fa-clock"></i> {this.props.tour.timeEstimate}</div>
                        <div className='ttl-bar-ticket'> <i className="fas fa-envelope-open-text"></i> Mobile ticket</div>
                        <div className='ttl-bar-lang'> <i className="far fa-comment-dots"></i> Offered in: {this.props.tour.language}</div>
                    </div>
                    <div className="overview-div">
                        <div className="overview-title">Overview</div>
                        <div>
                            <p className="overview-par">{this.props.tour.overview}</p>
                        </div>
                    </div>
                    <div className="included-div">
                        <div className="included-title">What's Included  
                            <div className='included-container'>

                                <div className="included-yes">
                                    {this.props.tour.included.map((feature, idx) => (
                                        <div key={idx}><i className="fas fa-check"></i> {feature}</div>))}
                                </div>
                                <div className='included-no'>
                                    {this.props.tour.notIncluded.map((feature, idx) => (
                                        <div key={idx}><i className="fas fa-times"></i> {feature}</div>))}
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="additional-div">
                    <div className="additional-title">Additional Info</div>
                    <div className="additional-container">
                        <ul className="additional-info">{this.props.tour.additionalInfo.map((info, idx) => (
                            <li key={idx}><i className="fas fa-circle"></i> {info}</li>))}</ul>
                    </div>
                </div>
                <Review 
                    reviews={this.props.reviews}
                    tour={this.props.tour}
                    tourId={this.props.tour.id}
                    requestReviews={this.props.requestReviews}
                    openModal={this.props.openModal}

                />  
            </div>
        )
        
    }
}

export default TourShow