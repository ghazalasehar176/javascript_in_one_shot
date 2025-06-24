/* shift+alt+a comment */

//for loop 
for(let i =1; i<=5; i++){
 console.log("aptech learning");
}
console.log("loop has ended");

/* 
//for loop 
for(let i =1; i<=5; i++){
 console.log(i);
}
//block scope let i bahar akar loop ka i nhi hoga
console.log(i);
 */

/* //for loop 
for(var i =1; i<=5; i++){
 console.log(i);
}
//bahar akar value 6 karde ga because thi is a global scope 
console.log(i);

 */

//claculate sum of 1 to 5 number
let sum =0;
for(let count = 1; count <=100; count ++){
 sum = sum + count;
}
console.log("sum =" , sum);

//while loop
let j = 1;
while(j<=10){
 console.log("the value of j is " , j);
 j++;
}

//do-while loop
let k=1;
do{
console.log("the do-while loop");
k++;
}while(k <=6);

//for-of loop
//for-of → har letter ya item ko one by one deta hai.
let m = "aptech";
for(let val of m){
    console.log("m is =" ,val);
}


//for-in loop hamay keys return karta hy kisi b object key , key = name ..
let student = {
    name: "ghazala",
    age: 23,
    cgpa: 4.0,
    ispass:true,
}
for(let n in student){
    console.log("keys is ",n ,"values is ",student[n]);
}

/* //print 0  to 100 all even number
for(let s=0; s<=100; s++){
    if(s%2==0){
        console.log("the even number is" , s);
    }
} */

/* 
//print 1  to 99 all odd number
for(let s=0; s<=100; s++){
    if(s%2 !==0){
        console.log("the odd number is" , s);
    }
}
 */

/* 
//user guessing number game
let gameNum =25;
let userNum  = prompt("guess the number ");

while(userNum != gameNum){
 userNum = prompt("you enter wrong number , guess again");
}
console.log("congratulatioon , you guess the right number");

 */


//string in javascript
// count string character + gap 
let str = "NED university";
console.log(str.length);
console.log(str[2]);
console.log(str[3]);
console.log(str[7]);

// Template literals JavaScript mein strings likhne ka modern tareeqa hai.

let obj = {
    item: "pen",
    cost: 10,
}

//templates literal

 //console.log("the item is " , obj.item , "& the cost is ",obj.cost , "rupees");//normal printing 
let output = (`the item is ${obj.item} & the cost is ${obj.cost}`);//templates literal
console.log(output);

let myNum =(`the add number is : ${1+2+3}`);//templates literal
console.log(myNum);

//escape chatcer 
console.log("aptech\nlearning");// \n new line deta hy
console.log("aptech\tlearning");// \t tab key tak gap deta hy

//string method 
//touppercase
let a ="Apna College";
ab = a.toUpperCase();//all words capital
console.log(ab);

//to lowercase
let b ="Apna College";
abc = b.toLowerCase();//all word small
console.log(abc);

//trim
let bc = "      apna college     js       ";//remove start,ending space
console.log(bc.trim());

//slice
let bcd = "12345678";//start , end string cut kardeta hy
console.log(bcd.slice(1,6)); 

//replace
let res = "hello";
console.log(res.replace("lo" , "p"));

//charAt
let char = "ilovejs";
console.log(char.charAt(1));

//task
let task = "shardakapra";
let result = "@" + task + task.length;
console.log(result);