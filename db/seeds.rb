# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Tour.destroy_all

u1 = User.create({:first_name=>"Keanu", :last_name=>"Reeves", :username=>"neo2020", 
    :email=>"theone@thefuture.machines", :password=>"hunter12"})


t1 = Tour.create!(name: "Alcatraz and One Day Bike Rental", 
    overview: "Get two classic San Francisco experiences—a bike ride starting at Fisherman’s Wharf and a visit to the notorious prison island of Alcatraz—in one combined tour package. Take a scenic ferry ride to Alcatraz Island, where you can explore at your own pace on a self-guided audio tour. Use the flexible 1-day bike rental on the day of your choosing and enjoy a safe ride with a helmet included.",
    included: ["Round-trip ferry to and from Pier 33 to Alcatraz Island", "Award-Winning Cellhouse Audio Tour at Alcatraz Island", "Bike locks/helmets/instructions/directions", "Admission ticket to Alcatraz ($39.90 USD value)"], 
    not_included: ["Transportation from hotels to any activity", "Bike Rental Deposit is not included", "Motorized bikes not included", "Sausalito ferry is not included", "Infant bikes/carriers/tow behinds", "Infants under 5 complimentary at Alcatraz", "No bike rentals for free infants under 5", "No parking assistance or options"],
    additional_info: ["Confirmation will be received within 48 hours of booking, subject to availability", "Wheelchair accessible", "Your final Alcatraz tour will be sent to Viator Email on file 1-3 days in advance with your time of departure and bike voucher. We assign the time!", "No refunds; exchanges; or cancellations on any Alcatraz related item or bike rentals", "Stroller accessible", "Near public transportation", "Infants must sit on laps", "Transportation is wheelchair accessible", "First come first served on bike rentals. There may be a wait until bikes are available."], 
    spaces_available: 15, 
    location_id: 1, 
    time_estimate: '3 hours (Approx.)', 
    language: 'German, Russian, Korean, English, Italian, French, Spanish', 
    price: 89)

t2 = Tour.create!(name: "Muir Woods and Sausalito Half Day Tour", 
    overview: "Wander through an ancient coastal redwood forest and explore the artistic bayside enclave of Sausalito on this half-day tour from San Francisco. Travel across the Golden Gate Bridge to visit Muir Woods, home to some of the oldest and tallest trees on Earth. Then, soak up stellar views of the San Francisco skyline and browse art galleries along the Sausalito waterfront. At the end of your tour choose between getting dropped off at Union Square in San Francisco or taking the Sausalito ferry back to San Francisco.",
    included: ["4-hour tour of Muir Woods and Sausalito", "Transport by luxury air-conditioned coach with Wi-Fi and restroom", "Return Ferry to San Francisco from Sausalito (if option is selected)", "Admission ticket to Muir Woods National Monument", "4h Bike Rental (if option selected)"], 
    not_included: ["Gratuities", "Food and drinks", "Hotel pickup and drop-off"],
    additional_info: ["Confirmation will be received at time of booking",  "Wheelchair accessible", "Near public transportation", "Please note that Departure times can vary from day to day depending on our parking assignments.", "Infants must sit on laps","Most travelers can participate", "This tour/activity will have a maximum of 40 travelers"], 
    spaces_available: 40, 
    location_id: 1, 
    time_estimate: '4 hours (Approx.)', 
    language: 'English',
    price: 29)

    # file = open(url)

    t1.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/alcatraz/alcatraz.jpg"), filename: "alcatraz.jpg")
    t1.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/alcatraz/alcatraz2.jpg"), filename: "alcatraz2.jpg")
    t1.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/alcatraz/alcatraz3.jpg"), filename: "alcatraz3.jpg")
    t1.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/alcatraz/alcatraz4.jpg"), filename: "alcatraz4.jpg")
    t1.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/alcatraz/alcatraz5.jpg"), filename: "alcatraz5.jpg")

    
    t2.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/muir/muir.jpg"), filename: "muir.jpg")
    t2.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/muir/muirwoods.jpg"), filename: "muirwoods.jpg")
    t2.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/muir/muirman.jpg"), filename: "muirman.jpg")
    t2.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/muir/muirwoods2.jpg"), filename: "muirwoods2.jpg")
    t2.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/muir/treerings2.jpg"), filename: "treerings2.jpg")



