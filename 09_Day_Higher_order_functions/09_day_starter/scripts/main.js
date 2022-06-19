// console.log(countries)

// const callback = (n) => {
//     return n ** 2
//   }

// function cube(callback, n) {
//     return callback(n) * n
//   }
//   console.log(cube(callback, 3))

// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]

// products.forEach(function(product){
//   console.log(product.price)
// })

const companies = [
  {name: "Company One", category: "Technology", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Finance", start: 2009, end: 2014},
  {name: "Company Six", category: "Technology", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Finance", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},  
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach 
// for (let i = 0; i < ages.length; i++){
//   console.log(ages[i])
// }

// ages.forEach(function(age){
//   console.log(age)
// });

// ages.forEach(age => console.log(age));
// companies.forEach(company => console.log(company));

//Filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++){
//     if (ages[i] > 21){
//       canDrink.push(ages[i])
//     }
//   }
// console.log(canDrink);

// ages.filter(function(age){
//   if(age >= 21){
//     canDrink.push(age);
//   }
// })

// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// const retailCompanies = companies.filter(function(company){
//   if(company.category === "Retail"){
//     return true
//   }
// });

// console.log(retailCompanies)

// const retailCompanies = companies.filter(company => company.category === "Retail")

// console.log(retailCompanies);

// const eightiesCompany = companies.filter(function(company){
//   if (company.start >= 1980 && company.start < 1990){
//     return true
//   }
// });

// const eightiesCompany = companies.filter(company => company.start >= 1980 && company.start < 1990 );

// console.log(eightiesCompany);

//Get companies that lasted 10 years
// const lastedTenYears = companies.filter(company => company.end - company.start > 10);
// console.log(lastedTenYears)

//Map
// const companyNames = companies.map(function (company) {
//   return company.name
// });

// const companyNames = companies.map(company => company.name);

// console.log(companyNames)

// const testMap = companies.map(company => `${company.name}: [${company.start} - ${company.end}]`);
// console.log(testMap)

// const ageSquare = ages.map(function(age){
//  return Math.floor(Math.sqrt(age));
// }); 

// const ageSquare = ages.map(age => Math.floor(Math.sqrt(age)));
// console.log(ageSquare)
  

// Sort 
//sort companies by start year
// const sortCompanies = companies.sort(function(a,b){
//   if (a.start > b.start){
//     return 1
//   } else {
//     return -1
//   }
// });

// const sortCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1);
// console.log(sortCompanies)

// sort ages 
// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges);

//Reduce 
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++){
//   ageSum += ages[i];
// }


// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies 
// const totalCompanyYears = companies.reduce(function (total, company){
//   return total + (company.end - company.start)
// }, 0);

// const totalCompanyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalCompanyYears);

//combine methods
// const combine = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a,b) => a - b)
//     .reduce((total, age) => total + age, 0);

// console.log(combine);


