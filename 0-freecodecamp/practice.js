console.log(3 + 4);
//	methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

let variable = 1;
console.log(typeof variable);
let newVariable = 'text';
console.log(typeof newVariable);

/***********************************************/
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

/**************************************/
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);
/******************************/
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
/***********************************/
const city = 'New York City';
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
  console.log(logCitySkyline());
}
/**********************************************/
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(famousSayings[2]);

console.log(famousSayings[3]);
/************************************************/
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('one', 'two');
console.log(chores);
/************************************************/
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);
/************************************************/
for (let i = 5; i>=5 && i <= 10; i++) {
  console.log(i);
};
/************************************************/
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}
/******************Nested Loops******************************/
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};


/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
/************************************************/
