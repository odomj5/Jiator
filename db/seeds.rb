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
    price: 73)

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

t3 = Tour.create!(name: "San Francisco Urban Hike: Coit Tower, Lombard Street and North Beach",
    overview: "San Francisco is undoubtedly a hilly place, and this challenging 5-mile walking tour doesn’t shy away from the steepness. Instead, it takes you off the beaten path and onto some of the city’s stairways for an incredible exploration of several neighborhoods and downtown attractions. While meandering through SF’s Russian Hill, Telegraph Hill and North Beach neighborhoods, you’ll come upon some hidden gems, jaw-dropping views, and world-famous sites. Climb to Coit Tower via the Filbert Street Steps; ascend Lombard Street, often referred to as the crookedest street in the world; and discover a tiny park overlooking St Peter and Paul Church, where Marilyn Monroe and Joe DiMaggio took their wedding pics after tying the knot at San Francisco City Hall.",
    included: ["Professional guide", "Narrated city hiking tou"], 
    not_included: ["Gratuities", "Food and drinks", "Coit Tower elevator"],
    additional_info: ["Confirmation will be received at time of booking",  "Not wheelchair accessible", "Due to the distance and intensity of the hike, this tour is not recommended for children 12 years and younger", "Tour runs rain or shine. If it is raining and you would prefer not to attend, you may reschedule or request a refund", "Comfortable shoes or hiking boots and dressing in layers is recommended", "Bringing water is recommended", "Minimum numbers apply. There is a possibility of cancellation after confirmation if there are not enough participants to meet requirements. In the event of this occurring, you will be offered an alternative or full refund","Minimum numbers apply. There is a possibility of cancellation after confirmation if there are not enough participants to meet requirements. In the event of this occurring, you will be offered an alternative or full refund", "This tour/activity will have a maximum of 20 travelers"], 
    spaces_available: 20, 
    location_id: 1, 
    time_estimate: '3 hours (Approx.)', 
    language: 'English',
    price: 58)

    t3.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/coit/coit1.jpg"), filename: "coit1.jpg")
    t3.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/coit/coit2.jpeg"), filename: "coit2.jpeg")
    t3.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/coit/coit3.jpg"), filename: "coit3.jpg")
    t3.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/coit/coit4.jpg"), filename: "coit4.jpg")
    t3.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/coit/coit5.jpg"), filename: "coit5.jpg")

t4 = Tour.create!(name: "San Francisco Bay Sunset Catamaran Cruise",
    overview: "Sail across San Francisco Bay at twilight to admire the city skyline as it begins to light up for the night. With an experienced captain at the helm, you’ll glide past Alcatraz Island and cruise underneath the Golden Gate Bridge. Light hors d’oeuvres and two drinks are included.",
    included: ["1.5-hour sunset cruise", "Light hors d'oeuvres", "Two complimentary drinks"], 
    not_included: ["Gratuities", "Hotel pickup and drop-off"],
    additional_info: ["Confirmation will be received at time of booking",  "No outside beverages may be brought on board", "Please bring a jacket and wear soft-soled shoes", "During the months of March, April and November, the weather in San Francisco can be unpredictable. Please ensure that you provide the name of your hotel and/or mobile number so that you may be contacted in case of cancellation or rescheduling", "Audio guides are available in English, Mandarin, French, German, Italian, Korean, Portuguese and Spanish. Please bring headphones if you plan on using the audio guide.", "This tour/activity will have a maximum of 66 travelers"], 
    spaces_available: 66, 
    location_id: 1, 
    time_estimate: '1.5 hours (Approx.)', 
    language: 'English, Mandarin, French, German, Italian, Korean, Portuguese, Spanish',
    price: 60)

    t4.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/sail/sail1.jpg"), filename: "sail1.jpg")
    t4.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/sail/sail2.jpg"), filename: "sail2.jpg")
    t4.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/sail/sail3.JPG"), filename: "sail3.JPG")
    t4.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/sail/sail4.jpg"), filename: "sail4.jpg")
    t4.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/sail/sail5.jpg"), filename: "sail5.jpg")

t5 = Tour.create!(name: "Golden Gate Park Segway Tour",
    overview: "Explore San Francisco’s beautiful Golden Gate Park on this 2.5-hour Segway tour. Led by a local guide, you’ll pass top attractions like the Japanese Tea Gardens, the de Young Museum and the California Academy of Sciences. All equipment is included, as well as a safety training. Cover even more ground on a Segway as you soak up Golden Gate Park's rich history and hidden gems from your guide.",
    included: ["2.5-hour Segway training and tour", "2.5-hour Segway training and tour"], 
    not_included: ["Gratuities", "Food and drinks"],
    additional_info: ["Confirmation will be received at time of booking, unless booked within 2 days of travel. In this case confirmation will be received within 48 hours, subject to availability",  "SEGWAY RIDER REQUIREMENTS:", "All guests must be age 12 or older.", "All guests must weigh between 100-250 lbs or 45-113 kilos.", "Riders under 18 must be accompanied by a parent or guardian on the tour.", "No pregnant guests are allowed due to safety reasons.", "This activity is not recommended for some guests that are: ages 70 years and older, have had recent surgeries or have motor skill/control issues.", "Each customer must sign a Liability Waiver.", "Helmets and safety vests are provided and are required.", "All participants must be able to easily and quickly step on and off the Segway without assistance", "All participants must be able to easily and quickly step on and off the Segway without assistance", "Not wheelchair accessible", "Near public transportation", "Most travelers can participate", "This tour/activity will have a maximum of 8 travelers"], 
    spaces_available: 8, 
    location_id: 1, 
    time_estimate: '2.5 hours (Approx.)', 
    language: 'English',
    price: 60)

    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg1.jpg"), filename: "gg1.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg2.jpg"), filename: "gg2.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg3.jpg"), filename: "gg3.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg4.jpg"), filename: "gg4.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg5.jpg"), filename: "gg5.jpg")


