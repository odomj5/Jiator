class ChangeLocationIdFromTours < ActiveRecord::Migration[5.2]
  def up
    change_column :tours, :location_id, :integer, using: 'spaces_available::integer', null: false
  end

  def down
    change_column :tours, :location_id, :string
  end
end
