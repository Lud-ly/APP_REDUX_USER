

export default function(){
    return [
         {name:'THIBAULT MOULY',id:1,role:'AILIER-ATTAQUANT',active:'OUI',pied:'gauche',but:12,power:'GROSSE FRAPPE',college:'sport-etude',club:'OM'},
        {name:'MAEL PYTHON',id:2,role:'AILIER-MENEUR-JEU',active:'OUI',pied:'droit',but:11,power:'DRIBLE',college:'au collège',club:'ESCM34'}, 
        {name:'RAPH JUMEAU',id:3,role:'MILIEU-DEFENSIF',active:'NON',pied:'droit',but:3,power:'DRIBLE',college:'au collège',club:'ESCM34'},
        {name:'YOURSI WITSEL',id:4,role:'MILIEU-OFFENSIF',active:'NON',pied:'gauche',but:5,power:'DRIBLE',college:'sport-etude',club:'MMF'},
        {name:'LOUIS DIT LOULOU',id:5,role:'AILIER-ATTAQUANT',active:'OUI',pied:'gauche',but:12,power:'GROSSE FRAPPE',college:'au collège',club:'MHSC'},
        {name:'SACHA GOMAR',id:6,role:'MILIEU-DEFENSIF',active:'OUI',pied:'droit',but:11,power:'DRIBLE',college:'sport-etude',club:'AS LATTES'}, 
        {name:'ENZO PALAISI',id:7,role:'GARDIEN',active:'NON',pied:'droit',but:3,power:'DRIBLE',college:'au collège',club:'SETE'},
        {name:'LEO JIMMY',id:8,role:'MILIEU-DEFENSIF',active:'NON',pied:'gauche',but:5,power:'DRIBLE',college:'au collège',club:'ESCM34'},
        {name:'ENZO FRANGON',id:9,role:'DEFENSEUR',active:'NON',pied:'droit',but:3,power:'DRIBLE',college:'sport-etude',club:'BEAUCAIRE'},
        {name:'PIERRE JUMEAU',id:10,role:'MILIEU-DEFENSIF',active:'NON',pied:'gauche',but:5,power:'DRIBLE',college:'sport-etude',club:'OM'},
        
            {
              "id": 11,
              "name": "GARFIELD",
              "designation": "MANAGER",
              "manager": 9,
              "hired_on": "05-01-1993",
              "salary": 54000,
              "commission": null,
              "dept": 4,
              // "img": "https://media.giphy.com/media/65VBy9Ccvyww9or9IR/giphy.gifg"
            },
            {
              "id": 12,
              "name": "GRANT",
              "designation": "ENGINEER",
              "manager": 10,
              "hired_on": "03-30-1997",
              "salary": 32000,
              "commission": null,
              "dept": 2
            },
            {
              "id": 13,
              "name": "HARDING",
              "designation": "MANAGER",
              "manager": 9,
              "hired_on": "02-02-1998",
              "salary": 52000,
              "commission": 300,
              "dept": 3
            },
            {
              "id": 14,
              "name": "HOOVER",
              "designation": "SALES I",
              "manager": 2,
              "hired_on": "04-02-1990",
              "salary": 27000,
              "commission": null,
              "dept": 3
            },
            {
              "id": 15,
              "name": "JACKSON",
              "designation": "CEO",
              "manager": null,
              "hired_on": "01-01-1990",
              "salary": 75000,
              "commission": null,
              "dept": 4
            },
            {
              "id": 16,
              "name": "JOHNSON",
              "designation": "ADMIN",
              "manager": 6,
              "hired_on": "12-17-1990",
              "salary": 18000,
              "commission": null,
              "dept": 4
            },
            {
              "id": 17,
              "name": "LINCOLN",
              "designation": "TECH",
              "manager": 6,
              "hired_on": "06-23-1994",
              "salary": 22500,
              "commission": 1400,
              "dept": 4
            },
            {
              "id": 18,
              "name": "POLK",
              "designation": "TECH",
              "manager": 6,
              "hired_on": "09-22-1997",
              "salary": 25000,
              "commission": null,
              "dept": 4
            },
            {
              "id": 19,
              "name": "TAFT",
              "designation": "SALES I",
              "manager": 2,
              "hired_on": "01-02-1996",
              "salary": 25000,
              "commission": 500,
              "dept": 3
            }
          /* ,
        {
            "year": 2004,
            "make": "Acura",
            "model": "NSX",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Acura",
            "model": "RL",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Acura",
            "model": "RSX",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Acura",
            "model": "TL",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Acura",
            "model": "TSX",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Audi",
            "model": "A4",
            "body_styles": "[\"Convertible\", \"Wagon\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Audi",
            "model": "A6",
            "body_styles": "[\"Wagon\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Audi",
            "model": "A8",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Audi",
            "model": "allroad",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Audi",
            "model": "S4",
            "body_styles": "[\"Wagon\", \"Convertible\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Audi",
            "model": "TT",
            "body_styles": "[\"Convertible\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "3 Series",
            "body_styles": "[\"Sedan\", \"Coupe\", \"Convertible\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "5 Series",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "6 Series",
            "body_styles": "[\"Convertible\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "7 Series",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "M3",
            "body_styles": "[\"Convertible\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "X3",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "X5",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "BMW",
            "model": "Z4",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Buick",
            "model": "Century",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Buick",
            "model": "LeSabre",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Buick",
            "model": "Park Avenue",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Buick",
            "model": "Rainier",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Buick",
            "model": "Regal",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Buick",
            "model": "Rendezvous",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "CTS",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "DeVille",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "Escalade",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "Escalade ESV",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "Escalade EXT",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "Seville",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "SRX",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Cadillac",
            "model": "XLR",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Astro Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Astro Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Avalanche 1500",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Avalanche 2500",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Aveo",
            "body_styles": "[\"Sedan\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Blazer",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Cavalier",
            "body_styles": "[\"Sedan\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Classic",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Colorado Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Colorado Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Colorado Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Corvette",
            "body_styles": "[\"Convertible\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Express 1500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Express 1500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Express 2500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Express 2500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Express 3500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Express 3500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Impala",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Malibu",
            "body_styles": "[\"Hatchback\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Monte Carlo",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "S10 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 1500 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 1500 Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 1500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 2500 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 2500 Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 2500 HD Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 2500 HD Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 2500 HD Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 2500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 3500 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 3500 Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Silverado 3500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "SSR",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Suburban 1500",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Suburban 2500",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Tahoe",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Tracker",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "TrailBlazer",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Venture Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chevrolet",
            "model": "Venture Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "300M",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "Concorde",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "Crossfire",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "Pacifica",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "PT Cruiser",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "Sebring",
            "body_styles": "[\"Coupe\", \"Convertible\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Chrysler",
            "model": "Town & Country",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Caravan Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Caravan Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Dakota Club Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Dakota Quad Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Dakota Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Durango",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Grand Caravan Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Grand Caravan Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Intrepid",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Neon",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Ram 1500 Quad Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Ram 1500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Ram 2500 Quad Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Ram 2500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Ram 3500 Quad Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Ram 3500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Sprinter 2500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Sprinter 2500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Sprinter 3500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Stratus",
            "body_styles": "[\"Sedan\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Dodge",
            "model": "Viper",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Crown Victoria",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "E150 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "E150 Super Duty Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "E250 Super Duty Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "E350 Super Duty Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "E350 Super Duty Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Escape",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Excursion",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Expedition",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Explorer",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Explorer Sport Trac",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F150 (Heritage) Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F150 (Heritage) Super Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F150 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F150 Super Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F150 SuperCrew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F250 Super Duty Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F250 Super Duty Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F250 Super Duty Super Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F350 Super Duty Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F350 Super Duty Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "F350 Super Duty Super Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Focus",
            "body_styles": "[\"Sedan\", \"Hatchback\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Freestar Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Freestar Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Mustang",
            "body_styles": "[\"Convertible\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Ranger Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Ranger Super Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Taurus",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Ford",
            "model": "Thunderbird",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Canyon Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Canyon Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Canyon Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Envoy",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Envoy XL",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Envoy XUV",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Safari Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Safari Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Savana 1500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Savana 1500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Savana 2500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Savana 2500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Savana 3500 Cargo",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Savana 3500 Passenger",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 1500 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 1500 Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 1500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 2500 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 2500 Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 2500 HD Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 2500 HD Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 2500 HD Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 2500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 3500 Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 3500 Extended Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sierra 3500 Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Sonoma Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Yukon",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Yukon XL 1500",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "GMC",
            "model": "Yukon XL 2500",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "Accord",
            "body_styles": "[\"Sedan\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "Civic",
            "body_styles": "[\"Coupe\", \"Sedan\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "CR-V",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "Element",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "Insight",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "Odyssey",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "Pilot",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Honda",
            "model": "S2000",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "HUMMER",
            "model": "H1",
            "body_styles": "[\"Wagon\", \"SUV\"]"
          },
          {
            "year": 2004,
            "make": "HUMMER",
            "model": "H2",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Hyundai",
            "model": "Accent",
            "body_styles": "[\"Hatchback\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Hyundai",
            "model": "Elantra",
            "body_styles": "[\"Sedan\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Hyundai",
            "model": "Santa Fe",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Hyundai",
            "model": "Sonata",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Hyundai",
            "model": "Tiburon",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Hyundai",
            "model": "XG350",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "INFINITI",
            "model": "FX",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "INFINITI",
            "model": "G",
            "body_styles": "[\"Coupe\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "INFINITI",
            "model": "I",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "INFINITI",
            "model": "M",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "INFINITI",
            "model": "Q",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "INFINITI",
            "model": "QX",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Isuzu",
            "model": "Ascender",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Isuzu",
            "model": "Axiom",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Isuzu",
            "model": "Rodeo",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Jaguar",
            "model": "S-Type",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Jaguar",
            "model": "XJ",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Jaguar",
            "model": "XK",
            "body_styles": "[\"Coupe\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Jaguar",
            "model": "X-Type",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Jeep",
            "model": "Grand Cherokee",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Jeep",
            "model": "Liberty",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Jeep",
            "model": "Wrangler",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Kia",
            "model": "Amanti",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Kia",
            "model": "Optima",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Kia",
            "model": "Rio",
            "body_styles": "[\"Wagon\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Kia",
            "model": "Sedona",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Kia",
            "model": "Sorento",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Kia",
            "model": "Spectra",
            "body_styles": "[\"Sedan\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Land Rover",
            "model": "Discovery",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Land Rover",
            "model": "Freelander",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Land Rover",
            "model": "Range Rover",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "ES",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "GS",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "GX",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "IS",
            "body_styles": "[\"Sedan\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "LS",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "LX",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "RX",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Lexus",
            "model": "SC",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Lincoln",
            "model": "Aviator",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Lincoln",
            "model": "LS",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Lincoln",
            "model": "Navigator",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Lincoln",
            "model": "Town Car",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "B-Series Cab Plus",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "B-Series Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "MAZDA3",
            "body_styles": "[\"Sedan\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "MAZDA6",
            "body_styles": "[\"Sedan\", \"Wagon\", \"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "MPV",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "MX-5 Miata",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "RX-8",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "MAZDA",
            "model": "Tribute",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "C-Class",
            "body_styles": "[\"Sedan\", \"Coupe\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "CL-Class",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "CLK-Class",
            "body_styles": "[\"Coupe\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "E-Class",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "G-Class",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "M-Class",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "S-Class",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "SL-Class",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Mercedes-Benz",
            "model": "SLK-Class",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Mercury",
            "model": "Grand Marquis",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Mercury",
            "model": "Marauder",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Mercury",
            "model": "Monterey",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Mercury",
            "model": "Mountaineer",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mercury",
            "model": "Sable",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "MINI",
            "model": "Cooper",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Diamante",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Eclipse",
            "body_styles": "[\"Coupe\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Endeavor",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Galant",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Lancer",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Montero",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Montero Sport",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Mitsubishi",
            "model": "Outlander",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "350Z",
            "body_styles": "[\"Coupe\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Altima",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Frontier Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Frontier King Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Maxima",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Murano",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Pathfinder",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Pathfinder Armada",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Quest",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Sentra",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Titan Crew Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Titan King Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Nissan",
            "model": "Xterra",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Oldsmobile",
            "model": "Alero",
            "body_styles": "[\"Coupe\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Oldsmobile",
            "model": "Bravada",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Oldsmobile",
            "model": "Silhouette",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Aztek",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Bonneville",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Grand Am",
            "body_styles": "[\"Coupe\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Grand Prix",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "GTO",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Montana",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Sunfire",
            "body_styles": "[\"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Pontiac",
            "model": "Vibe",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Porsche",
            "model": "911",
            "body_styles": "[\"Convertible\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Porsche",
            "model": "Boxster",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Porsche",
            "model": "Carrera GT",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Porsche",
            "model": "Cayenne",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Saab",
            "model": "9-3",
            "body_styles": "[\"Sedan\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Saab",
            "model": "9-5",
            "body_styles": "[\"Wagon\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Saturn",
            "model": "Ion",
            "body_styles": "[\"Sedan\", \"Coupe\"]"
          },
          {
            "year": 2004,
            "make": "Saturn",
            "model": "L-Series",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Saturn",
            "model": "VUE",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Scion",
            "model": "xA",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Scion",
            "model": "xB",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Subaru",
            "model": "Baja",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Subaru",
            "model": "Forester",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Subaru",
            "model": "Impreza",
            "body_styles": "[\"Wagon\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Subaru",
            "model": "Legacy",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Subaru",
            "model": "Outback",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Suzuki",
            "model": "Aerio",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Suzuki",
            "model": "Forenza",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Suzuki",
            "model": "Grand Vitara",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Suzuki",
            "model": "Verona",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Suzuki",
            "model": "Vitara",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Suzuki",
            "model": "XL-7",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "4Runner",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Avalon",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Camry",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Celica",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Corolla",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Echo",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Highlander",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Land Cruiser",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Matrix",
            "body_styles": "[\"Hatchback\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "MR2",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Prius",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "RAV4",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Sequoia",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Sienna",
            "body_styles": "[\"Van/Minivan\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Solara",
            "body_styles": "[\"Coupe\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Tacoma Double Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Tacoma Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Tacoma Xtracab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Tundra Access Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Tundra Double Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Toyota",
            "model": "Tundra Regular Cab",
            "body_styles": "[\"Pickup\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "Golf",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "GTI",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "Jetta",
            "body_styles": "[\"Wagon\", \"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "New Beetle",
            "body_styles": "[\"Hatchback\", \"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "Passat",
            "body_styles": "[\"Sedan\", \"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "Phaeton",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "R32",
            "body_styles": "[\"Hatchback\"]"
          },
          {
            "year": 2004,
            "make": "Volkswagen",
            "model": "Touareg",
            "body_styles": "[\"SUV\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "C70",
            "body_styles": "[\"Convertible\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "S40",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "S40 (New)",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "S60",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "S80",
            "body_styles": "[\"Sedan\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "V40",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "V70",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "XC70",
            "body_styles": "[\"Wagon\"]"
          },
          {
            "year": 2004,
            "make": "Volvo",
            "model": "XC90",
            "body_styles": "[\"SUV\"]"
          }*/
         ]
      
  }
    
    
      
       