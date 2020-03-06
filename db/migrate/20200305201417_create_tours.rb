class CreateTours < ActiveRecord::Migration[5.2]
  def change
    create_table :tours do |t|
      t.string :name, null: false
      t.string :overview, null: false
      t.string :included, null: false
      t.string :additional_info, null: false
      t.string :spaces_available, null: false
      t.string :location_id
      t.string :time_estimate, null: false
      t.string :language, null: false

      t.timestamps
    end

    add_index :tours, :name, unique: true 

  end
end
