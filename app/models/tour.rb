class Tour < ApplicationRecord

    validates :name, :overview, :included, :additional_info, :spaces_available, :time_estimate, :language, presence: true

    validates :name, uniqueness: true
end
