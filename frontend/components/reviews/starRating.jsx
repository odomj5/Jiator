import React, {useState} from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(null);

    return (
        <div>
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
                         color={ratingVal <= rating ? "#ffc107" : "#e4e5e9"}></i>
                   </label> 
                )




            })}
        </div>
    )
}

export default StarRating;