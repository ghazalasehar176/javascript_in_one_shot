console.log("hello javascript");
console.log("Ghazala sehar");
console.log("hello world");

// variable in javascript
age =23 ;
console.log(age);

value = true;
console.log(value);

time = 12.00;
console.log(time);

fullname = "ghazala sehar";
console.log(fullname);


//let , var , const in js 

//var
//re-declare
var age = 10;
var age = 12;
var age = 11;
console.log(age);

//let
//re-assign
let a = "ali";
a = "ayan";
a = "abiha";
console.log(a);

console.log(typeof a); // type of check the data type 


//const
const b = 176;
// const b = "samba";  error
// b = "lissa";  error 
 
console.log(b);
console.log(typeof b);

//scope 
//block scope
{
    let s = "haniya"; // koi output nhi ayega .
}
// console.log(s); error 


//type of function .

// 7 type of primitives data type 
// primitives datatype :
// primitive data type aik basic data type hota hai jo programming language khud provide karti hai.

//1-number
//2-string
//3-boolean

//4-undefined
let x ;
console.log(x); // koi value nhi dalengy to undefined 
console.log(typeof x);//type of b undefined ayegi

//5-null
let y = null ;//null means absence of datatype
console.log(y);
console.log(typeof y); 

//6-bigInt
let c = BigInt(12345);
console.log(c);
console.log(typeof c);//bigInt end mai n likha wa ata hy

//7-symbol
let w = Symbol("hello!");
console.log(w);//Symbol("hello!") output ayega .
console.log(typeof w);

//non-primitives datatype
//include array , function , objects .

//objects 
const student = {
      fullName : "ghazala sehar",
      cgpa : 2.25,
      age : 12,
      isPass : true,
};
console.log(student);
console.log(typeof student);

//printing object 1
console.log(student["cgpa"]);
console.log(student["fullName"]);

//printing object 2
console.log(student.age);
console.log(student.isPass);

//re-assign objects 
student["name"]   = "Rahul";
student["age"] = student["age"] + 1;

console.log(student["name"]);
console.log(student["age"]);

//practical class one 
const product = {
    name :"ball pen",
    rating : 4,
    offer : 5,
    price:550,
}
console.log(product);
console.log(typeof product);

const profile = {
    username: "ghazala",
    isFollow: false,
    follower:124,
    following:5.76,
}
console.log(profile);
console.log(typeof profile["username"]);
console.log(typeof profile["following"]);

