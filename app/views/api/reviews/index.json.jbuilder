@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :title, :body, :rating, :tour_id, :user_id, :updated_at
        json.user review.user.username
    end
end