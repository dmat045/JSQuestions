// 1. What are the results of these expressions ? (answer first, then use console.log() to check) correct

// "" + 1 + 0         // "10"
// "" - 1 + 0         // -1
// true + false       // 1
// !true              // false
// 6 / "3"            // 2
// "2" * "3"          // 6
// 4 + 5 + "px"       // "9px"
// "$" + 4 + 5        // "$45"
// "4" - 2            // 2
// "4px" - 2          // NaN
// " -9 " + 5         // " -9 5"
// " -9 " - 5         // -14
// null + 1           // 1
// undefined + 1      // NaN
// undefined == null  // true
// undefined === null // false
// " \t \n" - 2       // -2



// 2. Which of the below are not giving the right answer ? Why are they not correct ? How can we fix them ?
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?

let addition = 0; //if you want to re-use the variable, initiate it like this and dont add the "let" keyword to the next value. or Easy, just use a different name for your variable. :)

    addition = three + four // 34

console.log(addition);


let multiplication = 0;   // 3*4
    multiplication = three * four
console.log(multiplication);


let division = three / four         // 0.75 correct
console.log(division);


let subtraction = three - four      // -1 correct
console.log(subtraction);



let lessThan1 = three < four        // true correct
console.log(lessThan1);

let lessThan2 = thirty < four       // false correct

    addition = three + four        //are reading it as a string rather than numbers.To fix the issue you would need to use parseInt() to convert the string to a number.

    addition = parseInt(three) + parseInt(four) // correct


    addition = three + four
    addition = parseInt(three) + parseInt(four)             // 7
    multiplication = parseInt(three) * parseInt(four)    // 12  *please when you submit the lab uploaded the repo, make sure its not throwing errors. and the methods are clean, without unnecessary characters.



// // 3. Which of the following console.log messages will print ? Why ?

if (0) console.log('#1 zero is true')           // will not print because if(0) will be false
if ("0") console.log('#2 zero is true')         // will print because if ("0") is string and not empty.
if (null) console.log('null is true')           // will not print because if(null) is false
if (-1) console.log('negative is true')         // will print because if(-1) is true, so the statement is true.
if (1) console.log('positive is true')          // will print because if(1) is true, and the statement is true.



// // 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;

let result = `${a} + ${b} is `;

// if (a + b < 10) {
// result += 'less than 10';

// } else {

// result += 'greater than 10'

// }




//not sure how to do that   *solution below:

result +=  (a + b < 10) ? 'less than 10' : 'greater than 10';

console.log(result);


// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
//         return 'Hello ' + name + '!';
//     }


// A)
// function expression syntax,

// const getGreeting = function(name) {
//     return 'Hello ' + name + '!';
//   };




// // b) arrow function syntax.
// const getGreeting = (name) => {
//     return 'Hello ' + name + '!';
//   };

//   console.log(getGreeting("Daniel"));

  // 6. a) Complete the inigo object by adding a lastName property and including it in the greeting.

  // b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
  // HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.


  // c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

  // const getCatchPhrase = (person) => person.numFingers === 6 ? "I am Inigo Montoya, you killed my father, prepare to die!" : "Nice to meet you."

//reserved keywords are case sensitive
const westley = {
    name: 'Westley',
    numFingers: 5
}

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', // adding lastName

    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; //lastName added
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers == 6 ? 'You killed my father. Prepare to die' : 'Nice to meet you.'
}

console.log(inigo.greeting(westley))
console.log(inigo.greeting(rugen))


// // 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// // a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
// // b) Add a new method to print the full time final score
// // c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
// // d) Test your object by chaining all the method calls together in different combinations.


//dont forget to return the data :-)
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    halfTime() {
        console.log('Halftime score is '+this.score);
        return this;
    },
    fullTime() {
        console.log(
          "Final score is " + this.score + " (" + this.fouls + " fouls)."
        )
          return this;
    }
}

//modify each of the above object methods to enable function chaining as below:
console.log(basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime());


// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
function printCity(obj) {
    for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  // const sydney = {
  //   name: 'Sydney',
  //   population: 5_121_000,
  //   state: 'NSW',
  //   founded: '26 January 1788',
  //   timezone: 'Australia/Sydney'
  // };

// printCity(sydney);


// b) Create a new object for a different city with different properties and call your function again with the new object.


// *this is not wrong, but you you dont need to define the function again, as you already did above. just need to call them down below

const newCity = {
    name: 'Auckland',
    population: 1_750_236,
    state: 'Auckland',
    founded: '1840',
    timezone: 'NZDT/Auckland'
  };

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

//call them down here, and just pass the objects
console.log(printCity(sydney))
console.log(printCity(newCity))

// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)

let teamSports = ["Hockey", "Cricket", "Volleyball"]; //you didnt include this, theres no array to push your new sports
let moreSports = [...teamSports];
moreSports.push('Baseball', 'Rugby');
moreSports.unshift('Soccer');

// b) Create a new dog2 variable equal to dog1 and give it a new value
let dog1 = "Bingo" // *you didnt define dog 1
let dog2 = dog1;
dog2 = 'Max';


// c) Create a new cat2 variable equal to cat1 and change its name property
let cat1 = {name: "meowsy", breed: "great cat"} // *you didn't define cat1 and put in an object
let cat2 = cat1;
cat2.name = 'Whiskers';

console.log(dog1);
console.log(cat1)


// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
console.log(moreSports); // ['Hockey', 'Cricket', 'Volleyball'] *its actually let teamSports = ['Hockey', 'Cricket', 'Volleyball'], because you logged teamSports instead of moreSports wc you already passed the values to.

console.log(dog1); // 'Bingo' //*you didnt define your dog1
console.log(cat1); // { name: 'Fluffy', breed: 'Siberian' } //*theres no object in your cat1

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
// let moreSports = [...teamSports, 'Baseball', 'Rugby'];
// moreSports.unshift('Soccer');

// let cat2 = {...cat1, name: 'Whiskers'};


// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };


// 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.
// function Person(name, age) {
// this.name = name;
// this.age = age;
// this.human = true;
// }

// *Solution below

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = () => this.age >= 16;
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 24);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}

let person3 = new Person("James", 10);

console.log(person1);
console.log(person2);
console.log(person3);

if (person1.canDrive())
  console.log(
    person1.name + " is " + person1.age + " and is old enough to drive"
  );
if (person2.canDrive())
  console.log(
    person2.name + " is " + person2.age + " and is old enough to drive"
  );
if (person3.canDrive())
  console.log(
    person3.name + " is " + person3.age + " and is old enough to drive"
  );


// you got 7 out of 9. Still a great Job, one piece of advice is to make sure the code is neat, easy to read. Copanies dig those. :)