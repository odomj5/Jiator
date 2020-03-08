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
                <h1>
                    {this.props.tour.name}
                </h1>
                <img src={this.props.tour.photoUrl}/>
                <div className="booking-div">
                    <div>{this.props.tour.price}</div>
                    <div>{this.props.tour.spacesAvailable}</div>
                </div>
                <div className="details-div">
                    <div className='ttl-bar'>
                        <div className='ttl-bar-time'>{this.props.tour.timeEstimate}</div>
                        <div className='ttl-bar-ticket'>Mobile ticket</div>
                        <div className='ttl-bar-lang'>{this.props.tour.language}</div>
                    </div>
                    <div className="overview-div">
                        <div className="overview-title">Overview</div>
                        <div>
                            <p>{this.props.tour.overview}</p>
                        </div>
                    </div>
                    <div className="included-div">
                        <div className="included-title">What's Included</div>
                        <div>{included}</div>
                        {/* <ul className="included-yes">
                            {included.map((feature, idx) => (
                                <li key="idx">feature</li>))}
                            
                        </ul> */}
                        <div>{this.props.tour.notIncluded}</div>
                    </div>
                </div>
                <div className="additional-div">
                    <div>{this.props.tour.additionalInfo}</div>
                </div>
            </div>
        )
        
    }
}

export default TourShow