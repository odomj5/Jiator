@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :title, :rating, :tour_id, :user_id
    end
end