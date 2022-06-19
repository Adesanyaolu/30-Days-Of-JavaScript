console.log(countries)
/* alert('Open the console and check if the countries has been loaded'); */

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (i = 0; i <= 10; i++){
    console.log(i);
}

let j = 0
while (j <= 10) {
  console.log(j)
  j++
}

let k = 0
do {
    console.log(k)
    k++
} while (k <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (l = 10; l >= 0; l--){
    console.log("l = " + l);
}

let m = 10
while (m >= 0) {
  console.log("m = " + m)
  m--
}

let n = 10
do {
    console.log(n)
    n--
} while (n >= 0);

// 3. Iterate 0 to n using for loop
const info = ["see", 8, "birds"];
for (p of info){
    console.log(p)
}

// 4. Write a loop that makes the following pattern using console.log():
let q = ["#", "##", "###", "####", "#####", "######", "#######", "########", "#########", "##########"];
for (g = 0; g <= 9; g++){
    console.log(q[g]);
}

// 5.  Use loop to print the following pattern:
for (r = 0; r <= 10; r++){
    console.log(`${r} * ${r} = ${r * r}`);
}

// 6. Using loop print the following pattern
console.log("6. Square and cube")
for (s = 0; s <= 10; s++) {
    let s2 = Math.pow(s, 2);
    let s3 = Math.pow(s, 3);
    console.log(`${s}  ${s2}  ${s3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (t = 0; t <= 100; t++){
    if (t % 2 == 0){
        console.log(t)
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (u = 0; u <= 100; u++){
    if (u % 2 !== 0){
        console.log(u)
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers - Not done

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let w = 0;
let sumw = 0;
for (w = 0; w <= 100; w++){
    sumw += w;
}
console.log(sumw)
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let v = 0;
let sumV1 = 0;
let sumV2 = 0;
for (v = 0; v <= 100; v++){
    v % 2 === 0 ? (sumV1 += v) : (sumV2 += v);
}

console.log(sumV1, sumV2)

// 12
const newArr = []
newArr.push(sumV1, sumV2);
console.log(newArr);

// 13. Develop a small script which generate array of 5 random numbers
/* let ranNum = Math.random();
let ran5Num = ranNum * 6;
let floored5 = Math.floor(ran5Num);
console.log(floored5);

const noArray = [];
noArray.push(floored5);
console.log(noArray)
const fiveXvalues = Array(5).fill(noArray)
console.log(fiveXvalues)
*/
const arr_length = 5;
const randomArray = []; 

for (let x = 0; x < arr_length; x++){
    let ranNum = Math.random();
    let ran5Num = ranNum * 6;
    let floored5 = Math.floor(ran5Num);
    randomArray.push(floored5)
}
console.log(randomArray)