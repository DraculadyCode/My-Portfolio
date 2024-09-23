// ! Used as a main version 19.07.2024 ,18:30
// ! Used as a main version 22.07.2024 ,09:30

// Importing necessary modules
const readline = require("readline"); // Module for reading user input
const colors = require("colors"); // Module for colored output in the console
const Table = require("cli-table3"); // Module for creating ASCII tables
const rl = readline.createInterface({
  // Creating readline interface for input/output
  input: process.stdin,
  output: process.stdout
});
// Initial values for pet needs, health, age, and points
// ? Object needs
const needs = {
  food: 100,
  energy: 100,
  toilet: 100,
  fun: 100,
  hygiene: 100,
  social: 100,
  sport: 100
};
let health = 100; // Initial health of the pet
let age = 0; // Initial age of the pet
let vacations = 0; // Initial number of vacations
let points = 0; // Initial points
let weight = 1; // Initial weight
currentSkillIndex = 0; // Index to track current skill
// Array of sport skills that the pet can acquire
// ? Array skills names
const sportSkills = [
  "Swimming",
  "Bowling",
  "Football",
  "Basketball",
  "Tennis",
  "Running",
  "Cycling",
  "Riding",
  "Baseball",
  "Skiing",
  "Skateboarding",
  "Surfing",
  "Ping pong",
  "Yoga",
  "Flying disc",
  "Fencing",
  "Snowboard",
  "Mountain biking",
  "Water polo",
  "Juggling",
  "Archery",
  "Yoga",
  "Ich skate",
  "Diving",
  "Art"
];
// Array to store new skills acquired by the pet
// ? Empty array skills names and emojis
let newSkills = [];
// Array of emojis corresponding to the sport skills
// ? Array skills emojis
sportSkillsEmoji = [
  "🏊",
  "🎳",
  "⚽",
  "🏀",
  "🎾",
  "🏃",
  "🚲",
  "🏇",
  "⚾",
  "⛷",
  "🛹",
  "🏄",
  "🥊",
  "🏓",
  "🥏",
  "🤺",
  "🏂",
  "🚵",
  "🤽",
  "🤹",
  "🏹",
  "🧘‍♂️",
  "⛸",
  "🤿",
  "🎨"
];
// Create a table to display the skills and their corresponding emojis
// ? Table skills names and emojis creation
let skillsTable = new Table({
  head: [colors.bgBlue.bold("Skill Name"), colors.bgBlue.bold("Emoji")],
  colWidths: [30, 10]
});
// Function to check if the input contains only letters
// ? Function name check
function isValidName(input) {
  return /^[a-zA-Z]+$/.test(input);
}
// Function to get emoji based on need level
// ? Function needs emojis
function getEmoji(value) {
  // Emoji selection based on different value ranges
  if (value >= 90) {
    return "🤩"; // Perfect!
  } else if (value >= 75) {
    return "😀"; // Great
  } else if (value >= 50) {
    return "😊"; // Good
  } else if (value >= 25) {
    return "😐"; // Okay
  } else if (value >= 10) {
    return "😢"; // Low
  } else if (value > 0) {
    return "😭"; // Critical
  } else {
    return "💀"; // Dead
  }
}
// Function to get age emoji based on the age value
// ? Function age emojis
function getAgeEmoji(value) {
  // Emoji selection based on different age ranges
  if (value >= 80) {
    return "👴"; // Elderly
  } else if (value >= 60) {
    return "🧓"; // Senior
  } else if (value >= 40) {
    return "🧔‍♂️"; // Adult with beard
  } else if (value >= 25) {
    return "👨"; // Adult
  } else if (value >= 10) {
    return "🧒"; // Child
  } else if (value >= 0) {
    return "👶"; // Baby
  }
}

// Function to get points emoji based on the points value
// ? Function points emojis
function getPointsEmoji(value) {
  // Emoji selection based on different points ranges
  if (value >= 300) {
    return "💰"; // Rich: 300 or more points
  } else if (value >= 200) {
    return "🪙"; // Rich: 200-299 points
  } else if (value >= 150) {
    return "💴"; // Wealthy: 150-199 points
  } else if (value >= 120) {
    return "💵"; // Wealthy: 120-149 points
  } else if (value >= 100) {
    return "💶"; // Comfortable: 100-119 points
  } else if (value >= 80) {
    return "💷"; // Comfortable: 80-99 points
  } else if (value >= 50) {
    return "💸"; // Average: 50-79 points
  } else if (value >= 20) {
    return "💳"; // Poor: 20-49 points
  } else {
    return "🧾"; // Very poor: below 20 points
  }
}
// ? Function weight emojis
function getWeightEmoji(updatedStatus) {
  // Emoji selection based on the pet's weight status
  if (updatedStatus === "Overweight") {
    return "🐽"; // Overweight: Pig emoji
  } else if (updatedStatus === "Normal") {
    return "💯"; // Normal weight: 100 points emoji
  } else if (updatedStatus === "Underweight") {
    return "❗"; // Underweight: Exclamation mark emoji
  }
}

