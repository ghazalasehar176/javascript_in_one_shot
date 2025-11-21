/* arr1 = ["apple" , "banana" , "mango" , "orange" , "strwabery"]

let i = 0 

while(i < arr1.length){
    console.log(arr1[i])
    console.log(arr1[i][0])
     char = arr1[i][0]
   
  

        if("aeiou".includes(char)){
        console.log("Start with vowel: "+char)
        }
        else{
        console.log("Start with consonant: "+ char)
        }
           i++
        
}
 */


arr1 = ["strawbery" , "banana", "apple" , "mango" , "orange"]

let i = 0 
while(i < arr1.length){

    console.log(arr1[i])
    console.log(arr1[i][0])

    char = arr1[i][0]

    if("aeiou".includes(char)){
        console.log("Start with vowels: "+char)
    }else{
        console.log("Start with consonant: "+char)
    }
    i++
}


console.log("\n\n\n")


//Task 12

/* let str = "Javascript is fun to learn"
let splitWord = str.split(" ")

console.log("Word Count : "+splitWord.length)
let j = 0
while(j<splitWord.length){
    console.log(splitWord[j])
    j++
} */

let str = "This is a javascript learn"
let splitWord  = str.split(" ")//all word split one-by-one
console.log("Word counts: "+splitWord.length)//Word count

let j = 0
while(j < splitWord.length){
    console.log(splitWord[j])
    j++
}

/* console.log("\n\n\n")
let str1 = "Javascrpit makes coding fun"
let splitwords = str1.split(" ")
let chractercount = characterCount(str1)
console.log(chractercount)

let k = 0 
while(k <splitWord.length){
    console.log(splitwords[k])

    vowel = splitWord[k]

    k++
    if("aeiou".includes(vowel)){
        console.log("this isa vowel "+vowel)
    }
} */


//Task 13
//Find word J

console.log("\n\n\n")

let str1 = "JavaScript makes coding fun"
let sentence = str1.split(" ")
let n = 0
while(n <sentence.length){
    console.log(sentence[n])
    if(sentence[n][0] == "J"){
        console.log("sentence start with J: ")
    }
    else{
        console.log("text does'nt exist")
    }
    n++
}

//Task 14
//find largest numebr
console.log("\n\n\n")

let arr2 = [12,5,89,45,23,90,11]
let largest = arr2[0] 

for(let k =0; k<arr2.length; k++){
   if(arr2[k] > largest){
     largest = arr2[k]
   }
  
}
console.log("largest number is "+ largest)

//Task 14 Again
//find largest number
let arr3 = [10,90,78,100,43,56]
let large = arr3[0]

for(let o =0; o<arr3.length; o++){
    if(arr3[o] > large){
        large = arr3[o]
    }
}
console.log("Largest number is: "+large)


//Task 15
//Reverse a numebr
console.log("\n\n\n\n")
let result = 0 
let num = 12345
result = Number(String(num).split('').reverse().join(''))
console.log("Reversed number is: "+result)

