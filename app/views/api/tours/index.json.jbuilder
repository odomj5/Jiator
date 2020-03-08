@tours.each do |tour| 
    json.set! tour.id do
        json.extract! tour, :id, :name, :overview, :included, :not_included, :additional_info, :spaces_available, :location_id, :time_estimate, 
        :language, :price
    end
end