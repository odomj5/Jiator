import React from 'react';
import SplashIndexItem from "./splash_index_item";

class SplashIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours();
        this.props.requestReviews("all");
    }

    tourIndex() {
        this.props.history.push('/api/tours')
    }


    render() {

        if (!this.props.reviews.length) return null

        return(
            <div className="splash-idx-div">
                <h2 onClick={() => this.tourIndex()}>Explore San Francisco</h2>
                <div className="splash-idx-cont">
                    {this.props.tours.map(tour =>
                        <SplashIndexItem tour={tour} key={tour.id}
                            history={this.props.history}
                            location={this.props.location}
                            match={this.props.match}
                            reviews={this.props.reviews.filter(review => review.tourId === tour.id)} 
                        />)}
                </div>
            </div>
        )
    }

}

export default SplashIndex;