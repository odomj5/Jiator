class UpdateAdditionalInfoFromTours < ActiveRecord::Migration[5.2]
  def up
    remove_column :tours, :additional_info 
  end
  
  def down 
    add_column :tours, :additional_info, :text, array: true, default: []
  end
end
