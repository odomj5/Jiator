# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Review.destroy_all
User.destroy_all
Tour.destroy_all

u1 = User.create({:first_name=>"Keanu", :last_name=>"Reeves", :username=>"neo2020", 
    :email=>"theone@thefuture.machines", :password=>"hunter12"})

u2 = User.create!(first_name: "Ryan", last_name: "Leung", username: "sheep", email: "email1@sfaa.com", password:"hunter12" )

u3 = User.create!(first_name: "Oliver", last_name: "Yoon", username: "fiidoD1", email: "registeredemail2@sfaa.com", password:"hunter12" )

u4 = User.create!(first_name: "Victoria", last_name: "Campbell", username: "4yokes", email: "daemail3@sfaa.com", password:"hunter12" )

u5 = User.create!(first_name: "Ryan", last_name: "Mappa", username: "ArmShow01", email: "beastmode@sfaa.com", password:"hunter12" )

u6 = User.create!(first_name: "Elena", last_name: "Altamirano", username: "Elena07", email: "ea07@sfaa.com", password:"hunter12" )

u7 = User.create!(first_name: "Cecilia", last_name: "Altamirano", username: "Cecilia06", email: "ca06@sfaa.com", password:"hunter12" )

u8 = User.create!(first_name: "Adelia", last_name: "Altamirano", username: "Adelia04", email: "aa04@sfaa.com", password:"hunter12" )

u9 = User.create!(first_name: "Milo", last_name: "Altamirano", username: "Milo01", email: "Ma01@sfaa.com", password:"hunter12" )

u10 = User.create!(first_name: "Jaxon", last_name: "Tan", username: "lil'Jaxon", email: "Ma01@sfaa.com", password:"hunter12" )


