import React from 'react'
import AverageRatingContainer from "../reviews/average_rating_container"

class TourIndexItem extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     reviews: this.props.requestReviews(this.props.tour.id)
            
        // }
        // debugger
        this.selectTour = this.selectTour.bind(this)
    }

    selectTour(id) {
        this.props.history.push(`/api/tours/${id}`)
    }

    componentDidMount() {
        debugger
        this.props.requestReviews(this.props.tour.id)
    }

    //  componentDidUpdate(prevProps) {
    //      debugger
    //     // if (this.props.tour.id !== prevProps.tour.id) {
    //     //     debugger
    //     //     this.props.requestReviews(this.props.tour.id)
    //     // }
    //      if (this.props.reviews[0] !== this.props.tour.id) {
    //          debugger
    //          this.props.requestReviews(this.props.tour.id)
    //      }
    // }

    // getReviews() {
    //     debugger
    //     this.props.requestReviews(this.props.tour.id)
    // }


    render() {
        // debugger
        let ovrSnip = this.props.tour.overview.split(" ").slice(0, 55).join(" ")

       

        
        return(
            <div className="index-item-div" onClick={() => this.selectTour(this.props.tour.id)}>
                <div className="image-cont">
                    <img src={this.props.tour.photoUrls[0]} 
                    className="idx-tour-img"/>
                </div>
                <div className="index-item-details">
                    <div className='idx-tour-n'>{this.props.tour.name}</div>
                    {/* <TourIndexItemReviewsContainer
                    tourId={this.props.tour.id} /> */}
                    <AverageRatingContainer
                        tourId={this.props.tour.id}
                        // reviews={this.props.reviews} 
                    />
                    <div className='idx-tour-o'>{ovrSnip}</div>
                    <div className="idx-more">more...</div>
                    <div className='idx-tour-l'>Languages available: <span className="lan-span">{this.props.tour.language}</span></div>
                    
                </div>
                <div className='index-item-booking'>
                    <div className='idx-tour-p'>from <span className="price-span">${this.props.tour.price}</span> </div>
                    <div className="learn-more-div">Learn More</div>
                    <div className="idx-tour-spaces">{this.props.tour.spacesAvailable} spaces available!</div>
                    <div className='idx-tour-t'>{this.props.tour.timeEstimate}</div>
                    <div className='idx-tour-c'><i className="fas fa-check"></i> Free Cancellation</div>
                </div>
                
            </div>
        )
    }
}

export default TourIndexItem