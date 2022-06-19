console.log(countries);

// Declare a function fullName and it print out your full name.
function fullName (){
    console.log ("Adenuga Adesanya")
}
fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function ffullName (firstName, lastName){
    
    console.log(firstName, lastName);
}
ffullName("Adenuga", "Adesanya");

// approach 2 
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function sumNum(num1, num2){
    sum = num1 + num2;
    return sum;
}
console.log(sumNum (5,4));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(Month){
    if (Month === "January" || Month === "February"){
        return("Autumn");
    }
}
console.log(checkSeason("February"));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(par1, par2, par3){
    if (par1 > par2 || par1 > par3){
        return par1
    } else {
        return par2
    }
}
console.log(findMax(3,4,5));

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation (a, b, c){
   /* let b2 = Math.pow(b, 2);
    let b3 = b2 - (4 * a * c);
    let b4 = Math.sqrt(b2);
    let b5 = Math.sqrt(4*a*c);
    let b6 = b4 - b5; //square root of b2 - 4ac
    let a2 = 2 * a; // 2a
    let x1 = (-b + b6) / a2;
    let x2 = (-b - b6) / a2;
    console.log(x1, x2) */ 
    let result = (1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let result2 = (1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    
    return (Math.floor(result) + "<br>" + Math.floor(result))
}

console.log(solveQuadEquation(1, 7, 12));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array
function printArray (parr){
    const mnewArr = [parr];
    console.log(typeof(mnewArr))
    for (const item of parr) {
        console.log(item);
    }

}
console.log(printArray(countries))

// Case study for the task above
function changeToUpperCase (arr) {
    const newArr = []
    console.log(typeof(newArr))
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
 // const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries));

  