import React from 'react';
import SplashIndexItem from "./splash_index_item";

class SplashIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours();
    }

    tourIndex() {
        this.props.history.push('/api/tours')
    }


    render() {
        return(
            <div className="splash-idx-div">
                <h2 onClick={() => this.tourIndex()}>Explore San Francisco</h2>
                <div className="splash-idx-cont">
                    {this.props.tours.map(tour =>
                        <SplashIndexItem tour={tour} key={tour.id}
                            


                        />)}
                </div>
            </div>
        )
    }

}

export default SplashIndex;