import React from 'react'

class SplashIndexItem extends React.Component {

    render () {
        // debugger
        return(
            <div className="splash-idx-item-cont">
                <img src={this.props.tour.photoUrls[1]}/>
                <h5> <i class="fas fa-globe"></i> San Francisco, United States</h5>
                <h2>{this.props.tour.name}</h2>
                <h3>Review</h3>
                <h4>from: ${this.props.tour.price}</h4>
            </div>
        )
    }
}


export default SplashIndexItem;