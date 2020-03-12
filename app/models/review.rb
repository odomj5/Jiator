class Review < ApplicationRecord
    validates :rating, :title, :body,  presence: true
    validates :user_id, uniqueness: { scope: :user_id }
    validates :rating, inclusion: 1..5

    belongs_to :user

    belongs_to :tour

end
