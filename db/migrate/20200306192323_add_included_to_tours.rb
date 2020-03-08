class AddIncludedToTours < ActiveRecord::Migration[5.2]
  def change
    add_column :tours, :included, :text, array:true, default: []
    add_column :tours, :not_included, :text, array:true, default: []

  end
end
