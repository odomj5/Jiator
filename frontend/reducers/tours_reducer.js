import {
    RECEIVE_TOURS,
    RECEIVE_TOUR
} from '../actions/tour_actions'


const ToursReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_TOURS:
            return action.tours 
        case RECEIVE_TOUR:
            // debugger
            // return action.tour.id = action.tour 
            return Object.assign(newState, action.payload.tours) 
    
        default:
    }       return state 
}

export default ToursReducer