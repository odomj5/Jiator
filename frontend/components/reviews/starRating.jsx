import React, {useState} from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(null);

    return (
        <div className="star-rating-div">
            {[...Array(5)].map((star, i) => {
                const ratingVal = i + 1;

                return (
                   <label>
                       <input 
                        type="radio" 
                        name="rating" 
                        value={ratingVal} 
                        onClick={() => setRating(ratingVal)}/>
                        <i className="fas fa-star" 
                         id={ratingVal <= rating ? "checked" : "notChecked"}></i>
                   </label> 
                )




            })}
        </div>
    )
}

export default StarRating;