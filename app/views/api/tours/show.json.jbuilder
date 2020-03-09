json.tours do 
      json.set! @tour.id do
            json.extract! @tour, :id, :name, :overview, :included,        :not_included, :additional_info, :spaces_available, :location_id, :time_estimate, :language, :price
            json.photoUrls @tour.photos.map { |file| url_for(file) }
      end
end