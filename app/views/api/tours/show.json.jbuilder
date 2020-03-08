json.extract! @tour, :id, :name, :overview, :included, :not_included, 
      :additional_info, :spaces_available, :location_id, :time_estimate, 
      :language, :price
json.photoUrl url_for(@tour.photo)