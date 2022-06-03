/* console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')
*/
/* console.log("HI")
const arr = Array()
console.log(arr)
arr[0] = "Heel"
console.log(arr) */

console.log(webTechs);
console.log(countries);

//1. Declare an empty array
const arr = Array();

//2. Declare an array with more than 5 number of elements
const arrayOf5Elements = [
    18,
    "Hello World",
    { Capital: "Ibadan", city: "Ikeja"},
    {talents: ["dancing", "singing"]},
    "I'm last"
];
console.log(arrayOf5Elements);

// 3. Find the length of your array
console.log("Length of arrayof5elements: " + arrayOf5Elements.length);

//4. Get the first item, the middle item and the last item of the array
console.log("The first item: " + arrayOf5Elements[0]);
console.log("The middle item: " + arrayOf5Elements[2]);
let lastOfArrayOf5Elements = arrayOf5Elements.length - 1;
console.log("The last index: " + arrayOf5Elements[lastOfArrayOf5Elements]);

//5. Declare an array called mixedDataTypes, put different data types in the 
// array and find the length of the array. The array size should be greater than 5
// Been answered 

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log("The first company: " + itCompanies[0]);
console.log("The middle item: " + itCompanies[3]);
let lastITComapnies = itCompanies.length - 1;
console.log("The last index: " + itCompanies[lastITComapnies]);

// 10. Print out each company

/* 11. Change each company name to uppercase one by one and print them out

} 
let eachIT = itCompanies.map(iTtoUpperCase);
function iTtoUpperCase(upit){
    return iTtoUpperCase(itCompanies[0]);
}
console.log(eachIT)

*/


// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log("12. Print array like a sentence: " + itCompanies.join(', ') + " are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found. 
if (itCompanies.includes('Google')){
    console.log("Google");
} else {
    console.log("Company not found")
};

// 14. Filter out companies which have more than one 'o' without the filter method - not solved
let doubleoo = itCompanies.filter(checkForDoubleOO);
function checkForDoubleOO(doo){
        if (itCompanies.includes("oo")){
            return i;
        } else {
            return "null"
        }
}
console.log(doubleoo);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
let companySlice = itCompanies.slice(0,3);
console.log(companySlice);

// 18. Slice out the last 3 companies from the array
let companySliceLast3 = itCompanies.splice(4,7);
    console.log("18. " + companySliceLast3);

//19. Slice out the middle IT company or companies from the array 
let companySliceMiddle = itCompanies.slice(3,4);
console.log(companySliceMiddle);

// 20. Remove the first IT company from the array
let removeFirstItem = itCompanies.shift();
console.log("20. " + removeFirstItem);
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
let removeMiddleItem = itCompanies.splice(2,2);
console.log(itCompanies);

//22. Remove the last IT company from the array
let removeLastItem = itCompanies.splice(-1,1);
console.log(itCompanies);

//23 Remove all IT companies 
let removeAllItem = itCompanies.splice();
console.log(removeAllItem);

// Level 2 
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file - solved.

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let textArray = text.split(" ", text.length)
console.log(textArray);
console.log(textArray.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
// add 'Meat' in the beginning of your shopping cart if it has not been already added 
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.slice(3,5)
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);