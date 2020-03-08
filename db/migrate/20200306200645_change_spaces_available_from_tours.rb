class ChangeSpacesAvailableFromTours < ActiveRecord::Migration[5.2]
  def up
    change_column :tours, :spaces_available, :integer, using: 'spaces_available::integer', null: false
  end

  def down
    change_column :tours, :spaces_available, :string
  end
end
