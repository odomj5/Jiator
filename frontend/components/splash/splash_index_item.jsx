import React from 'react'

class SplashIndexItem extends React.Component {

    render () {
        return(
            <div className="splash-idx-item-cont">
                <img src={this.props.tour.photoUrls[1]}/>
                <h5> <i className="fas fa-globe"></i> San Francisco, United States</h5>
                <h2>{this.props.tour.name}</h2>
                <h3>Review</h3>
                <h4>from: <span>${this.props.tour.price}</span></h4>
            </div>
        )
    }
}


export default SplashIndexItem;