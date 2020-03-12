

export const fetchReviews = tourId => {
    return $.ajax({
        url: `/api/tours/${tourId}/reviews`
    })
}

export const fetchReview = reviewId => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`
    })
}

export const createReview = (tourId, review) => {
    return $.ajax({
        url: `/api/tours/${tourId}/reviews`,
        method: "POST",
        data: {review: review,
               tourId: tourId}
    })
}

export const updateReview = review => {
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: "PATCH",
        data: {review}
    })
}

export const deleteReview = reviewId => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: "DELETE"
    })
}