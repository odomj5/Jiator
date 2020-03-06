# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tour.destroy_all

u1 = User.create({:first_name=>"Keanu", :last_name=>"Reeves", :username=>"neo2020", :email=>"theone@thefuture.machines", :password=>"hunter12"})


t1 = Tour.create({:name => "name1", :overview=>"overview1", :included=>"included1", :additional_info=>"additional_info1", :spaces_available=>"spaces_available1", :location_id=>"location_id1", :time_estimate=>'time_estimate1', :language=>'English'})

t2 = Tour.create({:name => "name2", :overview=>"overview2", :included=>"included2", :additional_info=>"additional_info2", :spaces_available=>"spaces_available2", :location_id=>"location_id2", :time_estimate=>'time_estimate2', :language=>'English'})