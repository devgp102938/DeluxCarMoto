const cars = {
  //bmw
  "BMW i8": {
    img: "assets/images/car/BMW/pre-bmwi8.jpg",
    desc: "The BMW i8 is a hybrid sports car with a 1.5-liter, 3-cylinder turbocharged engine and an electric motor, producing a combined 357 horsepower and 570 Nm of torque. It features all-wheel drive, an automatic transmission with a top speed of 250 km/h, and a 0-100 km/h time of around 4.4 seconds. Key specs include a 42-liter fuel tank, 154 liters of boot space, and 20-inch wheels.",
    price: "₹2.62 Crore"
  },
  "BMW X7": {
    img: "assets/images/car/BMW/pre-bmwx7.jpg",
    desc: "The BMW X7 is a luxury full-size SUV available with powerful 2998cc petrol or 2993cc diesel engines, both paired with an 8-speed automatic transmission and all-wheel drive. Key features include a panoramic glass sunroof, a spacious interior with optional captain's seats, high-tech elements like crystal headlights and Crafted Clarity glass, and advanced driver assistance systems. The X7 is known for its premium features and performance, with both petrol and diesel variants offering high horsepower and torque",
    price: "₹1.24 Crore"
  },
  "BMW M5": {
    img: "assets/images/car/BMW/pre-bmwm5.webp",
    desc: "The BMW M5 is a high-performance sports sedan that blends business sedan luxury with sports car power, now featuring a new hybrid powertrain that delivers up to 727 horsepower and 1000 Nm of torque from its high-performance V8 engine combined with an electric drive. Key details include a high-tech interior with twin curved digital screens and iDrive 8.5, a variety of M-specific driving modes, and advanced features like parking assist with a reverse camera. While offering incredible performance and luxury",
    price: "₹1.74 Crore"
  },
  "BMW i7": {
    img: "assets/images/car/BMW/pre-bmwi7.webp",
    desc: "The BMW i7 is a full-size electric luxury sedan with a 101.7kWh battery, available in various models with different performance levels and a claimed WLTP range of up to 625 km. Key details include its advanced technology, such as a 31.3-inch rear-seat entertainment display and a 12.3-inch digital instrument cluster, along with a comfortable interior featuring massaging seats and ambient lighting. The i7 also offers multiple charging options, supporting DC fast charging at up to 195 kW.",
    price: "₹2.05 Crore"
  },
  "BMW Z4": {
    img: "assets/images/car/BMW/pre-bmwz4.jpg",
    desc: "The BMW Z4 is a 2-seater convertible sports car available with a 2998 cc, 6-cylinder TwinPower Turbo petrol engine that produces 335 bhp and 500 Nm of torque. ",
    price: "₹87.90 Lakh"
  },
  "BMW M2CS": {
    img: "assets/images/car/BMW/pre-bmwm2cs.jpg",
    desc: "The BMW M2 CS is a high-performance coupe with a 3.0-liter, twin-turbo inline-six engine producing 530hp and 650Nm of torque, exclusively paired with an 8-speed automatic transmission. It features a lighter, more performance-focused design with significant carbon fiber components, a top speed of up to 320km/h, and a 0-100km/h time of 3.8 seconds.",
    price: "₹1.30 crore"
  },
  "BMW XM": {
    img: "assets/images/car/BMW/pre-bmwxm.jpg",
    desc: "The BMW XM is a high-performance plug-in hybrid SUV that features a 4.4-liter twin-turbo V8 engine, an electric motor, and a combined output of up to 643 horsepower and 800 Nm of torque. It is a 5-seater SUV with a length of 5110 mm, a width of 2210 mm, and a height of 1755 mm. Key features include an automatic transmission, a 14.9-inch infotainment screen, 360° view camera, heated and ventilated seats, and a starting price in India of around ₹2.6 Crore.",
    price: "2.55 crore"
  },
  "BMW IX xDrive50": {
    img: "assets/images/car/BMW/pre-bmwix-xDrive50.png",
    desc: "The BMW iX is an all-electric SUV, Key details include electric all-wheel drive, impressive acceleration (e.g., 0-100 km/h in 4.6 seconds for the xDrive50), a long driving range of up to 635 km, and rapid charging capabilities. The vehicle features a spacious interior with a large curved display, advanced infotainment, and premium materials.",
    price: "1.29 crore"
  },
  //mercedes
  "Mercedes-Maybach S-Class": {
    img: "assets/images/car/Mercedes/pre-mybach-s-class.png",
    desc: "The Mercedes-Maybach S-Class is a luxury sedan offered in two main variants, the S 580 4MATIC and S 680 4MATIC, with different petrol engines, both paired with a 9-speed automatic all-wheel-drive system",
    price: "2.90 crore"
  },
  "Mercedes-Maybach-GLS": {
    img: "assets/images/car/Mercedes/pre-Mercedes-Maybach-GLS.png",
    desc: "The pre-Mercedes-Maybach-GLS has a 3982 cc, twin-turbo V8 engine with a 48V mild-hybrid system, producing up to 550 bhp and 770 Nm of torque. It features an all-wheel-drive (AWD) system, 9-speed automatic transmission, and can accelerate from 0-100 km/h in 4.9 seconds. Key features include a spacious 5-seat interior with luxury materials, a 360-degree camera, and advanced driver-assistance systems (ADAS).",
    price: "3.39 crore"
  },
  "Mercedes-AMG S63E": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG S63E.avif",
    desc: "The Mercedes-AMG S63 E Performance is a plug-in hybrid luxury sedan that produces a combined maximum power of 794 horsepower and 1430 Nm of torque from its twin-turbo V8 engine and electric motor. It accelerates from 0-100 km/h in a claimed 3.3 seconds and has an all-wheel-drive (AWD) drivetrain, with a top speed electronically limited to 250 km/h.",
    price: "3.27 crore"
  },
  "Mercedes-AMG GLE53": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG GLE53.jpg",
    desc: "The Mercedes-AMG GLE 53 is a 5-seater, 5-door SUV coupe powered by a 3.0-liter, 6-cylinder turbo-petrol engine that produces 435 horsepower and 520 Nm of torque. It features a 9-speed automatic transmission and an all-wheel drive system with a 48V mild-hybrid system for an extra power boost, allowing it to accelerate from 0-100 km/h in about five seconds.",
    price: "1.88 crore"
  },
  "Mercedes-AMG G63": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG G63.webp",
    desc: "The Mercedes-AMG G63 is powered by a 4.0-liter V8 biturbo engine producing around 577-585 horsepower and 850 Nm of torque, with a 0-100 km/h time of approximately 4.4 seconds. It features a 9-speed automatic transmission, a 4MATIC all-wheel-drive system, and a top speed of around 220 km/h",
    price: "2.45 crore"
  },
  "Mercedes CLE Cabriolet": {
    img: "assets/images/car/Mercedes/pre-Mercedes CLE Cabriolet.avif",
    desc: "The Mercedes CLE Cabriolet is a 4-seater convertible with a starting price of approximately Rs. 1.11 Crore. It features a 1999cc, 4-cylinder turbocharged petrol engine producing 255 bhp and 400 Nm of torque, and comes with a 9-speed automatic transmission with paddle shifts and AWD",
    price: "1.11 crore"
  },
  "Mercedes EQS": {
    img: "assets/images/car/Mercedes/pre-Mercedes EQS.webp",
    desc: "The Mercedes EQS is a luxury electric vehicle available as a sedan or SUV, known for its high-tech interior, long driving range, and luxurious features. Key details include its dual-motor AWD drivetrain, a large digital interface with up to three screens, and high-level safety features like ADAS and multiple airbags. The 580 4MATIC sedan has an estimated range of up to 857 km and can be fast-charged to 80% in about 31 minutes.",
    price: "1.63 crore"
  },
  "Mercedes-AMG GT Coupé": {
    img: "assets/images/car/Mercedes/pre-Mercedes-AMG GT Coupé.avif",
    desc: "The Mercedes-AMG GT Coupé is a high-performance sports car available in different variants, such as the 63 4MATIC Plus and the top-end 63 Pro 4MATIC Plus. It is a two-door coupe with a 3982 cc petrol engine, available with an automatic transmission, and known for its racing-inspired performance features like standard ceramic brakes and an AMG Performance 4MATIC+ all-wheel drive system.",
    price: "3.45 crore",
  },
  //Bugatti
  "Bugatti TOURBILLON": {
    img: "assets/images/car/Bugatti/pre-bugatti tourbillon.jpg",
    desc: "Bugatti's Tourbillon 2024: Price, Specs, Availability | WIREDThe Bugatti Tourbillon is a hybrid hypercar succeeding the Chiron, featuring a naturally aspirated V16 engine paired with three electric motors for a combined 1,800 hp. Key details include a 445 km/h top speed Conceived from a blank canvas, the TOURBILLON converges the immediate torque and flexibility of electric motors with the spine-tingling emotion of a naturally aspirated V16 engine.",
    price: "34.8 crore"
  },
  "Bugatti Mistral": {
    img: "assets/images/car/Bugatti/pre-Bugatti-Mistral.avif",
    desc: "The final road-going model with the iconic W16 engine. An open-air masterpiece to celebrate design and engineering at its best, The Bugatti Mistral is a roadster powered by an 8.0-liter, quad-turbocharged W16 engine producing 1,177 kW (1,600 PS / 1,578 hp) and 1,600 Nm of torque. It features a 7-speed dual-clutch automatic transmission, all-wheel drive, and has an official top speed of 420 km/h (261 mph).",
    price: "40 crore"
  },
  "Bugatti Chiron": {
    img: "assets/images/car/Bugatti/pre-Bugatti-Chiron.jpg",
    desc: "Breaking new barriers and dimensions through a modern reinterpretation of BUGATTI'S iconic history. The CHIRON emphasizes comfort and sophistication as much as innovative technology and performance-oriented form.",
    price: "19.21 crore"
  },
  "Bugatti Divo": {
    img: "assets/images/car/Bugatti/pre-Buggati-Divo.jpg",
    desc: "Bugatti Divo Final Model Delivered to Customer in Europe ...The Bugatti Divo is a track-focused hypercar released in 2018, limited to 40 units, and named after French racer Albert Divo. It is powered by a 1,500 PS 8.0-liter W16 engine, has a top speed of 380 km/h, and accelerates from 0-100 km/h in 2.4 seconds.",
    price: "41 crore"
  },
  "Bugatti Centodieci": {
    img: "assets/images/car/Bugatti/pre-bugatti centodieci.avif",
    desc: "The Bugatti Centodieci is a limited-production hypercar built to honor the Bugatti EB110, featuring a 1,600 PS W16 engine, 7-speed dual-clutch transmission, and 0-100 km/h in 2.4 seconds. Only ten units were produced, Showing the ultimate legacy of Bugatti's engineering prowess, the Centodieci combines cutting-edge technology with a tribute to the iconic EB110, delivering unparalleled performance and exclusivity.",
    price: "61 crore"
  },
  "Bugatti Solitaire": {
    img: "assets/images/car/Bugatti/pre-Bugatti Solitaire.jpg",
    desc: "Bugatti Solitaire is an exclusive coachbuilding program for creating one-of-a-kind vehicles, with a maximum of two masterpieces per year, built upon existing powertrains and chassis. The first model, the Brouillard, features a sculpture-like, flowing design inspired by Ettore Bugatti's horse, a quad-turbo W16 engine, unique bodywork with custom carbon fiber, and a bespoke interior with elements like tartan fabrics and a glass roof.",
    price: "Price on request"
  },
  "Bugatti Veyron": {
    img: "assets/images/car/Bugatti/pre-Bugatti Veyron.jpg",
    desc: "World premiere of the Bugatti Veyron 16.4 Grand Sport Vitesse ...The Bugatti Veyron is a high-performance supercar produced from 2005 to 2015, known for its groundbreaking performance with a top speed of 407 km/h (253 mph) and a powerful W16 engine. It was a technological marvel of its time, featuring a quad-turbocharged 8.0-liter W16 engine.",
    price: "11.39 crore"
  },
  //Ferrari
  "Ferrari 296 GTS": {
    img: "assets/images/car/Ferrari/pre-Ferrari 296 GTS.jpg",
    desc: "The Ferrari 296 GTS is a mid-engine hybrid sports car featuring a 3.0-liter V6 turbocharged engine combined with an electric motor, producing a total of 819 horsepower. It boasts a 0-100 km/h time of just 2.9 seconds and a top speed of over 330 km/h. The GTS variant offers an open-top driving experience with a retractable hardtop roof, advanced aerodynamics, and cutting-edge technology for enhanced performance and handling.",
    price: "5.19 crore"
  },
  "Ferrari 488 Pista": {
    img: "assets/images/car/Ferrari/pre-Ferrari 488 Pista.webp",
    desc: "The Ferrari 488 Pista is a high-performance sports car powered by a 3.9-liter twin-turbo V8 engine that produces 710 horsepower and 770 Nm of torque. It features advanced aerodynamics, lightweight construction, and track-focused technologies, allowing it to accelerate from 0-100 km/h in just 2.85 seconds and reach a top speed of over 340 km/h. The 488 Pista is designed for exceptional handling and driving dynamics, making it a thrilling choice for enthusiasts.",
    price: "4.50 crore"
  },
  "Laferrari": {
    img: "assets/images/car/Ferrari/pre-LaFerrari.avif",
    desc: "The LaFerrari is a limited-production hybrid supercar that combines a 6.3-liter V12 engine with an electric motor, delivering a total output of 950 horsepower. It features advanced aerodynamics, cutting-edge technology, and a lightweight carbon fiber structure. The LaFerrari can accelerate from 0-100 km/h in under 3 seconds and has a top speed of over 350 km/h. With only 499 units produced, it is one of Ferrari's most exclusive and sought-after models.",
    price: "6.50 crore"
  },
  "ferrari 849 testarossa": {
    img: "assets/images/car/Ferrari/pre-ferrari 849 testarossa.jpg",
    desc: "The Ferrari 849 Testarossa is a classic sports car known for its distinctive design and powerful performance. It features a mid-mounted 4.9-liter flat-12 engine that produces 390 horsepower, allowing it to accelerate from 0-100 km/h in just 5.2 seconds and reach a top speed of 290 km/h. The Testarossa is celebrated for its iconic side strakes, luxurious interior, and exceptional handling, making it a beloved model among car enthusiasts and collectors.",
    price: "4.74 crore"
  },
  "Ferrari Daytona SP3": {
    img: "assets/images/car/Ferrari/pre-Ferrari Daytona SP3.avif",
    desc: "The Ferrari Daytona SP3 is a mid-rear-engined V12 sports car with 840 horsepower from a 6.5L naturally aspirated engine, a 7-speed dual-clutch transmission, and a 0-100 km/h time of 2.85 seconds. It also features a rear-wheel drive setup, carbon-ceramic brakes, and performance electronics like Side Slip Control (SSC) 6.1.",
    price: "217 crore"
  },
  "Ferrari F80": {
    img: "assets/images/car/Ferrari/pre-Ferrari F80.avif",
    desc: "FERRARI F80 Specs: Powertrain:3.0L Twin-turbo  V6 ...The Ferrari F80 is a hybrid hypercar with a 3.0L twin-turbocharged V6 engine combined with three electric motors, producing a total of 1,200 PS and 1,184 hp. It accelerates from 0-100 km/h in 2.15 seconds and 0-200 km/h in 5.75 seconds. Key specs include a top speed of 350 km/h (217 mph), 850 Nm of torque, and an 8-speed dual-clutch transmission",
    price: "32 crore"
  },
  "Ferrari Monza SP2": {
    img: "assets/images/car/Ferrari/pre-Ferrari Monza SP2.avif",
    desc: "The Ferrari Monza SP2 is a two-seater barchetta with a 6.5-liter naturally aspirated V12 engine producing 810 hp and 719 Nm of torque. It features an open-cockpit design, a hand-built engine, and is part of Ferrari's limited-edition 'Icona' series, with a 0-100 km/h time of 2.9 seconds and a top speed of over 300 km/h. ",
    price: "22 crore"
  },
  "Ferrari Purosangue": {
    img: "assets/images/car/Ferrari/pre-Ferrari Purosangue.avif",
    desc: "The Ferrari Purosangue features a 6.5L V12 engine producing 715-725 hp and 716 Nm of torque, paired with an 8-speed dual-clutch automatic transmission and all-wheel drive. It accelerates from 0-100 km/h in 3.3 seconds and has a top speed of around 310 km/h",
    price: "9.93 crore"
  },
  "Ferrari Roma Spider": {
    img: "assets/images/car/Ferrari/pre-Ferrari Roma Spider.avif",
    desc: "The Ferrari Roma Spider is a high-performance convertible with a 3.9L twin-turbo V8 engine producing 620 hp and 760 Nm of torque, capable of reaching 0-62 mph in 3.4 seconds and a top speed of 199 mph. It features a retractable soft top that deploys in 13.5 seconds, a modern interior with wireless connectivity, and a unique wind deflector integrated into the rear seats.",
    price: "3.56 crore"
  },
  "Ferrari SF90": {
    img: "assets/images/car/Ferrari/pre-Ferrari SF90.avif",
    desc: "2024 Ferrari SF90 Review, Pricing, and SpecsThe Ferrari SF90 is a hybrid sports car with a 3.9-liter twin-turbocharged V8 engine and three electric motors, producing a combined output of 1,000 hp and 800 Nm of torque. It features an 8-speed dual-clutch automatic transmission, all-wheel drive, and a 7.9 kWh battery for up to 26 km of electric-only range.",
    price: "8.55 crore"
  },
  //Lamborghini
  "lamborghini centenario roadster": {
    img: "assets/images/car/Lamborghini/pre-lamborghini centenario roadster.jpg",
    desc: "The Lamborghini Centenario Roadster is a limited-edition supercar celebrating Lamborghini's 100th anniversary, based on the Aventador, and features a powerful naturally aspirated V12 engine producing 770 PS (\(759\) hp). It has a carbon-fiber body, all-wheel drive, and an aggressive design, with notable features including a manually controlled 7-speed gearbox and innovative rear-wheel steering for superior handling.",
    price: "15 crore"
  },
  "Lamborghini Sian FKP37": {
    img: "assets/images/car/Lamborghini/pre-Lamborghini Sian FKP37.webp",
    desc: "The Lamborghini Sian FKP 37 is a hybrid supercar with a 6.5L V12 engine, a 34 hp electric motor powered by a supercapacitor, and a combined output of 819 CV (602 kW). It can reach a top speed of over 350 km/h (217 mph) and accelerate from 0 to 100 km/h in under 2.8 seconds. The name Sian means flash of lightning, and FKP 37 honors Ferdinand Karl Piëch",
    price: "27.22 crore"
  },
  "lamborghini urus performante": {
    img: "assets/images/car/Lamborghini/pre-lamborghini urus performante.jpg",
    desc: "The Urus Performante is a Lamborghini that features a 4.0L twin-turbo V8 engine, producing 666 CV and 850 Nm of torque. It is designed for a sportier performance with a lightweight carbon fiber construction, titanium exhaust, Key performance details include a top speed of 306 km/h and an acceleration of 0-100km/h in 3.3 seconds.",
    price: "4.22 crore"
  },
  "Lamborghini Veneno": {
    img: "assets/images/car/Lamborghini/pre-Lamborghini-Veneno.jpg",
    desc: "LAMBORGHINI VENENO LIMITED EDITION only 14 units made, featuring a 6.5-liter V12 engine producing 750 horsepower and 690 Nm of torque. It boasts a top speed of 355 km/h and can accelerate from 0-100 km/h in just 2.8 seconds. one of the most exclusive and high-performance Lamborghinis ever produced.",
    price: "52 crore"
  },
  "Lamborghini-Huracàn Sterrato": {
    img: "assets/images/car/Lamborghini/pre-Lamborghini-Huracàn Sterrato.jpg",
    desc: "The Lamborghini Huracán Sterrato is a rally-inspired supercar with a 5.2L V10 engine producing 610 horsepower, a top speed of 260 km/h (161.5 mph), and a 0-100 km/h acceleration of 3.4 seconds. It features a 44mm raised ride height, off-road specific tires, and an all-wheel-drive system",
    price: "4.61 crore"
  },
  "Lamborghini-Huracan STO": {
    img: "assets/images/car/Lamborghini/pre-Lamborghini-Huracan STO.jpg",
    desc: "The Lamborghini Huracán STO is a track-focused supercar with a 5.2L V10 engine producing 640 horsepower and 565 Nm of torque. It features rear-wheel drive, a 7-speed dual-clutch transmission, and advanced aerodynamics for enhanced performance. The STO can accelerate from 0-100 km/h in just 3.0 seconds and has a top speed of over 310 km/h (193 mph).",
    price: "5 crore"
  },
  "Lamborghini-Revuelto": {
    img: "assets/images/car/Lamborghini/pre-Lamborghini-Revuelto.jpg",
    desc: "The Lamborghini Revuelto is a hybrid supercar featuring a 6.5L V12 engine combined with three electric motors, producing a total output of 1,001 horsepower and 1,200 Nm of torque. It boasts a 0-100 km/h time of just 2.5 seconds and a top speed exceeding 350 km/h (217 mph). The Revuelto incorporates advanced aerodynamics, all-wheel drive, and a luxurious interior with cutting-edge technology.",
    price: "8.89 crore"
  },
  "Lamborghini-Temerario": {
    img: "assets/images/car/Lamborghini/pre-Lamborghini-Temerario.jpg",
    desc: "The Lamborghini Temerario is a one-of-a-kind hypercar designed by Lamborghini's Ad Personam division, featuring a 6.5L V12 engine producing 770 horsepower and 720 Nm of torque. It boasts a top speed of over 350 km/h (217 mph) and accelerates from 0-100 km/h in just 2.9 seconds. The Temerario showcases a unique design with advanced aerodynamics, lightweight carbon fiber construction, and bespoke interior elements, making it an exclusive masterpiece.",
    price: "6 crore"
  },
  //Land Rover
  "defender 130": {
    img: "assets/images/car/Land-Rover/pre-defender 130.png",
    desc: "The Land Rover Defender 130 is a rugged SUV with a 3.0L inline-six turbocharged engine producing 395 horsepower and 550 Nm of torque. It features a spacious interior with seating for up to eight passengers, advanced off-road capabilities, and a range of modern technologies. Key specs include a towing capacity of up to 3,500 kg, an 8-speed automatic transmission, and all-wheel drive.",
    price: "1.63 crore"
  },
  "range rover autobiography": {
    img: "assets/images/car/Land-Rover/pre-range rover autobiography.jpg",
    desc: "The Range Rover Autobiography is a luxury SUV featuring a 3.0L inline-six turbocharged engine producing 395 horsepower and 550 Nm of torque. It offers a spacious and opulent interior with premium materials, advanced technology, and a range of comfort features. Key specs include an 8-speed automatic transmission, all-wheel drive, and a towing capacity of up to 3,500 kg.",
    price: "4.25 crore"
  },
  "range rover sport": {
    img: "assets/images/car/Land-Rover/pre-range rover sport.avif",
    desc: "The Range Rover Sport is a luxury SUV powered by a 3.0L inline-six turbocharged engine producing 395 horsepower and 550 Nm of torque. It features a sporty design, advanced off-road capabilities, and a luxurious interior with premium materials and cutting-edge technology. Key specs include an 8-speed automatic transmission, all-wheel drive, and a towing capacity of up to 3,500 kg.",
    price: "3.18 crore"
  },
  "range rover sv": {
    img: "assets/images/car/Land-Rover/pre-range rover sv.avif",
    desc: "The Range Rover SV is a high-performance luxury SUV featuring a 5.0L supercharged V8 engine producing 557 horsepower and 700 Nm of torque. It offers a bespoke interior with premium materials, advanced technology, and a range of comfort features. Key specs include an 8-speed automatic transmission, all-wheel drive, and a towing capacity of up to 3,500 kg.",
    price: "3.83 crore"
  },
  "range rover velar": {
    img: "assets/images/car/Land-Rover/pre-range rover velar.avif",
    desc: "The Range Rover Velar is a luxury SUV powered by a 2.0L inline-four turbocharged engine producing 247 horsepower and 365 Nm of torque. It features a sleek design, advanced technology, and a luxurious interior with premium materials. Key specs include an 8-speed automatic transmission, all-wheel drive, and a towing capacity of up to 2,500 kg.",
    price: "83.91 lakh"
  },
  "land rover Discovery": {
    img: "assets/images/car/Land-Rover/pre-land rover Discovery.png",
    desc: "The Land Rover Discovery is a versatile SUV powered by a 3.0L inline-six turbocharged engine producing 395 horsepower and 550 Nm of torque. It features a spacious interior with seating for up to seven passengers, advanced off-road capabilities, and a range of modern technologies. Key specs include an 8-speed automatic transmission, all-wheel drive, and a towing capacity of up to 3,500 kg.",
    price: "1.39 crore"
  },
  "defender octa": {
    img: "assets/images/car/Land-Rover/pre-defender octa.jpg",
    desc: "The Land Rover Defender Octa is a special edition SUV featuring a 3.0L inline-six turbocharged engine producing 395 horsepower and 550 Nm of torque. It offers enhanced off-road capabilities, a rugged design, and a range of modern technologies. Key specs include an 8-speed automatic transmission, all-wheel drive, and a towing capacity of up to 3,500 kg.",
    price: "2.85 crore"
  },
  //Porsche
  "Porsche 718 Boxter": {
    img: "assets/images/car/Porsche/pre-Porsche 718 Boxter.webp",
    desc: "The Porsche 718 Boxster is a mid-engine convertible sports car powered by a 2.0L turbocharged flat-four engine producing 300 horsepower and 380 Nm of torque. It features a sleek design, agile handling, and a luxurious interior with advanced technology. Key specs include a 6-speed manual or 7-speed PDK automatic transmission, rear-wheel drive, and a 0-100 km/h time of around 4.9 seconds.",
    price: "1.52 crore"
  },
  "Porsche 718 Cayman GT4 RS": {
    img: "assets/images/car/Porsche/pre-Porsche 718 Cayman GT4 RS.webp",
    desc: "The Porsche 718 Cayman GT4 RS is a high-performance sports car powered by a 4.0L naturally aspirated flat-six engine producing 493 horsepower and 450 Nm of torque. It features a lightweight design, advanced aerodynamics, and a track-focused suspension for exceptional handling. Key specs include a 6-speed manual transmission, rear-wheel drive, and a 0-100 km/h time of just 3.4 seconds.",
    price: "2.74 crore"
  },
  "Porsche 911 Carrera": {
    img: "assets/images/car/Porsche/pre-Porsche 911 Carrera.jpg",
    desc: "The Porsche 911 Carrera is a legendary sports car powered by a 3.0L twin-turbocharged flat-six engine producing 379 horsepower and 450 Nm of torque. It features a timeless design, advanced technology, and a luxurious interior with premium materials. Key specs include an 8-speed PDK automatic transmission, rear-wheel drive, and a 0-100 km/h time of around 4.0 seconds.",
    price: "3.84 crore"
  },
  "Porsche 911 GT3 RS": {
    img: "assets/images/car/Porsche/pre-Porsche 911 GT3 RS.avif",
    desc: "The Porsche 911 GT3 RS is a high-performance sports car powered by a 4.0L naturally aspirated flat-six engine producing 520 horsepower and 470 Nm of torque. It features a lightweight design, advanced aerodynamics, and a track-focused suspension for exceptional handling. Key specs include a 7-speed PDK automatic transmission, rear-wheel drive, and a 0-100 km/h time of just 3.2 seconds.",
    price: "3.51 crore"
  },
  "Porsche 911 TurboS Cabriolet": {
    img: "assets/images/car/Porsche/pre-Porsche 911 TurboS Cabriolet.jpg",
    desc: "The Porsche 911 Turbo S Cabriolet is a high-performance convertible sports car powered by a 3.8L twin-turbocharged flat-six engine producing 640 horsepower and 800 Nm of torque. It features a luxurious interior, advanced technology, and a sleek design. Key specs include an 8-speed PDK automatic transmission, all-wheel drive, and a 0-100 km/h time of just 2.7 seconds.",
    price: "3.35 crore"
  },
  "Porsche 911 TurboS": {
    img: "assets/images/car/Porsche/pre-Porsche 911 TurboS.avif",
    desc: "The Porsche 911 Turbo S is a high-performance sports car powered by a 3.8L twin-turbocharged flat-six engine producing 640 horsepower and 800 Nm of torque. It features advanced technology, a luxurious interior, and a sleek design. Key specs include an 8-speed PDK automatic transmission, all-wheel drive, and a 0-100 km/h time of just 2.7 seconds.",
    price: "3.45 crore"
  },
  "Porsche Cayenne Coupe": {
    img: "assets/images/car/Porsche/pre-Porsche Cayenne Coupe.jpg",
    desc: "The Porsche Cayenne Coupe is a luxury SUV powered by a range of engines, including a 3.0L V6 turbocharged engine producing 335 horsepower and a 4.0L V8 twin-turbocharged engine producing up to 541 horsepower in the Turbo S E-Hybrid variant. It features a sporty design, advanced technology, and a luxurious interior with premium materials. Key specs include an 8-speed automatic transmission, all-wheel drive, and a range of performance and comfort features.",
    price: "1.44 crore"
  },
  "Porsche Macan": {
    img: "assets/images/car/Porsche/pre-Porsche Macan.jpg",
    desc: "The Porsche Macan is a compact luxury SUV powered by a range of engines, including a 2.0L turbocharged inline-four engine producing 248 horsepower and a 2.9L V6 twin-turbocharged engine producing up to 434 horsepower in the GTS variant. It features a sporty design, advanced technology, and a luxurious interior with premium materials. Key specs include a 7-speed PDK automatic transmission, all-wheel drive, and a range of performance and comfort features.",
    price: "88 lakhs"
  },
  "Porsche Panamera": {
    img: "assets/images/car/Porsche/pre-Porsche Panamera.jpg",
    desc: "The Porsche Panamera is a luxury sports sedan powered by a range of engines, including a 2.9L V6 twin-turbocharged engine producing 325 horsepower and a 4.0L V8 twin-turbocharged engine producing up to 620 horsepower in the Turbo S E-Hybrid variant. It features a sleek design, advanced technology, and a luxurious interior with premium materials. Key specs include an 8-speed PDK automatic transmission, rear-wheel or all-wheel drive, and a range of performance and comfort features.",
    price: "2.33 crore"
  },
  "Porsche Taycan Black ED": {
    img: "assets/images/car/Porsche/pre-Porsche Taycan Black ED.jpg",
    desc: "The Porsche Taycan Black Edition is an all-electric sports sedan powered by dual electric motors producing up to 750 horsepower in the Turbo S variant. It features a sleek design, advanced technology, and a luxurious interior with premium materials. Key specs include an 800-volt architecture for fast charging, all-wheel drive, and a range of up to 412 km on a single charge.",
    price: "2.07 crore"
  },
  //Rolls Royce
  "Rolls-Royce Spectre": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Spectre.png",
    desc: "The Rolls-Royce Spectre is an all-electric luxury coupe featuring dual electric motors that produce a combined output of over 600 horsepower and 900 Nm of torque. It boasts a range of approximately 500 km (310 miles) on a single charge, with a 0-100 km/h time of around 4.5 seconds. The Spectre offers a lavish interior with bespoke materials, advanced technology, and the signature Rolls-Royce craftsmanship, making it a pinnacle of electric luxury vehicles.",
    price: "9.97 crore"
  },
  "Rolls-Royce Spectre Black Badge": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Spectre Black Badge.png",
    desc: "The Rolls-Royce Spectre Black Badge is a high-performance variant of the all-electric Spectre coupe, featuring dual electric motors that deliver enhanced power and torque for a more dynamic driving experience. It boasts a range of approximately 500 km (310 miles) on a single charge, with a 0-100 km/h time of around 4.3 seconds. The Black Badge edition includes unique design elements, bespoke materials, and advanced technology, offering a blend of luxury and performance that caters to discerning enthusiasts.",
    price: "11.1 crore"
  },
  "Rolls-Royce Phantom": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Phantom.png",
    desc: "The Rolls-Royce Phantom is a flagship luxury sedan known for its opulence, craftsmanship, and advanced technology. It features a 6.75-liter V12 engine producing 563 horsepower and 900 Nm of torque, paired with an 8-speed automatic transmission. The Phantom offers a spacious and lavish interior with bespoke materials, cutting-edge infotainment, and a host of comfort features. Key specs include a 0-100 km/h time of around 5.3 seconds and a top speed electronically limited to 250 km/h.",
    price: "10.48 crore"
  },
  "Rolls-Royce Ghost II": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Ghost II.png",
    desc: "The Rolls-Royce Ghost II is a luxury sedan that combines elegance, performance, and advanced technology. It is powered by a 6.75-liter V12 engine producing 571 horsepower and 900 Nm of torque, paired with an 8-speed automatic transmission. The Ghost II features a refined interior with bespoke materials, cutting-edge infotainment, and a range of comfort features. Key specs include a 0-100 km/h time of around 4.6 seconds and a top speed electronically limited to 250 km/h.",
    price: "10.52 crore"
  },
  "Rolls-Royce Ghost II Black Badge": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Ghost II Black Badge.png",
    desc: "The Rolls-Royce Ghost II Black Badge is a high-performance variant of the luxury Ghost II sedan, featuring a more powerful 6.75-liter V12 engine producing 600 horsepower and 900 Nm of torque. It is paired with an 8-speed automatic transmission and offers enhanced driving dynamics. The Black Badge edition includes unique design elements, bespoke materials, and advanced technology, providing a blend of luxury and performance. Key specs include a 0-100 km/h time of around 4.5 seconds and a top speed electronically limited to 250 km/h.",
    price: "11.52 crore"
  },
  "Rolls-Royce Cullinan II": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Cullinan II.png",
    desc: "The Rolls-Royce Cullinan II is a luxury SUV that combines off-road capability with unparalleled luxury and craftsmanship. It is powered by a 6.75-liter V12 engine producing 563 horsepower and 900 Nm of torque, paired with an 8-speed automatic transmission. The Cullinan II features a spacious and opulent interior with bespoke materials, advanced infotainment, and a range of comfort features. Key specs include a 0-100 km/h time of around 5.2 seconds and a top speed electronically limited to 250 km/h.",
    price: "12.83 crore"
  },
  "Rolls-Royce Cullinan II Black Badge": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Cullinan II Black Badge.png",
    desc: "The Rolls-Royce Cullinan II Black Badge is a high-performance variant of the luxury Cullinan II SUV, featuring a more powerful 6.75-liter V12 engine producing 600 horsepower and 900 Nm of torque. It is paired with an 8-speed automatic transmission and offers enhanced driving dynamics. The Black Badge edition includes unique design elements, bespoke materials, and advanced technology, providing a blend of luxury and performance. Key specs include a 0-100 km/h time of around 4.9 seconds and a top speed electronically limited to 250 km/h.",
    price: "14.7 crore"
  },
  "Rolls-Royce-La Rose Noire Droptail": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce-La Rose Noire Droptail.jpg",
    desc: "The Rolls-Royce La Rose Noire Droptail is an exclusive, one-of-a-kind luxury convertible that showcases the pinnacle of bespoke craftsmanship and design. It features a powerful V12 engine, advanced technology, and a lavish interior adorned with the finest materials. The Droptail is a true masterpiece, combining elegance, performance, and exclusivity in a unique package that reflects the owner's personal taste and style.",
    price: "250 crore"
  },
  "Rolls-Royce-Arcadia Droptail": {
    img: "assets/images/car/Rolls Royce/pre-rolls royce arcadia droptail.webp",
    desc: "The Rolls-Royce Arcadia Droptail is a bespoke luxury convertible that epitomizes exclusivity and craftsmanship. It features a powerful V12 engine, advanced technology, and a meticulously designed interior with the finest materials. The Arcadia Droptail is a unique creation, blending elegance, performance, and personalization to deliver an unparalleled driving experience for discerning enthusiasts.",
    price: "209 crore"
  },
  "Rolls-Royce SwepTail": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce SwepTail.webp",
    desc: "The Rolls-Royce Sweptail is a one-of-a-kind luxury coupe that showcases the pinnacle of bespoke craftsmanship and design. It features a powerful V12 engine, advanced technology, and a lavish interior adorned with the finest materials. The Sweptail is a true masterpiece, combining elegance, performance, and exclusivity in a unique package that reflects the owner's personal taste and style.",
    price: "84 crore"
  },
  "Rolls-Royce Amethyst Droptail": {
    img: "assets/images/car/Rolls Royce/pre-Rolls-Royce Amethyst Droptail.jpg",
    desc: "The Rolls-Royce Amethyst Droptail is an exclusive, one-of-a-kind luxury convertible that showcases the pinnacle of bespoke craftsmanship and design. It features a powerful V12 engine, advanced technology, and a lavish interior adorned with the finest materials. The Droptail is a true masterpiece, combining elegance, performance, and exclusivity in a unique package that reflects the owner's personal taste and style.",
    price: "256 crore"
  }
};

function openPreview(carName) {
  const car = cars[carName];
  if (!car) return;

  document.getElementById("preview-img").src = car.img;
  document.getElementById("preview-title").textContent = carName;
  document.getElementById("preview-desc").textContent = car.desc;
  document.getElementById("preview-price").textContent = "Price: " + car.price;
  document.getElementById("car-preview").style.display = "flex";
}

function closePreview() {
  document.getElementById("car-preview").style.display = "none";
}

const modal = document.getElementById("car-preview");
const modalcontent = document.querySelector(".preview-content");

function outsideClose() {
  closePreview();
}

modal.addEventListener("click", outsideClose);
modal.addEventListener("touchstart", outsideClose);

function stopClose(e) {
  e.stopPropagation();
}

modalcontent.addEventListener("click", stopClose);
modalcontent.addEventListener("touchstart", stopClose);

