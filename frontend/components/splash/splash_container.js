import {connect} from 'react-redux'
import Splash from './splash'

const mDTP = dispatch => ({

})

const mSTP = (state, ownProps) => {
    debugger
    return({
        history: ownProps.history,
        location: ownProps.location,
        mathch: ownProps.mathch
    })
}

export default connect(mSTP, mDTP)(Splash)