//Task 6
function checkAge(age){

        if(age > 18){
            console.log("you are adult")
        }
        else if(age == 18){
            console.log("you'r exactly 18")
        }
        else{
            console.log("you are minor")
        }
}

checkAge(16)
checkAge(18)
checkAge(25)

console.log("\n\n")

//Task 7
let num  = [6,3,12,3,9,4,15,65,23,98]

let evencount = 0
let oddcount = 0
for(i =0; i<num.length; i++){
    // console.log(num[i])
    if(num[i] % 2== 0){
        console.log("even number is " + num[i])
       evencount = evencount +1
    }
    else{
        console.log("odd number is " + num[i])
        oddcount = oddcount + 1
    }

}

console.log("even count is: "+ evencount)
console.log("odd count is: "+ oddcount)


console.log("\n\n\n")


/* //Task 8
let text = "This is javascript practice"

for (let j = 0; j < text.length; j++){
    console.log(text[j])
    char = text[j]

     if(char == " "){
        console.log("THIS IS SPACE IN CHARACTER")
    }
    else if("aeiou".includes(char)){
        //"aeiou" → ek string hai, jisme vowels a, e, i, o, u hain
        //.includes(char) → check karta hai ki char string ke andar hai ya nahi
        console.log("Vowel found: "+ char)
    }
}
    */



/* //Task 8 : Again

let txt = "This is the javascript"

for (s =0; s<txt.length; s++){
    console.log(txt[s])
    char = txt[s]

    if(char == " "){
        console.log("This is space Gap")
    }
    else if("aeiou".includes(char)){
        console.log("Vowel founs: "+char)
    }
} */


// //Task 9 
// let number = [1,2,3,4,5,6,7,8,9,10]

// let evennum = 0
// let oddnum = 0

// function checkNumber(number){

//     for (let m =0; m<number.length; m++ ){
//     console.log(number[m])

//      if(number[m] % 2 == 0){
//         console.log("Even number:"+ number[m])
//         evennum ++
//     }
//     else if(number[m] % 2 !== 0){
//         console.log("Odd number: "+ number[m])
//         oddnum ++
//     }
//     else{
//         console.log("invalid number")
//     }
//     }
   
// }

// checkNumber(number)
// console.log("Total even number is:"+evennum)
// console.log("Total odd number is:"+oddnum)




//Task 10
let numarr = [1,2,3,4,5,6,7,8,9,10]
let k = 0

while(k<numarr.length){
    //  console.log(numarr[k])
    if(numarr[k] > 5){
        console.log(numarr[k] +" number is greater than 5")
    }
    else if(numarr[k] == 5){
        console.log(numarr[k] +" number is equal to 5")
    }
    else {
        console.log(numarr[k]+ " number is less than 5")
    }
        k++
}