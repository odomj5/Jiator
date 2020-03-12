class Tour < ApplicationRecord

    validates :name, :overview, :included, :not_included, :additional_info, :spaces_available, :time_estimate, :language, :price, presence: true

    validates :name, uniqueness: true

    has_many_attached :photos 
    has_many :reviews


end
