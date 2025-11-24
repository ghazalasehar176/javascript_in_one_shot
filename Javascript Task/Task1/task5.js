/* // Task 21
//password strenght checker
let password = prompt("Enter your password: ")

let hasNumber = false 
let hasSpecial = false

//Number check
for(let i =0; i< password.length; i++){
    if(password[i] >= '0' && password[i] <= '9'){
        hasNumber = true
    }
}

//Special character list 
let specialCharacter = "!@#$%^&*():'.,"

for(let i =0; i< password.length; i++){
    if(specialCharacter.includes(password[i])){
        hasSpecial = true
    }
}

//Strenght condition
if(password.length < 8){
    console.log("weak password")//abc
}
else if(password.length >= 8 && hasNumber && hasSpecial){
    console.log("Strong password")//hello123@
}
else{
    console.log("Medium Password")//abcdefgh
} */

/* 
// Task 22
//largest charahacter in sentence
let sentence = "I am practicing the javascript"
let word =  sentence.split(" ")

let largeWord = " "
let totalWord = 0

for(let i =0;i<word.length; i++){

         currentWord = word[i]
    if(currentWord.length > largeWord.length){
        largeWord = currentWord
    }
    totalWord = largeWord.length
}

console.log(largeWord)
console.log("total character is: "+totalWord) */


//TASK 23
//Check Palindrome word
//civic,deed,noon,refer,rotator

let user = "Madam"
let originalStr = user.toLowerCase()
let reversedStr = user.split('').reverse().join("")

if(originalStr == reversedStr){
    console.log("Palinfrome word")
}
else{
    console.log("Not a palinfrome word")
}

console.log("Original string is: "+originalStr)
console.log("Reversed string is: "+reversedStr)