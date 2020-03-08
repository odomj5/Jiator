class RemoveOverviewFromTours < ActiveRecord::Migration[5.2]
  def up
    change_column :tours, :overview, :text, null: false
  end

  def down
  change_column :tours, :overview, :string
  end
end
