// document.body.style.background = "orange"

// console.dir(document.body.childNodes[3].innerText = "my name is Ghazala");

//DOM Manuipulation


/* //Selecting with ID
let heading = document.getElementById("heading");
console.dir(heading); */

/* //Selecting with Class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);
 */

/* //Selecting by tags
let para = document.getElementsByTagName("p");
console.dir(para); */

/* //quesry selector
let query = document.querySelector("p");
console.dir(query); */

/* let f_e = document.querySelector("p");//first element
console.dir(f_e);

let a_e = document.querySelectorAll("p");//All element
console.dir(a_e); */

/* let button = document.querySelector("button");
console.dir(button); */

/* let div = document.querySelector("div");
div.innerText; // only text ata hy 
div.innerHTML; //HTML tags b aty hy
console.dir(div); */

//textcontent hidden element ka b text hamay dikha deta hy

let h2 = document.querySelector("h2");
console.dir(h2.innerHTML);
h2.innerHTML = h2.innerHTML + " from apna college student";//concatenation



let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs){
    div.innerHTML = `new unique value ${idx}`;
    idx++;
}
divs[0].innerHTML = "new unique value 0";
divs[1].innerHTML = "new unique value 1";
divs[2].innerHTML = "new unique value 2";



