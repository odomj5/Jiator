class AddAdditionalInfoFromTours < ActiveRecord::Migration[5.2]
  def change
    add_column :tours, :additional_info, :text, array: true, default: []
  end
end
