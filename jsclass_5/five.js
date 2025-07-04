/*  Function is a block of code to perform a specific task.
 We can invoke (call) a function whenever we need.
 "Invoke" means to call the function.
 */

/*  function myFunction(){
    console.log("hello, today we are learning a js ");
    console.log("my name is ghazala");
 }
 myFunction();
 myFunction(); */


/*  function myfunc(msg, n){
    //parameter ->input
    console.log(msg , n);
 }
 myfunc("I Love JS" , 100);//argument
  */


/* 
//addition of numbers
function sum(x,y){
    s = x + y ;
    return s;
}
let val = sum(4,6);
console.log(val); */


/* //arrow function 
//addtion arrow funtion
const arrowSum = (a ,b)=>{
    return a+b;
}
let val = arrowSum(6 , 4);
console.log(val); */


/* //multiplication arroe function 
const arrowMulti = (a , b )=> {
    return a * b ;
}
let val = arrowMulti(2,3);
console.log(val); */


/* //print arrow function random text
const text = () => {
    console.log("hello world ");
}
console.log(text); */



/* //if a alphabet is vowel then return number how many vowel in the text
function countVowels() {
    let count = 0;
    let str = "biya";
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count);
}
countVowels(); */


/* ///if a alphabet is vowel then return number how many vowel in the text with arrow function
const countVowel = ()=>{
    let count= 0 ;
    let str = "ahadraza";

    for(const char of str){
         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
              count ++;
         }
    }
    console.log(count);
}
 countVowel(); */


/*  //call back function example ... // Callback ek function hota hai jo kisi doosre function ko argument ke tor par diya jata hai.
 function greet(name , callBack){
    console.log("Hello "+name);
    callBack();
 }

 function bye(){
    console.log("good byee...");
 }
 greet("ALI" , bye); */


/*  //foreach loop
 let arr = [1,2,3,4,5,6,7,8,9];

 arr.forEach(function printVal(val){
    console.log(val);
 }) */


//using foreach loop , print the square of each values
let num = [1,2,3,4,5,6,7,8,9];
num.forEach((num) =>{
    console.log(num * num);

})

