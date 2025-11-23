/* //Task 16
//Find largest digit in a number
let user = prompt("Enter numebr as u want: ")
let str = String(user)
let largest = 0

for(let i = 0 ; i<str.length; i++){
    if(str[i] > largest){
        largest = Number(str[i])
    }
}

console.log(`The largest number is: ${largest}`) */


//Task 17
//Print Star Pattern

/* let num  = prompt("Enter number as u want: ")
for(let k =1; k<=num; k++){
    let row = ""
    for(let s=1; s<=k; s++){
       row += "*"
    }
        console.log(row)
} */


/* 
//Task 17 again 

let number = prompt("Enter the numbers u want: ")

for(let i =1; i<= number; i++){
    let row = ""
    for(let s =1; s<=i; s++){
        row += "*"
    }
    console.log(row)
} */



/* //Task 18
let num = prompt("Enter the table number: ")
for(i=1; i<=10; i++){
    console.log(`${num} X ${i} = ${num * i}`)
} */


//Task 19
/* //Sum of digit of  number
let number = prompt("Enter number as u want: ")
let str = 0

for(let i = 0; i<number.length; i++){
    str += Number(number[i])
}
console.log(`Sum of ${number} is = ${str}`) */


//revered a string wihout using reversed method
let str = prompt("Enter string leget reversed: ")
let reversed  = ""

for(let j = str.length - 1; j >=0; j--){
   reversed +=str[j]
}
console.log(reversed)