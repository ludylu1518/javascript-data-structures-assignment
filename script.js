//START OF REVIEW

// As discussed in class, 2 of the most common and important
// data structures native to javascript: Arrays and Objects

//To review, an array is an ordered collection of data where each item is assigned
//an index starting from 0
//e.g.
let mySampleArray = ["Index 0", "Index 1", "Index 2"];

//An object, is used to store collections of data in a key-value pair format,
//where each key is a string (although quotes are optional for keys without spaces in them) and
//the values can be any data type

let mySampleObject = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

//END OF REVIEW

//START OF ASSIGNMENT
//Given what we just learned, your assignment is to create an array of objects!
//Set the myZooAnimals variable underneath this text to an array of objects that have the
//following keys:
//1. animalType
//2. name
//3. age
//4. pictureURl

//Hint: go to https://unsplash.com for some great, high-res pics and search up whatever animal you want!

//Make sure to make at least 3 animal objects with these keys inside of the myZooAnimals array!

let myZooAnimals = [];

let dog = {
  animalType: 'dog',
  name: 'Scott',
  age: 5,
  pictureURL: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
};

let cat = {
  animalType: 'cat',
  name: 'Kate',
  age: 3,
  pictureURL: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
}

let fish = {
  animalType: 'fish',
  name: 'Golden',
  age: 1,
  pictureURL: 'https://images.unsplash.com/photo-1625369708811-65ebfc5ca632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZGZpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
};

let turtle = {
  animalType: 'turtle',
  name: 'Todd',
  age: 25,
  pictureURL: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVydGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
};

myZooAnimals.push(dog);
myZooAnimals.push(cat);
myZooAnimals.push(fish);
myZooAnimals.push(turtle);

//END OF ASSIGNMENT
