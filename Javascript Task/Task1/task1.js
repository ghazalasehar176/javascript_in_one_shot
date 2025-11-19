
// Task 1
let num = 20

//print number 
console.log(num)
 //print the type of number 
 console.log(typeof(num))
//Boolean comparison result
console.log(num > 10)


//Task 2
num1 = 4
num2 = 2

//Add(sum)
console.log("Addition is :" + (num1 + num2))
//SUB(difference)
console.log("Subtaction is :" + (num1 - num2))
//Multiply(product)
console.log("Multiplication is :" + (num1 * num2))
//Division
console.log("Division is :" + (num1 / num2))
//Power
console.log("Power is :" + (num1 ** num2))


//Task 3
let text1 = "This is javascript task one"
let num3 = 3

console.log(text1.length)//String lenght
console.log(text1[0])//String first character
console.log(text1[text1.length - 1])//string last character
console.log(num3 > 10)

//Task 4
let arr1 = [13,22,33,44,55]

for (let i = 0; i< arr1.length; i++ ){
 console.log(arr1[i])
}

i = 0
while(i < arr1.length){
if(arr1[i] % 2 == 0){
    console.log("even numebr is: " + arr1[i])
}
    i++
}

//Task 5
function numSquare(num){

  return num * num
}
//call the function
console.log(`Square number is: ${numSquare(5)}`)

function sumNum(a , b){
    return a + b
}
//call function
console.log("sum is :" + sumNum(2,2))


function proFun(num1 , num2){
    product = num1 * num2 
    return product
}
console.log("Product is: " + proFun(2,4))


function strFun(str){
   
    rev_str = str.split(" ").reverse().join(" ")
    return rev_str
}
console.log("Reveresed string function is: " + strFun("hello world"))