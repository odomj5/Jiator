import React from 'react';
import PhotoMain from "../photos/photo_main";
import ReviewContainer from "../reviews/review_container";
import AverageRating from "../reviews/average_rating";


class TourShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "2020-06-02",
            travelors: "1",
            flag: false
        };

        this.handleBook = this.handleBook.bind(this)
        
    }

    handleInput(inputType) {
        return e => this.setState({ [inputType]: e.target.value })
    }

    handleBook() {
        this.setState({ flag: !this.state.flag })
        
    }

    includedToggle() {
        const incYes = document.getElementById("yes-included").className
        const newYes = incYes === "included-yes" ? "included-yes-show" : "included-yes"
        document.getElementById("yes-included").className = newYes
        const incNo = document.getElementById("no-included").className
        const newNo = incNo === "included-no" ? "included-no-show" : "included-no"
        document.getElementById("no-included").className = newNo
        const oldArrow = document.getElementById("included-arrow").className
        const newArrow = oldArrow === "fas fa-angle-down" ? "fas fa-angle-up" : "fas fa-angle-down"
        document.getElementById("included-arrow").className = newArrow
    }

    additionalToggle() {
        const addContainer = document.getElementById("additional-container").className
        const newAddContainer = addContainer === "additional-container" ? "additional-container-show" : "additional-container"
        document.getElementById("additional-container").className =  newAddContainer
        const oldArrow = document.getElementById("additional-arrow").className
        const newArrow = oldArrow === "fas fa-angle-down" ? "fas fa-angle-up" : "fas fa-angle-down"
        document.getElementById("additional-arrow").className = newArrow
    }

    
    componentDidMount() {
        this.props.requestTour(this.props.match.params.tourId)
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.tourId !== prevProps.match.params.tourId) {
            this.props.requestTour(this.props.match.params.tourId)
        }

        if (this.props.reviews.length > prevProps.reviews.length) {
            this.props.closeModal()
        }
    }


    render() {

        if (this.props.tour === undefined) return null
     
        return(
            <div className="show-div">
                <h1 className="tour-name">
                    {this.props.tour.name}
                </h1>
                <AverageRating 
                reviews={this.props.reviews}
                />
                <div className='booking-outer-div'>
                    <PhotoMain photos={this.props.tour.photoUrls} className="photo-main"/>
                    <div className="booking-div-cont">

                        <div className="booking-div">
                            <div className="booked-avail-div">
                                
                                <div><span>from</span> ${this.props.tour.price}</div>
                                <div className="l-p-g">Lowest Price Guarantee</div>
                            </div>
                            <div className="booking-calendar">
                                <h3>Select Date and Travelers</h3>
                                <div className="date-cont">
                                    {this.state.flag ? null :
                                <i className="far fa-calendar-alt"></i>}
                                    {this.state.flag ? null : 
                                <input type="date" 
                                    value={this.state.date}
                                    onChange={this.handleInput("date")}/>}
                                </div>
                                <div className="travelor-cont">
                                    
                                    {this.state.flag ? null : 
                                    <i className="fas fa-user-friends"></i>}
                                    
                                    {this.state.flag ? null : 
                                    <select name="Number of Travelors"
                                        onChange={this.handleInput("travelors")}
                                        value={this.state.travelors}  
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option> 
                                    </select>
                                    }
                                </div>
                                <button onClick={this.handleBook}>{this.state.flag ?" Modify Reservation" : "Book Now!"}</button>
                                {this.state.flag ? <div className="booked-res">Your reservation for {this.state.travelors} is set for {this.state.date}! </div> : null}
                               
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
                    <div className="included-div"
                        onClick={this.includedToggle}>
                        <div className="included-title">What's Included  
                            <i className="fas fa-angle-down" id="included-arrow"></i>
                            <div className='included-container'>

                                <div className="included-yes"
                                    id="yes-included">
                                    {this.props.tour.included.map((feature, idx) => (
                                        <div key={idx}><i className="fas fa-check"></i> {feature}</div>))}
                                </div>
                                <div className='included-no'
                                    id="no-included">
                                    {this.props.tour.notIncluded.map((feature, idx) => (
                                        <div key={idx}><i className="fas fa-times"></i> {feature}</div>))}
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="additional-div"
                    
                    onClick={this.additionalToggle}>
                    <div className="additional-title">Additional Info
                        <i className="fas fa-angle-down" id="additional-arrow"></i>
                    </div>
                    <div className="additional-container"
                        id="additional-container">
                        <ul className="additional-info">{this.props.tour.additionalInfo.map((info, idx) => (
                            <li key={idx}><i className="fas fa-circle"></i> {info}</li>))}</ul>
                    </div>
                </div>
                <ReviewContainer 
                    reviews={this.props.reviews}
                    tour={this.props.tour}
                    tourId={this.props.tour.id}
                    requestReviews={this.props.requestReviews}
                    openModal={this.props.openModal}
                    userId={this.props.userId}

                />  
            </div>
        )
        
    }
}

export default TourShow