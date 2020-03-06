@tours.each do |tour| 
    json.set! tour.id do
        json.extract! tour, :id, :name, :overview, :included, :additional_info, 
            :spaces_available, :location_id, :time_estimate, :language
    end
end