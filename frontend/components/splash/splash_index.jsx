import React from 'react';
import SplashIndexItem from "./splash_index_item";

class SplashIndex extends React.Component {
    componentDidMount() {
        this.props.requestTours();
    }


    render() {
        return(
            <div className="splash-idx-div">
                <div className="splash-idx-cont">
                    {this.props.tours.map(tour =>
                        <SplashIndexItem tour={tour} key={tour.id}
                            history={this.props.history}
                            location={this.props.location}
                            match={this.props.match}


                        />)}
                </div>
            </div>
        )
    }

}

export default SplashIndex;