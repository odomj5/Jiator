import React from 'react';
import SplashIndexContainer from "./splash_index_container"

class Splash extends React.Component {


    render() {
        return (
            <div className="splash-div">
                    <img src="https://jiator-seeds.s3-us-west-1.amazonaws.com/splash/GGbridge.jpg"/>
                    <div className="splash-book">
                        <h2>Discover amazing things to do everywhere you go</h2>  
                        <label>Select A City:
                            <select name="" id=""></select>
                        </label>
                        <label>Choose Date:
                            <input type="calendar"/>
                        </label>
                    </div>
                <div className="icon-bar">
                    <div className='icon-1'>
                        <i className="fas fa-ticket-alt"></i>
                        <div className='icon-1-text'>324,000+ Things to Do</div>
                    </div>
                    <div className='icon-2'>
                        <i className="far fa-star"></i>
                        <div className='icon-2-text'>Millions of Reviews</div>
                    </div>
                    <div className='icon-3'>
                        <i className="fas fa-tag"></i>
                        <div className='icon-3-text'>Lowest Price Guarantee</div>
                    </div>
                    <div className='icon-4'>
                        <i className="fas fa-mobile-alt"></i>
                        <div className='icon-4-text'>24/7 Golobal Support</div>
                    </div>
                    <div className='icon-5'>
                        <i className="fas fa-glasses"></i>
                        <div className='icon-5-text'>A Jonadvisor Company</div>
                    </div>
                </div>
                <SplashIndexContainer
                    history={this.props.history}
                    location={this.props.location}
                    match={this.props.match} 
                />
            </div>
        )
    }


}
export default Splash