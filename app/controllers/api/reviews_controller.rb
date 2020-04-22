class Api::ReviewsController < ApplicationController
    
    # nested under tours 
    def index 
        debugger

        if params[:tour_id] == "all"
            debugger
            @reviews = Review.all
        else
            debugger
            @reviews = Review.where(tour_id: params[:tour_id])
        end
    end

    def show
        @review = Review.find(params[:id])
 
    end

    #nested under tours 
    def create 
        @review = Review.create(review_params)
        @review.user_id = current_user.id
        if @review.save 
            redirect_to api_review_url(@review.id) 
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
            render :destroy
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    private 

    def review_params 
        params.require(:review).permit(:title, :body, :rating, :user_id, :tour_id)
    end

end
