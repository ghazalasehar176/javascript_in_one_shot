//to  Get the attribute Value (getAttribute)

/* //access id
let div = document.querySelector("div");
console.log(div); */

/* let id = div.getAttribute("id");
console.log(id); */

/* let name = div.getAttribute("name");
console.log(name); */

/* //Access class
let para = document.querySelector("p");
console.log(para.getAttribute("class")); */

/* //toset the attribute value(setAttribute)

let para = document.querySelector("p");
console.log(para.setAttribute("class" , "newclass12")); */

//changing style

/* let div = document.querySelector("#box");
div.style.backgroundColor = "purple";
div.style.backgroundColor = "green";

div.style.fontSize = "25px";
div.innerHTML = "hello!"; */

//insert element 

/* let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(newbtn);

let div = document.querySelector("div");
// div.after(newbtn);
// div.before(newbtn);
// div.prepend(newbtn);
// div.append(newbtn); */


/* //add new heading without using HTML
let newHead = document.createElement("h1");
newHead.innerHTML = "<i>Hy , i'm new!</i>";

document.querySelector("body").prepend(newHead); */

/* //delete 
let para = document.querySelector("p");
para.remove(); */


//q:1
let newButton = document.createElement("button");
newButton.innerText = "click me!";
console.log(newButton);

newButton.style.backgroundColor = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);

//q:2
let para = document.querySelector("p");
para.classList.add("paracontent");
// para.classList.remove("paracontent");
