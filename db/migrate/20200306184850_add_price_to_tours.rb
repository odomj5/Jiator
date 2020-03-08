class AddPriceToTours < ActiveRecord::Migration[5.2]
  def change
    add_column :tours, :price, :integer, null: false  
  end
end