t1 = Tour.create!(name: "Alcatraz and One Day Bike Rental", 
    overview: "Get two classic San Francisco experiences—a bike ride starting at Fisherman’s Wharf and a visit to the notorious prison island of Alcatraz—in one combined tour package. Take a scenic ferry ride to Alcatraz Island, where you can explore at your own pace on a self-guided audio tour. Use the flexible 1-day bike rental on the day of your choosing and enjoy a safe ride with a helmet included.",
    included: ["Round-trip ferry to and from Pier 33 to Alcatraz Island", "Award-Winning Cellhouse Audio Tour at Alcatraz Island", "Bike locks/helmets/instructions/directions", "Admission ticket to Alcatraz ($39.90 USD value)"], 
    not_included: ["Transportation from hotels to any activity", "Bike Rental Deposit is not included", "Motorized bikes not included", "Sausalito ferry is not included", "Infant bikes/carriers/tow behinds", "Infants under 5 complimentary at Alcatraz", "No bike rentals for free infants under 5", "No parking assistance or options"],
    additional_info: ["Confirmation will be received within 48 hours of booking, subject to availability", "Wheelchair accessible", "Your final Alcatraz tour will be sent to Jiator email on file 1-3 days in advance with your time of departure and bike voucher. We assign the time!", "No refunds, exchanges or cancellations on any Alcatraz related item or bike rentals", "Stroller accessible", "Near public transportation", "Infants must sit on laps", "Transportation is wheelchair accessible", "First come first served on bike rentals. There may be a wait until bikes are available."], 
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

t3 = Tour.create!(name: "Urban Hike: Coit Tower, Lombard Street and North Beach",
    overview: "San Francisco is undoubtedly a hilly place, and this challenging 5-mile walking tour doesn’t shy away from the steepness. Instead, it takes you off the beaten path and onto some of the city’s stairways for an incredible exploration of several neighborhoods and downtown attractions. While meandering through SF’s Russian Hill, Telegraph Hill and North Beach neighborhoods, you’ll come upon some hidden gems, jaw-dropping views, and world-famous sites. Climb to Coit Tower via the Filbert Street Steps; ascend Lombard Street, often referred to as the crookedest street in the world; and discover a tiny park overlooking St Peter and Paul Church, where Marilyn Monroe and Joe DiMaggio took their wedding pics after tying the knot at San Francisco City Hall.",
    included: ["Professional guide", "Narrated city hiking tou"], 
    not_included: ["Gratuities", "Food and drinks", "Coit Tower elevator"],
    additional_info: ["Confirmation will be received at time of booking",  "Not wheelchair accessible", "Due to the distance and intensity of the hike, this tour is not recommended for children 12 years and younger", "Tour runs rain or shine. If it is raining and you would prefer not to attend, you may reschedule or request a refund", "Comfortable shoes or hiking boots and dressing in layers is recommended", "Bringing water is recommended", "Minimum numbers apply. There is a possibility of cancellation after confirmation if there are not enough participants to meet requirements.", "This tour/activity will have a maximum of 20 travelers"], 
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

t4 = Tour.create!(name: "SF Bay Sunset Catamaran Cruise",
    overview: "Sail across San Francisco Bay at twilight to admire the city skyline as it begins to light up for the night. With an experienced captain at the helm, you’ll glide past Alcatraz Island and cruise underneath the Golden Gate Bridge. Light hors d’oeuvres and two drinks are included.",
    included: ["1.5-hour sunset cruise", "Light hors d'oeuvres", "Two complimentary drinks"], 
    not_included: ["Gratuities", "Hotel pickup and drop-off"],
    additional_info: ["Confirmation will be received at time of booking",  "No outside beverages may be brought on board", "Please bring a jacket and wear soft-soled shoes", "During the months of March, April and November, the weather in San Francisco can be unpredictable.", "Audio guides are available in English, Mandarin, French, German, Italian, Korean, Portuguese and Spanish. Please bring headphones if you plan on using the audio guide.", "This tour/activity will have a maximum of 66 travelers"], 
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
    included: ["2.5-hour Segway training and tour", "Helmet and safety vest - Jackets and gloves available for foggy days"], 
    not_included: ["Gratuities", "Food and drinks"],
    additional_info: ["Confirmation will be received at time of booking, unless booked within 2 days of travel. In this case confirmation will be received within 48 hours, subject to availability",  "SEGWAY RIDER REQUIREMENTS:", "All guests must be age 12 or older.", "All guests must weigh between 100-250 lbs or 45-113 kilos.", "Riders under 18 must be accompanied by a parent or guardian on the tour.", "No pregnant guests are allowed due to safety reasons.", "This activity is not recommended for some guests that are: ages 70 years and older, have had recent surgeries or have motor skill/control issues.", "Each customer must sign a Liability Waiver.", "Helmets and safety vests are provided and are required.", "All participants must be able to easily and quickly step on and off the Segway without assistance", "All participants must be able to easily and quickly step on and off the Segway without assistance", "Not wheelchair accessible", "Near public transportation", "Most travelers can participate", "This tour/activity will have a maximum of 8 travelers"], 
    spaces_available: 8, 
    location_id: 1, 
    time_estimate: '2.5 hours (Approx.)', 
    language: 'English',
    price: 80)

    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg1.jpg"), filename: "gg1.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg2.jpg"), filename: "gg2.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg3.jpg"), filename: "gg3.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg4.jpg"), filename: "gg4.jpg")
    t5.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/ggp/gg5.jpg"), filename: "gg5.jpg")


r1 = Review.create!(title: "First Review!!!", 
    body: "The tour lived up to the hype.",
    rating: 4,
    user_id: u10.id,
    tour_id: t1.id)

r2 = Review.create!(title: "Great, easy experience", 
    body: "Such a beautiful day to head to Alcatraz. It was an easy process all around. Easy boarding, everything was on time and the experience was wonderful. It’s a move at your own pace tour and we loved that.",
    rating: 5,
    user_id: u2.id,
    tour_id: t1.id)

r3 = Review.create!(title: "Alcatraz visit", 
    body: "I would recommend this visit. Was very compelling. The audio tour was great. Wear comfortable shoes. A lot of walking but worth it.",
    rating: 5,
    user_id: u3.id,
    tour_id: t1.id)

r4 = Review.create!(title: "The BEST", 
    body: "Not only the Viator employee on the phone but the direct employee, Jason, of the tour service were so accommodating and amazing. They made a last minute booking phone call a reality and it was SOOO worth it. Alcatraz is a must see. So much history and the audio tour is very cool. We used the bike rental to ride to and then over the Golden Gate Bridge, another must see and what a fun way to do it. Thanks Victor and Jason from Alcatraz tours. Top notch folks. This is a very affordable tour as well. $98 for both and took essentially 6 hours so not bad for a full day of entertainment!",
    rating: 5,
    user_id: u4.id,
    tour_id: t1.id)

r5 = Review.create!(title: "Brilliant", 
    body: "Excellent way to see some amazing views of the city with the bike ride and a great way to get on to Alcatraz if all the tickets are sold out for when you’re visiting. Would definitely recommend.",
    rating: 5,
    user_id: u5.id,
    tour_id: t1.id)

r6 = Review.create!(title: "Don’t Miss Experience", 
    body: "Highly recommend this tour - our guide was funny and super informative. Loved her storytelling ability to engage us while on the bus. Muir Woods, and the road to, was beautiful-and while I would have loved to explore longer, it was the right amount of time for this tour.",
    rating: 4,
    user_id: u5.id,
    tour_id: t2.id)

r7 = Review.create!(title: "Thouroughly Enjoyed",
    body: "Muir woods was an excellent trip. Absolutely gorgeous and peaceful to walk amongst these massive and spectacular creations of nature. I wish we had more time to sit and enjoy their beauty. The bus ride and our tour guide (Tiana) were excellent very informative and comical. She made us laugh but yet also provided great information and history about what we were seeing while driving through the city. We took the later tour which worked for us this trip but I would take the earlier tour if you want to spend more time in Sausalito and then catch the 2:55 (weekend schedule) Ferry back to San Francisco as it makes two stops before landing by pier 39. Kind of giving you a mini bay cruise.",
    rating: 4,
    user_id: u4.id,
    tour_id: t2.id)

r8 = Review.create!(title: "Beautiful Redwoods",
    body: "Tour guide Josh was great very informative beautiful ride along the way worth seeing only wish other people respected the time of others had to wait 25 minutes on the bus when we left because 1 person did not get back on time cut our 2nd stop of the trip short. still worth it.",
    rating: 5,
    user_id: u3.id,
    tour_id: t2.id)

r9 = Review.create!(title: "Perfect half day trip",
    body: "Great experience with a great guide. Mr. Chablis was a safe driver, funny and informative. Just the right amount of time at Muir Woods and Sausalito, I highly recommend this tour.",
    rating: 5,
    user_id: u2.id,
    tour_id: t2.id)

r10 = Review.create!(title: "Lovely day out",
    body: "Our driver was Dalilo. He was excellent - very informative. He made a quick photo stop at the Golden Gate Bridge which was appreciated. We drove on to Muir Woods and it was great to park right at the Visitor Centre where the walks begin. We had a full hour and a half to wander amongst the magnificent redwoods. He then took us on to Sausalito where I left to have fish and chips, check out the town and then catch the ferry back to Fisherman’s Wharf.",
    rating: 5,
    user_id: u10.id,
    tour_id: t2.id)

r11 = Review.create!(title: "Greer was outstanding! The tour was...",
    body: "Greer was outstanding! The tour was very informative and brought us to several outstanding scenic view points. The walk is definitely strenuous as stated in the write-up. Many hills and flights of stairs, but definitely worth the effort! Greer adjusted the pace to the group's comfort level.",
    rating: 5,
    user_id: u4.id,
    tour_id: t3.id)

r12 = Review.create!(title: "Really enjoyed seeing and hearing about...",
    body: "Really enjoyed seeing and hearing about hidden treasures of the city on this tour. The guide Greer was well informed, knowledgable, passionate and helpful I wouldn't consider myself to be fit, I found some of the steep hills difficult but I enjoyed the tour all the same; no pain, no gain.",
    rating: 5,
    user_id: u5.id,
    tour_id: t3.id)

r13 = Review.create!(title: "This tour was fantastic! We visited...",
    body: "This tour was fantastic! We visited some popular city attractions e.g., Coit Tower and Lombard Street, but many other lesser known neighborhood pocket parks with outstanding views of the city and bay. With all the hills in the city, it's much more than a walking tour -- certainly an exhilarating urban hike! Our guide -- Greer -- was personable and knowledgeable. We highly recommend this hike!",
    rating: 5,
    user_id: u3.id,
    tour_id: t3.id)

r14 = Review.create!(title: "What a wonderful way to see San...",
    body: "What a wonderful way to see San Francisco, it's a strenuous walk but Alex made sure there were plenty of breaks to take photos and catch our breath. The size of the group made it easy to accommodate everyone's tastes and interests. I would certainly do more walks around the city.",
    rating: 5,
    user_id: u10.id,
    tour_id: t3.id)

r15 = Review.create!(title: "I recently moved to San Francisco and...",
    body: "I recently moved to San Francisco and signed up for an Urban Hike to become better acquainted with my new hometown! On this hilly walk, I explored some of the city’s famous spots (like Coit Tower and Lombard Street), as well discover hidden gems (such as Jack Early Park and Macondrary Lane). Our tour guide, Alex, was really friendly and shared some engaging stories about the locations we visited. The hike isn’t too strenuous, you’ll definitely get a good calf workout. I’d suggest wearing comfortable walking shoes and bringing a bottle of water. Whether you’re a local or here on vacation, I highly recommend this tour!",
    rating: 5,
    user_id: u2.id,
    tour_id: t3.id)

r16 = Review.create!(title: "Awesome experience",
    body: "We had the best time with this cruise. The crew is super friendly and fun. They made sure we had a great experience, especially Ceasar. To top it off we got to see sunset and moon rise, double treat. It was gorgeous!!",
    rating: 5,
    user_id: u4.id,
    tour_id: t4.id)

r17 = Review.create!(title: "Boston crew",
    body: "Loved everything about this tour!! Operators were great.! Appetizers, drink variety fantastic! Views were amazing , perfect night for a sunset cruise!!Other guests were nice and fun .",
    rating: 5,
    user_id: u5.id,
    tour_id: t4.id)

r18 = Review.create!(title: "Enjoyable experience!",
    body: "It was great. Perfect way to spend my first evening EVER in San Francisco! The guides were amazing and I’d definitely go again in my next visit.",
    rating: 4,
    user_id: u10.id,
    tour_id: t4.id)

r19 = Review.create!(title: "Beautiful sunset!!!",
    body: "It was so beautiful!!! My favorite activity in San Francisco! Definitely would recommend!! Wonderful friendly people",
    rating: 5,
    user_id: u2.id,
    tour_id: t4.id)

r20 = Review.create!(title: "Sailing into the sunset",
    body: "Relaxed friendly crew; Plenty of space; generous snacks & drinks and warm jackets in the stunning San Francisco Bay. Not to be missed",
    rating: 3,
    user_id: u3.id,
    tour_id: t4.id)

r21 = Review.create!(title: "Segway tour of San Francisco",
    body: "Oh my gosh what a great tour. Good equipment and a fantastic tour layout. We took two tours. Brandon and Jeff are the best and most knowledgeable in the areas history.",
    rating: 4,
    user_id: u4.id,
    tour_id: t5.id)

r22 = Review.create!(title: "First time on a segway",
    body: "A brilliant experience that I would highly recommend. Kelly our instructor took us through all the safety training with great care to ensure that everyone was completely at ease on the Segway. We then went on the tour riding on all surfaces finishing off with some off road trail routes. Well done Kelly - great job from start to finish 😀",
    rating: 5,
    user_id: u3.id,
    tour_id: t5.id)

r23 = Review.create!(title: "Fun and informative!",
    body: "All 9 of us had a great time segwaying thru the park! Learned a lot about the history, plants and animals. SunDog was a great tour guide!",
    rating: 5,
    user_id: u10.id,
    tour_id: t5.id)

r24 = Review.create!(title: "A fantastic time!!",
    body: "We had a great time riding on the segways, seeing a ton of it, and learning about the park from our awesome guide Kelly!!",
    rating: 5,
    user_id: u2.id,
    tour_id: t5.id)

r25 = Review.create!(title: "Awesome tour!",
    body: "My family loved this Segway tour! Juannas was our tour guide and was extremely knowledgeable and made the tour super fun!",
    rating: 4,
    user_id: u5.id,
    tour_id: t5.id)

t6 = Tour.create!(name: "3-Day Yosemite Camping Adventure",
    overview: "On this 3-day Yosemite camping tour, visit Yosemite National Park with an experienced guide, spending two nights in a tent at a campsite. Enjoy the stunning natural sights of the park, such as Yosemite Falls and Half Dome, and go hiking amid the giant sequoia trees. With both guided portions and free time to explore the park on your own, this tour provides a convenient and balanced way to experience one of America’s favorite national parks. Previous camping experience is not required!",
    included: ["Camping equipment (except a sleeping bag)", "Camping fees", "All fees and taxes", "Transport by biodiesel van", "Professional guide"], 
    not_included: ["Gratuities", "Sleeping bag (available to rent for USD20)", "Hotel pickup and drop-off"],
    additional_info: ["Confirmation will be received within 48 hours of booking, subject to availability",  "Children 17 years and younger must be accompanied by an adult", "Important: Please note if you need a sleeping bag and any dietary requirements in the 'Special Requirements' field when booking", "Camping is easy, but cooperation is important. Don't worry if you've never camped before; many people haven't. You will be supplied with all the camping equipment necessary for a trip of this nature, using quality tents, camping and cooking equipment. Everybody is expected to participate in setting up and breaking down the camp, and the professional guides are available to attend to your needs to ensure a positive camping experience. We camp at the best campsites, with hot showers and modern facilities. Swimming is available nearby. During booking, please note if you will need a sleeping bag", "You will be provided with the food, but not the chefs. You guys are the cooks, waiters, dishwashers and, of course, the guests. On leaving the city, we stop at a supermarket and buy everything we need. The fare is a mixture of chicken, beef and vegetarian, all-you-can-eat and very tasty. Most people eat better with us than they have done previously on their travels. Please inform us of any dietary requirements/concerns at the time of booking", "On your journeys, you will need sneakers or hiking boots, shorts, T-shirts, swimwear, sun protection, a water bottle, flashlight and something warmer in case there is a change in weather"], 
    spaces_available: 13, 
    location_id: 1, 
    time_estimate: '3 days', 
    language: 'English',
    price: 521)

t6.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite1.jpg"), filename: "yosemite1.jpg")
t6.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite2.jpg"), filename: "yosemite2.jpg")
t6.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite3.jpg"), filename: "yosemite3.jpg")
t6.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite4.jpg"), filename: "yosemite4.jpg")
t6.photos.attach(io: open("https://jiator-seeds.s3-us-west-1.amazonaws.com/yosemite/yosemite5.jpg"), filename: "yosemite5.jpg")

r26 = Review.create!(title: "Was great!",
    body: "We are a family from Canada, and we love Yosemite so much! The meals they served were great, a lot better then I was expecting, our tour guide was nice. If you like tours that are a mix between free time and guided tour then you'll like this one. We got a lot of free time to hike the mist and Muir trail. Over all great time!",
    rating: 4,
    user_id: u3.id,
    tour_id: t6.id)

r27 = Review.create!(title: "Fantastic weekend",
    body: "Went on the 3 day camping and hiking trip to Yosemite with Dan as our tour guide, Dan was very friendly, great company and made me and my daughter feel at ease. I am not a very fast walker I have Achilles Tendonitis in my foot and Dan was very understanding that I was unable to walk as fast as most people and kept a eye on me to make sure that I was ok but also gave me space to walk at my own pace. I really enjoyed the weekend. Yosemite is beautiful.",
    rating: 5,
    user_id: u4.id,
    tour_id: t6.id)

r28 = Review.create!(title: "Simply Awsome",
    body: "Just returned from this three day trip and we are all completely shattered. It was a fantastic 3 days and Jill our guided could not do enough for us. She worked solidly to ensure that everyone in the group was catered for in every respect. A very busy and packed three days, There is no way we would have experienced everything the park has to offer without our guide. We had some reservations when booking this trip and struggled in deciding what to pack. We should not have worried. The company provided a comfortable mini bus with a full box trailer so we could if necessary take a full suitcase and loaded our pack packs as required. The whole trip was absolutely fabulous. Thanks Jill",
    rating: 5,
    user_id: u6.id,
    tour_id: t6.id)

r29 = Review.create!(title: "Birthday weekend",
    body: "Excellent trip. The hikes and views are definitely worth it. My guide Ariel was amazing. She made sure that everyone was happy and comfortable. She combined both touristy sites and gave us an option to hike to places that not everyone goes since its more challenging. I wish there were more camp fire meals (which are not always possible because of the drought) and the camp site wasn’t next to a highway... besides that the trip exceeded my expectations. Thank you!!! Best Birthday ever!!!",
    rating: 5,
    user_id: u10.id,
    tour_id: t6.id)

r30 = Review.create!(title: "First I’ll just say it’s hard to",
    body: "First I’ll just say it’s hard to blow it in Yosemite. The Park is simply amazing. I don’t regret making the trip. But... The campsite is at an RV campground/motel just outside the park in a gravel parking lot right off the road right next to several other large tour groups. I would not book again.",
    rating: 5,
    user_id: u2.id,
    tour_id: t6.id)

r31 = Review.create!(title: "This trip exceeded my expectations",
    body: "Our guide, Sarah, was friendly, very generous with her time, and told us a whole load of interesting info about the history of Yosemite which I would never have found out if i'd been doing the trip on my own. We went to a few different places around Yosemite so got a flavour of how big and diverse it was - it was good not just staying in the valley which is very touristy. We had a really fun group, ranging from a ten-year-old to a very fit! elderly couple, and yet it worked for everyone, which is really impressive. Saw amazing views, tried smores for the first time, enjoyed learning something new from everyone in the group, enjoyed the camping. The only tiny suggestion I'd make is that the food could have been of a better quality. But these 3 days were some of the best of my whole trip! Thank you to everyone who I met there.",
    rating: 5,
    user_id: u7.id,
    tour_id: t6.id)

r32 = Review.create!(title: "LONG REVIEW",
    body: "I highly recommend this trip! Spending 3 days/2 nights in Yosemite was the perfect way for me to explore Yosemite without being rushed amongst the crowds. My group consisted of 7 people, in their late 20s and 30s. Some of us had previous camping/hiking experience, and the others didn't. The first day started by being picked up around 9am in SF and heading out toward Yosemite. Half way there, our tour guide stopped and gave us some time to pick up lunch at a local grocery store. Before arriving at the Yosemite Valley, we made a brief stop at a forest with beautiful giant Sequoias for a short hike. Upon arriving at the Yosemite Valley, we had the opportunity to stop and drink natural water from a creek Seamus our tour guide took us to, and had time to take a bunch of pics. Then we headed to set up camp around 6pm. It was very easy to set up the tents and sleeping bags. Then we started dinner, which was plentiful! We had both vegetarian and non vegetarian dishes, which was all worked to cook ourselves! The first night we had a taco/burrito buffet. The first night camping under the stars was beautiful, sitting by the fire and connecting with your peers. The sleeping bags were comfortable and warm. The next day, we woke up around 7:30am for breakfast, which consisted of bread, yogurt, fruit, hot and cold cereal, and coffee/tea. We packed our lunches, and headed out to hike. Our tour guide took us to May lake and close to Mount Hoffman, which was a beautiful hike. We went at an easy pace, which allowed our bodies to get used to the altitude. Then after spending a few hours exploring, we headed back to camp to make dinner. Our second dinner was a meat and vegetarian stir fry. It was delicious and plentiful. On the 3rd day, again we woke up early and headed to the Yosemite valley, after packing up. Our tour guide gave us about 4 hours to ourselves to spend at the valley. Either hiking, bike riding, or simply just exploring the tourist stores and sites. A few of us decided to hike to Vernal falls, which was a semi challenging hike, but well worth it. I went by myself on this trip and I don't regret one minute of it! I was a bit anxious the night before, not knowing what the group dynamics would be like. However, our tour guide Seamus, did a great job of incorporating everyones personality and helped everyone feel welcomed. I definitely got my money's worth and cannot wait to go back to Yosemite one day! I will definitely use this company for related outdoor tours. P.S. Bring sweat shirt and warm pants, its warm at night, but gets cold in the morning. Bring a large water bottle, as you will need plenty of water throughout your hikes. Bring a small flashlight or headlamp for inside your tent. Bring appropriate footwear, hiking boots or sneakers.",
    rating: 5,
    user_id: u8.id,
    tour_id: t6.id)

r31 = Review.create!(title: "My son and I had wanted to visit",
    body: "My son and I had wanted to visit Yosemite for some time. This looked like a great way to see the park, and it was. Plenty of guided tour, and time to explore on our own. Guide Alex was friendly, and knowledgable. Was a great 3 days, highly recommend! Geoff from Philly",
    rating: 5,
    user_id: u9.id,
    tour_id: t6.id)

r32 = Review.create!(title: "Very good experience and value",
    body: "We had two very good experiences with the bike rental and Alcatraz. Very enjoyable and very good service from the bikes and the Alcatraz staff",
    rating: 4,
    user_id: u9.id,
    tour_id: t1.id)

r33 = Review.create!(title: "Missed the Mark",
    body: "Was disappointed in the iconic attraction that people talk about. Buildings that should have been kept standing to preserve the historic story have been neglected and have fallen down. The seagull population has got too out of hand as this prevents tourists exploring parts of the island.",
    rating: 3,
    user_id: u8.id,
    tour_id: t1.id)

r34 = Review.create!(title: "Auto refund due to Covid-19",
    body: "Didn't get the chance to experience this due to not being able to fly to USA at this time, so appreciate them giving a full cash refund which was done automatically. I would have been happy with credit voucher, so fully intend to use this company whenever I get the chance to get over to California",
    rating: 5,
    user_id: u6.id,
    tour_id: t4.id)

r35 = Review.create!(title: "Under the Spell of Muir Woods",
    body: "The driver was informative and gave a fun and interesting running monologue to and from Muir woods. The hiking portion I wish was longer, Muir woods has a way of captivating you the moment you pull into the parking lot. The drive up the winding roads to Muir woods is not for the faint of heart, but if you have the stomach for it the scenery will take your breath away.",
    rating: 5,
    user_id: u7.id,
    tour_id: t2.id)