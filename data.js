/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'Nola';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
animal[0] = 'bark';
noises.unshift('cry');
noises.push('howl');
noises[noises.length] = 'whining';
console.log(noises[noises.length]);
console.log(noises[noises.length-1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
noises.push("Snort");
noises.push("Moan");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * using methods
 * 2. What are the different ways of accessing elements on arrays?
 *using the index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { 
species: 'duck', 
name: 'Jerome', 
noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);
console.log(animals);

var cat = {
species: 'cat', 
name: 'Chase', 
noises: ['purr', 'hiss', 'sneeze', 'meow'] 
};
animals.push(cat);
console.log(cat);

var bird=  {
species: 'bird', 
name: 'Darla', 
noises: ['chirp', 'wingbeat', 'buzz', 'whistle'] 
};
animals.push(bird);
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// I chose an array because it's strings and I can access each friend at each index.
function getRandom(arr){
  return Math.floor(Math.random() * arr.length);
}
var randomIndex = getRandom(animals);
friends.push(animals[randomIndex].name);
console.log(friends);
var randomAnimalIndex = getRandom(animals);
animals[randomAnimalIndex]['friends'] = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}