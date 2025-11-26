
//Task 24
//Find the Second Largest Number in an Array
let array = [12, 3, 21, 54, 23, 65, 34]
let largest = Math.max(...array)

console.log(largest)
secondlargest = 0
for (let i = 0; i < array.length; i++) {
   value = array[i]
   if (value != largest && value > secondlargest) {
      secondlargest = value

   }

}
console.log("second largest number is: " + secondlargest)

//Task 25 
//Merge two array or remove duplicates values
let arr1 = [12, 32, 54, 19, 34]
let arr2 = [54, 12, 43, 19, 32]

let merge = [...arr1, ...arr2]//use for merging the 2 array 
let uniqueArray = [...new Set(merge)];//use for removing duplicates 

console.log(arr1)
console.log(arr2)
console.log(merge)
console.log(uniqueArray)

//Task 26

let arrays = [1,2,3,5,6]

let totalArrSum = 0

//Total su of array
for(let s=0; s<arrays.length; s++){ 
      totalArrSum += arrays[s]
}

let n = arrays[arrays.length - 1]
let perfectSum = n * (n + 1) / 2
n - totalArrSum

//missing number
let missing = perfectSum - totalArrSum

console.log("Original array is: "+ arrays)
console.log("Total sum of array is: "+totalArrSum)
console.log("Perfect sum is: "+perfectSum)
console.log("Missing num is: "+missing)


//Task 26 again
console.log("\n\n\n")

let arrs = [1,2,3,4,5,7,8]

let totalSum = 0

for(let n =0; n<arrs.length; n++){
      totalSum += arrs[n]
}


let k = arrs[arrs.length - 1]
let perfeSum = k * (k + 1) / 2
let missed = perfeSum - totalSum

console.log("Total sum of array is: "+totalSum)
console.log("Original array is: "+arrs)
console.log("Perfect sum is: "+perfeSum)
console.log("Missing Array Number is: "+missed)



//Task 27
//Count Frequency of Each Element in an Array
console.log("\n\n\n\n")
let arra = [2,5,1,5,2,7,4]

let frequency = {}

for(let m =0; m<arra.length; m++){

let element  = arra[m]
   if(frequency[element]){
         frequency[element]++
   }
   else{
      frequency[element] = 1
   }
}
console.log(frequency)