// ? Function weight Status
function checkWeightStatus(weight, age) {
  let updatedStatus = ""; // Initialize variable to store the weight status
  // Determine the weight status based on the pet's weight and age
  if (weight >= age + 11) {
    updatedStatus = "Overweight"; // Weight is significantly above the expected range
  } else if (weight < age + 11 && weight > age - 10) {
    updatedStatus = "Normal"; // Weight is within the expected range
  } else if (weight <= age - 10) {
    updatedStatus = "Underweight"; // Weight is significantly below the expected range
  }
  return updatedStatus; // Return the determined weight status
}
// ? Function weight affecs
function getWeightAffects(updatedStatus) {
  // Apply effects based on the weight status
  if (updatedStatus === "Overweight") {
    // If the pet is overweight, decrease health, hygiene, energy, and fun
    return health--, hygiene--, energy--, fun--;
  } else if (updatedStatus === "Underweight") {
    // If the pet is underweight, increase health, social, energy, and fun
    return health++, social++, energy++, fun++;
  } else if (updatedStatus === "Normal") {
    // If the pet is at a normal weight, slightly decrease health and energy
    return health--, energy--;
  }
  if (health > 100) {
    health = 100;
  }
  // No explicit return needed as the function modifies global variables
}
// ? Function vacation emojis
function getVacationEmoji(value) {
  // Return an emoji based on the value of the vacation status
  if (value >= 15) {
    return "🏰"; // Castle emoji: Value 15 or more indicates a luxurious vacation
  } else if (value >= 10) {
    return "🏯"; // Japanese castle emoji: Value 10 to 14 indicates a high-quality vacation
  } else if (value >= 7) {
    return "🏩"; // Love hotel emoji: Value 7 to 9 indicates a romantic or enjoyable vacation
  } else if (value >= 4) {
    return "🏨"; // Hotel emoji: Value 4 to 6 indicates a standard vacation
  } else if (value < 4) {
    return "⛺"; // Tent emoji: Value below 4 indicates a basic or camping vacation
  }
}
// Array of random events with their effects and emojis
// ? Array of objects random events
const randomEvents = [
  {
    name: "Pet is in love",
    description: "social: 100, fun: +20",
    affect: { social: 100, fun: +20 },
    eventEmoji: "💘"
  },
  {
    name: "Pet lost a friend",
    description: "social: -20, fun: -20",
    affect: { social: -20, fun: -20 },
    eventEmoji: "😭"
  },
  {
    name: "Pet gets a snack",
    description: "food: +10, weight: +1",
    affect: { food: +10, weight: +1 },
    eventEmoji: "🥮"
  },
  {
    name: "Pet is sick",
    description: "energy: -20, fun: -10, hygiene: -5",
    affect: { energy: -20, fun: -10, hygiene: -5 },
    eventEmoji: "🤢"
  },
  {
    name: "Pet has travelled",
    description: "social: +20, fun: +20, energy: -5",
    affect: { social: +20, fun: +20, energy: -5 },
    eventEmoji: "🌍"
  },
  {
    name: "Pet visited a friend",
    description: "social: +20, fun: +20",
    affect: { social: +20, fun: +20 },
    eventEmoji: "🍻"
  },
  {
    name: "Pet has a new toy",
    description: "fun: +20, social: +10",
    affect: { fun: +20, social: +10 },
    eventEmoji: "🧸"
  },
  {
    name: "Pet has been vaccinated",
    description: "health: +30, points: -10",
    affect: { health: +30, points: -10 },
    eventEmoji: "💉"
  },
  {
    name: "Pet found a treasure",
    description: "points: +30, fun: +20",
    affect: { points: +30, fun: +20 },
    eventEmoji: "💰"
  },
  {
    name: "Pet Went to the Vet",
    description: " health: +20, points: -10",
    affect: { health: +20, points: -10 },
    eventEmoji: "🩺"
  },
  {
    name: "Pet Found a Friend",
    description: " social: +50, fun: +20",
    affect: { social: +50, fun: +20 },
    eventEmoji: "🤼"
  },
  {
    name: "Pet Got a Bath",
    description: "health: +10, social: +10, hygiene: 100",
    affect: { health: +10, social: +10, hygiene: 100 },
    eventEmoji: "🛁"
  },
  {
    name: "Pet Played in the Mud",
    description: "health: -5, social: +10, hygiene: -40, fun: +30",
    affect: { health: -5, social: +10, hygiene: -40, fun: +30 },
    eventEmoji: "🏖"
  },
  {
    name: "Pet Had a Bad Dream",
    description: " social: -5, fun: -10",
    affect: { social: -5, fun: -10 },
    eventEmoji: "👹"
  },
  {
    name: "Pet Discovered a New Place",
    description: "social: +20, points: +10",
    affect: { social: +20, points: +10 },
    eventEmoji: "🏞"
  },
  {
    name: "Pet Played in the Rain",
    description: "fun: +30, hygiene: -10",
    affect: { fun: +30, hygiene: -10 },
    eventEmoji: "🌧"
  },
  {
    name: "Pet Found a Cozy Spot",
    description: "energy: +20, fun: +15",
    affect: { energy: +20, fun: +15 },
    eventEmoji: "🏝"
  },
  {
    name: "Pet Got Stung by a Bee",
    description: "health: -10, fun: -10",
    affect: { health: -10, fun: -10 },
    eventEmoji: "🐝"
  },
  {
    name: "Pet Visited a Park",
    description: "social: +25, fun: +25",
    affect: { social: +25, fun: +25 },
    eventEmoji: "🌳"
  },
  {
    name: "Pet Attended a Pet Show",
    description: "social: +30, fun: +20, points: -10, energy: -15",
    affect: { social: +30, fun: +20, points: -10, energy: -15 },
    eventEmoji: "🤡"
  },
  {
    name: "Pet Had a Sunny Day",
    description: "energy: +10, fun: +10",
    affect: { energy: +10, fun: +10 },
    eventEmoji: "🌞"
  },
  {
    name: "Pet Learned a New Game",
    description: "fun: +25, points: +15",
    affect: { fun: +25, points: +15 },
    eventEmoji: "🎮"
  },
  {
    name: "Pet have got a medical treatment",
    description: "health: +20, points: -5",
    affect: { health: +20, points: -5 },
    eventEmoji: "💊"
  },
  {
    name: "Pet smoked marijuana",
    description: "health: 100, fun: 100, energy: -10",
    affect: { health: 100, fun: 100, energy: -10 },
    eventEmoji: "🌿"
  },
  {
    name: "Pet ate a mushroom",
    description: "health: -5, fun: +30, energy: +100",
    affect: { health: -5, fun: +30, energy: +10 },
    eventEmoji: "🍄"
  },
  {
    name: "Pet is heartbroken",
    description: "health: -5, fun: -10, social: -20",
    affect: { health: -5, fun: -10, social: -20 },
    eventEmoji: "❤️‍🩹"
  },
  {
    name: "Pet enjoyed a cosmetic treatment",
    description: "health: +10, points: -5, fun: +20, social: +15, hygiene: +20",
    affect: { health: +10, points: -5, fun: +20, social: +15, hygiene: +20 },
    eventEmoji: "💅"
  },
  {
    name: "Its CHRISTMAS!!",
    description: "fun: +30, social: +30, hygiene: +20, food: +20, weight: +1",
    affect: { fun: +30, social: +30, hygiene: +20, food: +20, weight: +1 },
    eventEmoji: "🎅"
  },
  {
    name: "Pet enjoyed eating some junkfood",
    description: "health: -5, fun: +20, weight: +1",
    affect: { health: -5, fun: +20, weight: +1 },
    eventEmoji: "🍔"
  },
  {
    name: "Pet enjoyed eating some sweets",
    description: "health: -5, fun: +20, social: +5, weight: +1",
    affect: { health: -5, fun: +20, social: +5, weight: +1 },
    eventEmoji: "🍭"
  },
  {
    name: "Pet attended an event",
    description:
      " health: +10, energy: -10, fun: +20,  social: +15, hygiene: +20, food: +20",
    affect: {
      health: +10,
      energy: -10,
      fun: +20,
      social: +15,
      hygiene: +20,
      food: +20
    },
    eventEmoji: "🥂"
  },
  {
    name: "Pet won a competition! Bravo!",
    description: "social: +10, points: +15, fun: +30, social: +25",
    affect: { social: +10, points: +15, fun: +30, social: +25 },
    eventEmoji: "🏆"
  },
  {
    name: "Pet is injured, auch!",
    description: "health: -10, fun: -10, hygiene: -10",
    affect: { health: -10, fun: -10, hygiene: -10 },
    eventEmoji: "🩹"
  },
  {
    name: "Pet hosts a good friend",
    description: "fun: +20, social: +25",
    affect: { fun: +20, social: +25 },
    eventEmoji: "☕"
  },
  {
    name: "Pet complete a diet program! It is skinnier and heathier now!",
    description: "un: +20, social: +20, health: +15, weight: -5",
    affect: { fun: +20, social: +20, health: +15, weight: -5 },
    eventEmoji: "🚴"
  },
  {
    name: "Your pet was burned by a jelly fish! Auch!",
    description: "fun: -10, health: -5",
    affect: { fun: -10, health: -5 },
    eventEmoji: "🪼"
  },
  {
    name: "Pet had a shopping day with you! Awesome!",
    description: "fun: +30, social: +25, food: +15, health: +5, energy: -10 ",
    affect: { fun: +30, social: +25, food: +15, health: +5, energy: -10 },
    eventEmoji: "🛍"
  },
  {
    name: "Pet had a chocolate! Yummyyyyyyy!",
    description: "fun: +20, health: -3, energy: +5, weight: +1",
    affect: { fun: +20, health: -3, energy: +5, weight: +1 },
    eventEmoji: "🍫"
  },
  {
    name: "Pet had a cake! Yummy!!",
    description: "fun: +20, energy: +5, toilet: -3, weight: +1, health: -3",
    affect: { fun: +20, energy: +5, toilet: -3, weight: +1, health: -3 },
    eventEmoji: "🍰"
  },
  {
    name: "Pet drank some Cola, until it finished the bottle! What a capacity :)",
    description: "fun: +20, energy: +5, toilet: -10, weight: +1, health: -3",
    affect: { fun: +20, energy: +5, toilet: -10, weight: +1, health: -3 },
    eventEmoji: "🥤"
  },
  {
    name: "Pet attended a karaoke event",
    description: "fun: +30, social: +25",
    affect: { fun: +30, social: +30, energy: -10 },
    eventEmoji: "🎤"
  },
  {
    name: "Pet has got a nice present from relatives",
    description: "fun: +30, social: +35, energy: +5",
    affect: { fun: +30, social: +35, energy: +5 },
    eventEmoji: "🎁"
  },
  {
    name: "Pet has graduated after finishing his studies in university! Mazal Tov!",
    description: " fun: +40, social: +35, energy: +15",
    affect: { fun: +40, social: +35, energy: +15 },
    eventEmoji: "🎓"
  },
  {
    name: "Your pet has been infected with fleas and pests. Shit!",
    description: "fun: -15, social: -15, hygiene: -20, health: -5, energy: -10",
    affect: { fun: -15, social: -15, hygiene: -20, health: -5, energy: -10 },
    eventEmoji: "☕"
  },
  {
    name: "Pet made love with another pet",
    description: "fun: +40, social: +40, hygiene: -10, health: +10",
    affect: { fun: +40, social: +40, hygiene: -10, health: +10 },
    eventEmoji: "💞"
  },
  {
    name: "Pet just saw a natural wonder",
    description: " fun: +25, social: +15",
    affect: { fun: +25, social: +15 },
    eventEmoji: "🌋"
  },
  {
    name: "Your toilet is clean again",
    description: " fun: +15, social: +15, hygiene: +30, toilet: +30",
    affect: { fun: +15, social: +15, hygiene: +30, toilet: +30 },
    eventEmoji: "🚽"
  },
  {
    name: "Pet has got a new haircut",
    description: " fun: +25, social: +25, hygiene: +25",
    affect: { fun: +25, social: +25, hygiene: +25 },
    eventEmoji: "💇‍♂️"
  },
  {
    name: "Pet drank too much alcohol and now it is drunk",
    description: " fun: +25, social: +15",
    affect: { fun: +25, social: +15 },
    eventEmoji: "🍸"
  },
  {
    name: "Your pet met a Djinny!",
    description: " fun: +35, social: +35, energy: +30, hygiene: +10",
    affect: { fun: +35, social: +35, energy: +30, hygiene: +10 },
    eventEmoji: "🧞"
  }
];
// Function to check and trigger a random event based on pet's age
// ? Function randomal events trigger
function checkAndTriggerRandomEvent() {
  // Check if the age is not zero and is a multiple of 7
  // Trigger event every 7 days
  if (age !== 0 && age % 7 === 0) {
    // Select a random event from the list of events
    const randomEvent =
      randomEvents[Math.floor(Math.random() * randomEvents.length)];
    // Log the details of the triggered random event
    console.log(
      colors.bgMagenta.black.bold(
        `Random Event after ${age} days: ${randomEvent.name} - ${randomEvent.description} ${randomEvent.eventEmoji}`
      )
    );
    // Apply the effects of the random event to the pet's needs
    for (let need in randomEvent.affect) {
      needs[need] += randomEvent.affect[need]; // Adjust the specified need
      if (needs[need] < 0) {
        needs[need] = 0; // Ensure needs don't go below 0
      } else if (needs[need] > 100) {
        needs[need] = 100; // Ensure needs don't exceed 100
      } else if (need === "health") {
        health += randomEvent.affect[need]; // Adjust health if affected
        if (health < 0) {
          health = 0; // Ensure health doesn't go below 0
        } else if (health > 100) {
          health = 100; // Ensure health doesn't exceed 100
        }
      } else if (need === "points") {
        points += randomEvent.affect[need]; // Adjust points if affected
        if (points < 0) {
          points = 0; // Ensure points don't go below 0
        }
      } else if (need === "weight") {
        weight += randomEvent.affect[need]; // Adjust weight if affected
        if (weight < 0) {
          weight = 0; // Ensure weight doesn't go below 0
        } else if (weight > 100) {
          weight = 100; // Ensure weight doesn't exceed 100
        }
      }
    }
  }
}
// Function to start the game and prompt user to choose an animal
// & Game main menu
// ? Function start game
function startGame() {
  // Greet the player with a colorful message
  console.log(colors.rainbow("Hello and welcome to the animals world!"));
  // Prompt the player to choose an animal
  console.log(
    colors.bold(
      "Please choose the animal you want to play with - press on a number between 0 to 9 accordingly:"
    )
  );
  // Display table of animals with corresponding emojis
  // ? Table animals choice emojis and numbers
  const animalsTable = new Table({
    head: [
      "0. 🐉",
      "1. 🐶",
      "2. 🐱",
      "3. 🐰",
      "4. 🐭",
      "5. 🐷",
      "6. 🐥",
      "7. 🐵",
      "8. 🦈",
      "9. 🦄"
    ],
    colWidths: [8, 8, 8, 8, 8, 8, 8, 8, 8, 9]
  });
  // Populate animal table with names corresponding to emojis
  // ? Table animals choice type
  animalsTable.push([
    "Dragon",
    "Dog",
    "Cat",
    "Bunny",
    "Mouse",
    "Pig",
    "Chick",
    "Monkey",
    "Shark",
    "Unicorn"
  ]);
  // ? Table printed on terminal
  console.log(colors.bgCyan.bold(animalsTable.toString())); // Display the animal table
  // Prompt user to enter their choice of animal
  rl.question("Enter your choice: ", (choice) => {
    let animalEmoji, animal;
    switch (choice.trim()) {
      // Assign emoji and name based on user's choice
      case "0":
        animalEmoji = "🐉";
        animal = "Dragon";
        console.log(`You chose Dragon! 🔥🔥🔥! ${animalEmoji}`);
        break;
      case "1":
        animalEmoji = "🐶";
        animal = "Dog";
        console.log(`You chose Dog! Woof Woof! ${animalEmoji}`);
        break;
      case "2":
        animalEmoji = "🐱";
        animal = "Cat";
        console.log(`You chose Cat! Meow! ${animalEmoji}`);
        break;
      case "3":
        animalEmoji = "🐰";
        animal = "Bunny";
        console.log(`You chose Bunny! Hop Hop! ${animalEmoji}`);
        break;
      case "4":
        animalEmoji = "🐭";
        animal = "Mouse";
        console.log(`You chose Mouse! Squeak Squeak! ${animalEmoji}`);
        break;
      case "5":
        animalEmoji = "🐷";
        animal = "Pig";
        console.log(`You chose Pig! Oink Oink! ${animalEmoji}`);
        break;
      case "6":
        animalEmoji = "🐥";
        animal = "Chick";
        console.log(`You chose baby Chick! Tweet Tweet! ${animalEmoji}`);
        break;
      case "7":
        animalEmoji = "🐵";
        animal = "Monkey";
        console.log(`You chose baby Monkey! Ooh Ooh Ah Ah! ${animalEmoji}`);
        break;
      case "8":
        animalEmoji = "🦈";
        animal = "Shark";
        console.log(`You chose a Shark! Yum Yum! ${animalEmoji}`);
        break;
      case "9":
        animalEmoji = "🦄";
        animal = "Unicorn";
        console.log(`You chose a Unicorn! Whinny! ${animalEmoji}`);
        break;
      default:
        console.log(`Invalid choice! Please enter a number between 0 and 9.`);
        startGame(); // Restart game if choice is invalid
        return;
    }
    // Prompt user to enter a name for their chosen animal
    rl.question(
      `You chose ${animalEmoji} ${animal}! What would you like to name your ${animal}? `,
      (name) => {
        // Check if the name contains only letters
        if (!isValidName(name)) {
          console.log("Invalid name! Please enter only letters.");
          startGame(); // Restart game if name is invalid
          return;
        }
        console.log(`Great! Your ${animalEmoji} ${animal}'s name is ${name}.`);
        console.log("\n");
        // Displaying game instructions and information
        console.log(
          colors.bgBlue.bold(
            `Here are some care instructions for your ${animalEmoji} ${animal} named ${name}:`
          )
        );
        // Display general care instructions and key actions for the game
        console.log(
          colors.bgRed.yellow.bold(
            "Your animal has 7 important needs you should pay attention to and take an action:\n🍲 Food (1), 🔋 Energy (2), 🚽 Toilet (3), 🎉 Fun (4), 🚿 Hygiene(5), 🤝 Social(6) and 🚴‍♀️ Sport(7).\n If you wish to stop the game, press 9.\n📖It is very recommended to read the README file attached to the game, the explanation and information is more detailed and organized there.📚"
          )
        );
        // Explain the mood parameter and its importance
        console.log(
          "There is also a mood parameter (🎭 Mood) which is the average of all the needs and will indicate you if your pet needs help and attention."
        );
        // Explain the consequences of needs dropping to critical levels
        console.log(
          colors.bgRed.yellow.bold(
            "The range of the needs is between 0 to 100, when one of the needs reaches to 0, your animal will die."
          )
        );
        console.log(
          "The sport need requires special attention, it can improve the needs of the animals and even acuire some skills for your pet, but it demands a lot of investment from your pet.\n It means that when you choose to train, the needs of your pet should be full so it will not die due to exhaustion."
        );
        // Provide guidance on interpreting high and low needs levels
        console.log(
          "You should consider your care according to the needs table you will see after every step you are going to do.\nWhen the needs of your animal are less than 25, you will be notified about it.\nWhen the needs of your animal are above 85, you will get a complement."
        );
        // Explain the health system and its importance
        console.log(
          colors.bgRed.yellow.bold(
            "You need to pay attention to the health of the pet, when the needs of your pet are lower than 50, you will lose a health point.\nWhen the health of your pet is 0, your pet will die."
          )
        );
        // Describe the point system and its benefits
        console.log(
          "During the game you can collect points every time when you fulfill a need or having birthday.\nEvery 30 points will increase your pet's health by 1."
        );
        // Message informing the user about the vacation feature. Explaining that the quality of the hotel depends on the number of points
        console.log(
          colors.bold.bgWhite.black(
            "You can refill the needs of you pet quickly by choosing '8' and sending you pet to hotel. The more points you have, the better and luxurious the hotel will be.\n Note: a vacation is not something you must do. Just like the sport *skills*, it is like a bonus and lacking of vacations will not affect your pets needs."
          )
        );
        // Explain the interdependence of needs
        console.log(
          "Keep in mind that every need you refill might decrease other needs.\nFor example, when you feed your pet, it will need to use the toilet more urgently. The same applies to sleep and fun needs."
        );
        // Explain aging and birthday celebrations
        console.log(
          "Your pet will grow by 1 day every 10 seconds. Every 10 days your pet will have a birthday."
        );
        // Describe the automatic decrease or gaining weight
        console.log(
          "Your pet can gain or lose weight, dont overfeed you pet and make sure you weignt will not be more or less than 10 than your age."
        );
        // Describe the automatic decrease in needs over time
        console.log(
          "Keep in mind that every 3 seconds, the needs are decreasing automatically."
        );
        // Provide information about exiting the game
        console.log(
          colors.bgRed.bold.black(
            "You can leave the game any time by pressing on `Ctrl + Z`."
          )
        );
        // Offer a recommendation for terminal usage to enhance gameplay visibility
        console.log(
          colors.bold(
            "It is reommended to use the terminal in a height of 70% of the screen for better view of the game and your progress in it."
          )
        );
        // Print a blank line for separation
        console.log("\n");
        // Inform the user that the game is about to start
        console.log("Ready? Let's start!");
        // Wait for user input to continue the game
        rl.question("Press ´Enter´ to continue 💻", () => {
          // After user input, indicate that the game is starting
          console.log("Awesome! Starting the game...\n");
          // Function to calculate the pet's mood based on its needs and health
          // ? Function calculate mood
          function calculateMood() {
            // Calculate the average mood based on various needs and health
            return (
              (needs.food + // Add food need
                needs.energy + // Add energy need
                needs.toilet + // Add toilet need
                needs.fun + // Add fun need
                needs.hygiene + // Add hygiene need
                needs.social + // Add social need
                needs.sport + // Add sport need
                health) / // Add health status
              8 // Divide by the total number of factors (6 needs + 1 health)
            );
          }
          // Function to display needs of the pet
          // ? Function display needs
          function displayNeeds() {
            let mood = calculateMood(); // Calculate the pet's mood
            let updatedStatus = checkWeightStatus(weight, age); // Ensure weight status is updated
            console.log(
              colors.bold.green.bold(
                `🔨 Current skills of your pet ${animalEmoji} ${name}: `
              )
            );
            console.log(skillsTable.toString());
            // Create a new table for user affect parameters
            // ? Table animals needs values and status columns
            const table = new Table({
              head: [
                colors.bold.bgMagenta("Number"), // Column header for Number with magenta background
                colors.bold.bgMagenta("Need"), // Column header for Need with magenta background
                colors.bold.bgMagenta("Value"), // Column header for Value with magenta background
                colors.bold.bgMagenta("Status") // Column header for Status with magenta background
              ],
              colWidths: [10, 15, 10, 10] // Setting column widths for Number, Need, Value, and Status
            });
            // Adding rows to the table for each need
            // ? Table animals needs values and status rows
            table.push(
              // Row for Food need
              ["1", "🍲 Food", `${needs.food}`, `${getEmoji(needs.food)}`],
              // Row for Energy need
              [
                "2",
                "🔋 Energy",
                `${needs.energy}`,
                `${getEmoji(needs.energy)}`
              ],
              // Row for Toilet need
              [
                "3",
                "🚽 Toilet",
                `${needs.toilet}`,
                `${getEmoji(needs.toilet)}`
              ],
              // Row for Fun need
              ["4", "🎉 Fun", `${needs.fun}`, `${getEmoji(needs.fun)}`],
              // Row for Hygiene need
              [
                "5",
                "🚿 Hygiene",
                `${needs.hygiene}`,
                `${getEmoji(needs.hygiene)}`
              ],
              // Row for Social need
              [
                "6",
                "🤝 Social",
                `${needs.social}`,
                `${getEmoji(needs.social)}`
              ],
              ["7", "🏉 Sport", `${needs.sport}`, `${getEmoji(needs.sport)}`]
            );
            console.log(`Current needs of your pet ${animalEmoji} ${name}: `); // Displaying current pet's needs
            // ? Table printed on terminal
            console.log(table.toString()); // Outputting the table of needs
            // Checking if all needs are above 85
            if (Object.values(needs).every((need) => need > 85)) {
              console.log(colors.bold("\n🌟 You are a great parent! 🌟")); // Complimenting the player
            }
            // Create a table for authomatic parameters
            // ? Table affected automatic needs
            const additionalTable = new Table({
              head: [
                colors.bold.bgYellow("Parameter"), // Column header for Parameter with yellow background
                colors.bold.bgYellow("Value"), // Column header for Value with yellow background
                colors.bold.bgYellow("Status") // Column header for Status with yellow background
              ],
              colWidths: [15, 15, 10] // Setting column widths for Parameter, Value, and Status
            });
            // Adding rows to the additionalTable
            // ? Table values affected automatic needs
            additionalTable.push(
              ["🎭 Mood", `${mood.toFixed(2)}`, `${getEmoji(mood)}`], // Row for Mood parameter
              ["🩺 Health", `${health}`, `${getEmoji(health)}`], // Row for Health parameter
              ["👵 Age", `${age} days`, `${getAgeEmoji(age)}`], // Row for Age parameter
              ["💰 Points", `${points}`, `${getPointsEmoji(points)}`], // Row for Points parameter
              ["🏋️‍♂️ Weight", `${weight}`, `${getWeightEmoji(updatedStatus)}`], // Row for Weight parameter
              ["🌅 vacations", `${vacations}`, `${getVacationEmoji(vacations)}`] //  Row for Vacations counter
            );
            // Outputting the additionalTable in string format
            // ? Table printed on terminal
            console.log(additionalTable.toString());
          }
          checkAndTriggerRandomEvent();
          // Function to check if any need is below 25
          // ? Function check needs
          function checkNeeds() {
            for (const need in needs) {
              if (needs[need] < 25) {
                console.log(
                  colors.bgRed.bold(
                    `Warning! ${need} is below 25! ${getEmoji(needs[need])}`
                  )
                );
              }
            }
          }
          // Function to decrease needs every second
          // ? Function decrease needs
          function decreaseNeeds() {
            for (const need in needs) {
              needs[need] -= 1;
              if (needs[need] <= 0 || weight <= 0) {
                // Checks and prints why animal died
                console.log(
                  colors.bgRed.black.bold(
                    `Your pet ${name} has died at ${age} days due to your neglection😤. Your pet needed ${need}! 💀`
                  )
                );
                // Clear the interval associated with decreasing attributes (e.g., hunger, happiness)
                clearInterval(decreaseInterval);
                // Clear the interval associated with health-related updates
                clearInterval(healthInterval);
                // Clear the interval associated with age-related updates
                clearInterval(ageInterval);
                // Clear the interval associated with health bonus updates
                clearInterval(healthBonusInterval);
                // Clear the interval that updates the weight display
                clearInterval(weightInterval);
                // Clear the interval that reports weight data
                clearInterval(weightReportInterval);
                // Close the readline interface, terminating the program or process
                rl.close();
              }
            }
            checkNeeds();
            displayNeeds();
          }
          // Function to decrease health every second if needs are low
          // ? Function decrease health
          function decreaseHealth() {
            // Check if any need is below 50
            if (Object.values(needs).some((need) => need < 50)) {
              health -= 1; // Decrease health by 1
              if (health <= 0) {
                // If health drops to 0 or below, pet dies
                console.log(
                  colors.bgRed.black.bold(
                    `Your pet ${name} has died due to poor health! 💀`
                  )
                );
                // Optionally, you may want to clear intervals and end the game here
                // Clear the interval associated with decreasing attributes (e.g., hunger, happiness)
                // This stops the automatic decrement of various attributes such as food, fun, or other related metrics.
                clearInterval(decreaseInterval);
                // Clear the interval associated with health-related updates
                // This halts the automatic updates or changes to the health attribute of the pet, preventing further health adjustments.
                clearInterval(healthInterval);
                // Clear the interval associated with age-related updates
                // This stops the automatic increment of the pet's age, pausing any aging processes.
                clearInterval(ageInterval);
                // Clear the interval associated with health bonus updates (if applicable)
                // This stops the automatic application of any health bonuses or related changes.
                clearInterval(healthBonusInterval);
                // Clear the interval associated with weight updates
                // This prevents any further automatic adjustments or updates to the pet's weight.
                clearInterval(weightInterval);
                // Clear the interval associated with weight report updates
                // This stops the automatic generation of weight-related reports or updates
                clearInterval(weightReportInterval);
                // Close the readline interface, terminating the program or process
                rl.close(); // Close readline interface
                return;
              }
            }
          }
          // Function to increase age by 1 day every 10 seconds
          // ? Function increase age
          function increaseAge() {
            age += 1;
            weight += 1;
            checkAndTriggerRandomEvent(); // Checks if 7 days past for randomal events
            if (age % 100 === 0) {
              // Check if age reached to a century
              points += 30; // Add 30 points as a gift for a century
              console.log(
                colors.bgMagenta.bold.white(
                  "Congratulations!✨ Your pet lives over a century!🎊 "
                )
              );
            }
            if (age % 10 === 0) {
              // Checks id age had past a decade
              points += 5; // Bonus of 5 points if reached a decade
              console.log(
                `🎈 Happy Birthday to ${name}!🥳 ${name} is now ${age} days old! 🎈🎉`
              );
            }
          }
          // Function to increase health based on points
          // ? Function increase health
          function increaseHealth() {
            // Increase health if points are sufficient and health is not at maximum
            if (points > 30 && health <= 90) {
              health += 10;
              points -= 15;
              console.log(
                colors.bold.magenta(
                  "Your pet has got a treatment and feel better now ⚕"
                )
              );
            }
            // Check health status and inform the user for every change
            if (health >= 90) {
              // Health status: Healthy and strong
              console.log(
                colors.white.bold("Your pet is healthy and strong 💪")
              );
            } else if (health >= 70 && health < 90) {
              // Health status: Attention required (mild)
              console.log(colors.white.bold("Attention required 🤧"));
            } else if (health >= 50 && health < 70) {
              // Health status: Attention required, pet is getting sick
              console.log(
                colors.white.bold(
                  "Attention required - your pet is getting sick 🥴"
                )
              );
            } else if (health >= 25 && health < 50) {
              // Health status: Pet is sick, take actions faster
              console.log(
                colors.black.bgYellow.bold(
                  "Your pet is sick. Please take actions faster 🤢"
                )
              );
            } else if (health > 0 && health < 25) {
              // Health status: Pet is dying
              console.log(
                colors.bgRed.bold.black("😩 Your pet is dying!!! 😵")
              );
            }
            // Ensure points never go negative
            if (points < 0) {
              points = 0;
            }
          }

          // Start decreasing needs, health and increasing age
          // Start decreasing needs (e.g., hunger, happiness) every 3 seconds
          const decreaseInterval = setInterval(decreaseNeeds, 3000);
          // Start checking health every 3 seconds
          const healthInterval = setInterval(decreaseHealth, 3000);
          // Start increasing health periodically every 3 seconds (health bonus)
          const healthBonusInterval = setInterval(() => {
            increaseHealth();
          }, 3000);
          // Start increasing age every 10 seconds
          const ageInterval = setInterval(increaseAge, 10000);
          // Set an interval to periodically check weight status every 3 seconds
          const weightInterval = setInterval(() => {
            checkWeightStatus();
          }, 3000);
          // Set an interval to periodically fetch weight affects every 3 seconds
          const weightReportInterval = setInterval(() => {
            getWeightAffects();
          }, 3000);
          // Function to display menu and handle user input
          // ? Function display menu
          function displayMenu() {
            rl.question("Enter your choice: \n", (action) => {
              switch (action.trim()) {
                case "1":
                  // Option 1: Feed the animal
                  // Increase food and decrease other needs as the animal is fed
                  needs.food = Math.min(needs.food + 30, 100);
                  needs.toilet = Math.max(needs.toilet - 10, 0);
                  needs.energy = Math.max(needs.energy - 5, 0);
                  points++; // Increase points for feeding
                  // Additional checks for specific conditions
                  if (needs.food === 100) {
                    points++; // Bonus points if food is full
                  }
                  if (needs.food >= 100) {
                    weight++; // Increase weight if food is full
                  }
                  if (needs.food <= 30) {
                    weight--; // Decrease weight if food is very low
                  }
                  // ? Function checks the weight status
                  // Check and update weight status
                  checkWeightStatus(weight, age);
                  console.log(colors.bgCyan.bold(`${name} has been fed.😋`));
                  break;
                case "2":
                  // Option 2: Animal takes a nap
                  // Increase energy and other needs while the animal naps
                  needs.energy = Math.min(needs.energy + 30, 100);
                  needs.toilet = Math.max(needs.toilet - 5, 0);
                  needs.food = Math.max(needs.food - 5, 0);
                  needs.hygiene = Math.max(needs.hygiene - 5, 0);
                  needs.fun = Math.min(needs.fun + 5, 100);
                  points++; // Increase points for napping
                  if (needs.energy === 100) {
                    points++; // Bonus points if energy is full
                  }
                  console.log(colors.bgBlue.bold(`${name} has taken a nap.💤`));
                  break;
                case "3":
                  // Option 3: Animal uses the toilet
                  // Increase toilet need and adjust other needs
                  needs.toilet = Math.min(needs.toilet + 30, 100);
                  needs.food = Math.max(needs.food - 5, 0);
                  needs.hygiene = Math.max(needs.hygiene - 10, 0);
                  points++; // Increase points for using the toilet
                  if (needs.toilet === 100) {
                    points++; // Bonus points if toilet need is full
                  }
                  console.log(
                    colors.bgGreen.bold(`${name} has used the toilet.💩`)
                  );
                  break;
                case "4":
                  // Option 4: Animal has fun
                  // Increase fun and adjust other needs
                  needs.fun = Math.min(needs.fun + 30, 100);
                  needs.energy = Math.max(needs.energy - 10, 0);
                  needs.toilet = Math.max(needs.toilet - 5, 0);
                  needs.food = Math.max(needs.food - 10, 0);
                  needs.social = Math.min(needs.social + 10, 100);
                  needs.hygiene = Math.max(needs.hygiene - 5, 0);
                  points++; // Increase points for having fun
                  if (needs.fun === 100) {
                    points++; // Bonus points if fun is full
                  }
                  console.log(
                    colors.bgMagenta.bold(`${name} is having fun.🎡`)
                  );
                  break;
                case "5":
                  // Option 5: Animal takes a shower
                  // Increase hygiene and other needs while the animal showers
                  needs.hygiene = Math.min(needs.hygiene + 30, 100);
                  needs.energy = Math.min(needs.energy + 5, 100);
                  needs.toilet = Math.min(needs.toilet + 5, 100);
                  needs.fun = Math.min(needs.fun + 5, 100);
                  points++; // Increase points for taking a shower
                  if (needs.hygiene === 100) {
                    points++; // Bonus points if hygiene is full
                  }
                  console.log(
                    colors.bgBlue.bold(`${name} has taken a shower.💦`)
                  );
                  break;
                case "6":
                  // Option 6: Animal socializes
                  // Increase social interaction and adjust other needs
                  needs.social = Math.min(needs.social + 30, 100);
                  needs.fun = Math.min(needs.fun + 10, 100);
                  needs.energy = Math.max(needs.energy - 10, 0);
                  needs.toilet = Math.max(needs.toilet - 5, 0);
                  console.log(
                    colors.bgMagenta.bold(`${name} is socializing.🧑‍🤝‍🧑`)
                  );
                  points++; // Increase points for socializing
                  if (needs.social === 100) {
                    points++; // Bonus points if social need is full
                  }
                  break;
                case "7":
                  // Option 7: Animal trains and gain skills
                  // Increase sport and fun, decrease energy and other needs
                  needs.sport = Math.min(needs.sport + 10, 100);
                  needs.fun = Math.min(needs.fun + 30, 100);
                  needs.energy = Math.max(needs.energy - 20, 0);
                  needs.toilet = Math.max(needs.toilet - 15, 0);
                  needs.food = Math.max(needs.food - 15, 0);
                  needs.social = Math.min(needs.social + 15, 100);
                  needs.hygiene = Math.max(needs.hygiene - 15, 0);
                  weight--; // Decrease weight due to training
                  health = health + 5; // Improve health with training
                  colors.bgBlue.bold(`${name} has a great training!.🏋️‍♀️`);
                  // Check if enough points to gain a new skill
                  if (points >= 30) {
                    points = points - 20;
                    newSkills[currentSkillIndex] =
                      sportSkills[currentSkillIndex];
                    skillsTable.push([
                      newSkills[currentSkillIndex],
                      sportSkillsEmoji[currentSkillIndex]
                    ]);
                    console.log(
                      colors.bold.bgMagenta.black(
                        `Congratulations! your pet has gained a new ${newSkills[currentSkillIndex]} skill!  ${sportSkillsEmoji[currentSkillIndex]}`
                      )
                    );
                    currentSkillIndex++;
                    health = health + 15; // Increase health due to new skill
                    points++; // Additional point for gaining a new skill
                    needs.sport = Math.min(needs.sport + 50, 100);
                    needs.fun = Math.min(needs.fun + 50, 100);
                  } else if (points < 30) {
                    console.log(
                      colors.bold.bgRed.black(
                        "Sorry, you dont have enough points to gain a new skill 🤦"
                      )
                    );
                  }
                  // Bonus points and weight adjustment if sport is full
                  if (needs.sport === 100) {
                    points++;
                    weight--;
                  }
                  break;
                case "8":
                  // Option 8: Animal goes on vacation
                  if (points > 100) {
                    console.log(
                      colors.bgCyan.black.bold(
                        "Wow! Your pet is having a vacation in a castle.🏰 What an amazing achievment!😁"
                      )
                    );
                    points = points - 80;
                    vacations++;
                    // Refill all needs to maximum
                    needs.hygiene = Math.min(needs.hygiene + 100, 100);
                    needs.energy = Math.min(needs.energy + 100, 100);
                    needs.toilet = Math.min(needs.toilet + 100, 100);
                    needs.fun = Math.min(needs.food + 100, 100);
                    needs.social = Math.min(needs.social + 100, 100);
                    needs.sport = Math.min(needs.sport + 100, 100);
                    needs.food = Math.min(needs.food + 100, 100);
                  } else if (points > 80) {
                    console.log(
                      colors.bgCyan.black.bold(
                        "Wow! Your pet is having a vacation in a love hotel.🏩 What an amazing achievment!😁"
                      )
                    );
                    points = points - 60;
                    vacations++;
                    // Refill most needs to a high level
                    needs.hygiene = Math.min(needs.hygiene + 80, 100);
                    needs.energy = Math.min(needs.energy + 80, 100);
                    needs.toilet = Math.min(needs.toilet + 80, 100);
                    needs.fun = Math.min(needs.food + 80, 100);
                    needs.social = Math.min(needs.social + 80, 100);
                    needs.sport = Math.min(needs.sport + 80, 100);
                    needs.food = Math.min(needs.food + 80, 100);
                  } else if (points > 60) {
                    console.log(
                      colors.bgCyan.black.bold(
                        "Wow! Your pet is having a vacation in a hotel.🏨 What an amazing achievment!😁"
                      )
                    );
                    // Refill needs to a moderate level
                    needs.hygiene = Math.min(needs.hygiene + 60, 100);
                    needs.energy = Math.min(needs.energy + 60, 100);
                    needs.toilet = Math.min(needs.toilet + 60, 100);
                    needs.fun = Math.min(needs.food + 60, 100);
                    needs.social = Math.min(needs.social + 60, 100);
                    needs.sport = Math.min(needs.sport + 60, 100);
                    needs.food = Math.min(needs.food + 60, 100);
                    points = points - 40;
                    vacations++;
                  } else {
                    // Not enough points for a vacatoin, notifies the user and get back to display needs.
                    console.log(
                      colors.bold.bgRed.black(
                        "Sorry, you dont have enough points to go on vacation. Keep working and try again later 🫶"
                      )
                    );
                  }
                  break;
                // * Testing commands, only for checking different statuses in the game
                // ? Test test
                case "t": // Testing and chaging several elements at once
                  points += 300;
                  weight += 5;
                  age += 3;
                  break;
                case "w": // Testing and chaging weight parameter by increasing it
                  weight += 5;
                  break;
                case "u": // Testing and chaging weight parameter by decreasing it
                  weight -= 5;
                  break;
                case "p": // Testing and chaging points parameter by increasing it
                  points += 100;
                  break;
                case "a": // Testing and chaging age of pet by increasing it
                  age += 3;
                  break;
                case "h": // Testing and chaging health of pet by decreasing it
                  health -= 10;
                  break;
                case "n": // Testing and chaging all user controlable needs of pet by increasing it to 100 (Max)
                  needs.food = 100;
                  needs.toilet = 100;
                  needs.energy = 100;
                  needs.hygiene = 100;
                  needs.fun = 100;
                  needs.social = 100;
                  needs.sport = 100;
                  break;
                // * Tesing ends here. Regular continuation of the code - not a testing part.
                case "9":
                  // Option 9: Quit the game
                  // Stop all ongoing intervals to exit the game
                  // Stop the interval that periodically decreases the pet's attributes (e.g., hunger, happiness)
                  // This prevents automatic reductions in various attributes such as food, fun, or other related metrics.
                  clearInterval(decreaseInterval);
                  // Stop the interval that updates the pet's health periodically
                  // This halts any ongoing health-related updates, stopping automatic health adjustments or checks.
                  clearInterval(healthInterval);
                  // Stop the interval that increments the pet's age over time
                  // This prevents the automatic increase of the pet's age, pausing any aging processes.
                  clearInterval(ageInterval);
                  // Stop the interval that applies health bonuses periodically, if applicable
                  // This prevents any automatic application of health bonuses or related updates.
                  clearInterval(healthBonusInterval);
                  // Stop the interval that updates the pet's weight periodically
                  // This prevents any automatic changes or updates to the pet's weight.
                  clearInterval(weightInterval);
                  // Stop the interval that generates weight-related reports or updates periodically
                  // This halts the automatic production of weight status reports or updates.
                  clearInterval(weightReportInterval);
                  // Display exit message
                  // Display exit message and close readline interface after a short delay
                  console.log(colors.rainbow("Exiting the game...Bye bye"));
                  console.log("👋 🙋 👋");
                  // Close readline interface after 3 seconds delay
                  setTimeout(() => {
                    rl.close();
                  }, 3000);
                  return;
                default:
                  // Handle invalid choices
                  console.log(
                    "Invalid choice! Please enter a number between 1 and 8, or 9 to quit."
                  );
              }
              setTimeout(() => {
                // Display current needs after 3 seconds
                displayNeeds();
                // If action is not "9", display the menu again after 3 seconds
                if (action.trim() !== "9") {
                  displayMenu();
                }
              }, 3000);
            });
          }
          // Initial display of needs and starting the game
          displayNeeds();
          displayMenu();
        });
      }
    );
  });
}
// Start the game
startGame();
// Close readline interface on 'close' event
rl.on("close", () => {
  // Display a thank you message when the game is closed
  console.log(colors.bgWhite.magenta.bold("Thank you for playing! 🥰"));
  process.exit(0);
  // Exit the process gracefully
});
