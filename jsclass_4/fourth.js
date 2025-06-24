let marks = [23,54,65,87];
console.log(marks);
console.log(marks.length);

let cartoon = ['spiderman' , 'ironman' , 'antman' , 'shaktiman' , 'hulk'];
// console.log(cartoon);

/* //for loop sing array 
for(let i=0; i<cartoon.length; i++){
    console.log(cartoon[i]);
} */

//for-of
for(let cart of cartoon ){
console.log(cart);
}

//for-of
let city = ['karachi' , 'lahore', 'mumbai'];
for(cities of city){
    console.log(cities.toUpperCase());
}

//calculate marks of student
let stu = [85,97,44,37,76,60];
console.log(stu);

let sum =0;
for(let val of stu){
    sum += val;
}
console.log("the sum of the student is :" , sum);

let avg = sum / stu.length;
console.log(`the average marks of the student is ${avg}` ); 

//calculate discount 10%
let item = [250,645 , 300 ,900, 50];

//calculate discount offer using for of loop
// let it = 0 ;
// for(let pri of item){
//     console.log(`value of index  ${it} = ${pri}`);
//     let offer = pri /10;
//     item[it] = item[it] - offer;
//     console.log(`value after offer = ${item[it]}`);
//     it ++;
// }


//calculate discount offer using for loop

for(let s=1; s< item.length; s++){
    let offer = item[s] /10 ; 
    item[s] -= offer;
    console.log(`${item[s]}`);
}


let veg  = ['patota' , 'apple' , 'lichi' , 'mango' , 'tomoto'];//end mai value add karta hy 
veg.push('burger' , 'orange');
console.log(veg);


let num = [1,2,3,4,5];//end se aik value delete karta hy 
console.log(num);
let deleteval = num.pop();
console.log("num is :",num);
console.log(`deleted value is ${deleteval}`);

num.toString();
console.log(num);

num.unshift(0);//add values in the start 
console.log(num);

num.shift(2);//deleted first value
console.log(num);


console.log(num.slice(1,4));

num.splice(2,2,101,102);//splice 
console.log(num);
//add element
//   2nd index par , 0 item delete karo , or 101 add karo
num.splice(2,0,101);
console.log(num);

//delete element 
num.splice(3,1);
console.log(num);

//replace element
num.splice(3,1,101);
console.log(num);

//practice question 
let company = ['bomberg' , 'microsoft' , 'uber' ,' google' , 'ibm', 'netflix'];
company.shift();
console.log(company);

company.splice(2, 1, 'ola');
console.log(company);

company.push('amazon');
console.log(company);