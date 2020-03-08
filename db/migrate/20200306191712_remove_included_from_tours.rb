class RemoveIncludedFromTours < ActiveRecord::Migration[5.2]
  def up
    remove_column :tours, :included 
  end

  def down
    add_column :tours, :included, :text, array:true, default: []
  end

end
