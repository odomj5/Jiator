

export const fetchTours = () => {
    return $.ajax({
        url: '/api/tours'
    })
}

export const fetchTour = tourId => {
    return $.ajax({
        url: `/api/tours/${tourId}`
    })
}

