// difference between , and  + 
let ab = "Hello";
let bc = "World";

console.log(ab, bc);     // Output: Hello World
console.log(ab + bc);    // Output: HelloWorld

//arithematic operator 

let a = 2;
let b = 3;

console.log("a = " + a + " b = " + b);
console.log("+ is :", a + b);//add 
console.log("- is :", a - b);//sub
console.log("* is :", a * b);//multiplication
console.log("/ is :", a / b);//division
console.log("% is :", a % b);//modulus
console.log("a ** b is :", a ** b);//exponentiation operator  (output 2 * 2 * 2 = 8)

/*

//unary ooperator 
let c = 5;
let d = 4;

c = c + 1;
console.log("c++ is :" , c);//increament

d = d - 1;
console.log("d-- is :" , d);//decreament

*/

// post & pre increament 
let c = 5;
/*
console.log("c++ is :" , c++);//5 + 1 = 6 //post increament 
console.log(c);//dobara print karny par value 7 hojayegi 

console.log("++c is :" , ++c);//5 + 1  = 6 //pre increament 
console.log(c);//dobara print karny par value 6 hi rahy gi

*/

//post & pre decreament 
let d = 4;

/*

console.log("d-- is :" , d--);//post decreament
console.log(d);//dobara print karny par value 3 hojayegi 

console.log("--d is :" , --d);//4 - 1  = 3 //pre decreament
console.log(d);//dobara print karny par value 3 hi rahy gi

*/

//assignment operator 
let e = 4;
/* e = e + 2;
console.log("+= is :", e);
 */

/* e = e - 1;
console.log("-= is :" , e); */

/* e = e * 2;
console.log("*= is :", e); */

/* e = e / 2;
console.log("/= is :", e); */

/* e = e % 2;
console.log("%= is :", e); */

/* e = e ** 3;
console.log("** is :", e); */

//camparison operator 
let f = 4;
let g = 2;

console.log("f == g :", f == g);//false
console.log("f != g :", f != g);//true
console.log("f === g:", f === g);//false
console.log("f !== g:", f !== g);//true
console.log("f > g:", f > g);//true
console.log("f < g:", f < g);//false
console.log("f <= g:", f <= g);//false
console.log("f >= g:", f >= g);//true


//conditional statment 

let mode = "light";
let color;
if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}
console.log(color);

//
let age = 19;
if(age >= 18){
 console.log("vote");
} 
else{
    console.log("not vote");
}

//
let num = 3;
if(num %2 == 0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}

//ternary operator 
let agee = 18;
let result = agee > 21 ? "adult" : "not adult";
 console.log(result);

 //praactice question 

 /* let number= prompt ("enter a number ");

 if (number % 5 ==0){
    console.log(number , " is multiple of 5");
 }
 else{
    console.log(number , " is not multiple of 5");
 } */

 //
 let score = prompt("enter the score (100-0)");
 let grade ;
 if(score >= 90 && score <=100){
    grade = "A";
 }
 else if(score >=70 && score >=89){
 grade = "B";
 }

 else if(score >=60 && score >=69){
 grade = "C";
 }
 else if(score >=50 && score >=59){
 grade = "D";
 }
  else if(score >=0 && score >=49){
 grade = "F";
 }
 console.log("Grade :" , grade);




