console.log(countries)
// alert('Open the console and check if the countries has been loaded')
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
    Name: "Max",
    Legs: 4,
    Color: "Brown",
    Age: 5,
    bark: function () {
        return ("woof woof")
    } 
};
console.log(dog);

// Get name, legs, color, age and bark value from the dog object
console.log(dog.Name);
console.log(dog.Legs);
console.log(dog.Color);
console.log(dog.Age);
console.log(dog.bark());
 
// Set new properties the dog object: breed, getDogInfo
dog.breed = "German Shephered";
dog.getDogInfo = function () {
    return(`The name of my dog is ${this.Name}`);
}
console.log(dog)
console.log(dog.getDogInfo())

// Advance tasks
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  // Find the person who has many skills in the users object.
  let skillsNo =[ Object.keys(users.Paul.skills), 
                Object.keys(users.Thomas.skills)];
  console.log(skillsNo);

  // Count logged in users, count users having greater than equal to 50 points from the following object.
  console.log(users.hasOwnProperty('Paul'))

  const entries = Object.entries(users)
console.log(entries)

const values = Object.values(users)
console.log(values)

const keys = Object.keys(users)
console.log(values)
for (akey in keys){
    console.log(Object.values(users))
}

/*
const myObj = new Object(),
      str = 'myString',
      rand = Math.random(),
      anotherObj = new Object();
myObj.type              = 'Dot syntax for a key named type';
myObj['date created']   = 'This key is a string with a space';
myObj[str]              = 'This key is held in the variable str';
myObj[rand]             = 'A random number is the key here';
myObj[anotherObj]       = 'This key is the name of object anotherObj';
myObj['']               = 'This key is an empty string';

console.log( myObj);
console.log( myObj.myString )
*/

let myCar = new Object ()
let propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';

function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

showProps(myCar, "myCar")

 // Count logged in users, count users having greater than equal to 50 points from the following object.
 for (let u in users){
     
 }

 if (users.isLoggedIn === true){
    console.log(users)
}

