class Api::ReviewsController < ApplicationController
    
    # nested under tours 
    def index 
        @reviews = Review.where(tour_id: params[:tour_id])
    end

    def show 
        # debugger
        @review = Review.find(params[:id])
 
    end

    #nested under tours 
    def create 
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.tour_id = params[:tour_id]

        if @review.save 
            render show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        #double check find by, may need to throw in brackets
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render partial: 'api/reviews/review', object: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy 
        @review = Review.find(params[:id])
        if @review.destroy
            render partial: 'api/reviews/review', object: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    private 

    def review_params 
        params.require(:review).permit(:title, :body, :rating, :user_id, :tour_id)
    end

end
