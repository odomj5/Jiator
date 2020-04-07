import React from 'react'

class SplashIndexItem extends React.Component {

    render () {
        // debugger
        return(
            <div className="splash-idx-item-cont">
                <img src={this.props.tour.photoUrls[0]}/>
                {this.props.tour.name}
            </div>
        )
    }
}


export default SplashIndexItem;