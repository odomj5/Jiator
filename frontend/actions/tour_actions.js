import * as TourAPIUtil from '../util/tour_api_util'


export const RECEIVE_TOURS = 'RECEIVE_TOURS'
export const RECEIVE_TOUR = 'RECEIVE_TOUR'

const receiveTours = tours => {
    return({
        type: RECEIVE_TOURS,
        tours: tours
    })
}

const receiveTour = payload => {
    return ({
        type: RECEIVE_TOUR,
        payload
    })
}

export const requestTours = () => dispatch => {
    return TourAPIUtil.fetchTours()
        .then((tours) =>{ 
            return dispatch(receiveTours(tours))
        })
}

export const requestTour = tourId => dispatch => {
    return TourAPIUtil.fetchTour(tourId)
        .then((tour) => dispatch(receiveTour(tour)))
}

