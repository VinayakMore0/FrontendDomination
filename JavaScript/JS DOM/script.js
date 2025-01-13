// Accessing Elements
// select

// id
var byId = document.getElementById('#byId');
// class
var byClass = document.getElementsByClassName('.byClass');
// tag
var byTag = document.getElementsByTagName('h3');
// any kind
var btn1 = document.querySelector('button');
// for many
var h3 = document.querySelectorAll("h3");

var img1 = document.getElementById("#img1");
var img2 = document.getElementsByClassName(".img2");
var text1 = document.getElementsByClassName(".text1");
var text2 = document.getElementById("#img2");
// OR
var img1 = document.querySelector("#img1");
var img2 = document.querySelector(".img2");
var text1 = document.querySelector(".text1");
var text2 = document.querySelector("#img2");


// Modifying Elements

var btn = document.querySelector("button");
btn.textContent = "Staring.......";

var h1 = document.querySelector("h1");
h1.textContent += "Vipul";

var h2 = document.querySelector("h2");
h2.innerHTML = '<i>Hello<i>';


// Manipulating Styles & Classes

var h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontFamily = "gilroy";
h1.style.fontSize = "32px";

var h1 = document.querySelector("h1");
h1.classList.add('makeitred');
h1.classList.remove('makeitred');



// Creating & Deleting Elements

var creatH1 = document.createElement('h1');
creatH1.textContent = "Hey";
creatH1.classList.add('makeitred');

document.querySelector("body").appendChild(creatH1);

var img = document.createElement("img");
img.src = 'https://images.unsplash.com/photo-1735327854928-6111ac6105c8?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
document.querySelector("body").appendChild(img);

document.querySelector("body").removeChild(img);


// Event Handling 

var btn2 = document.querySelector("#btn");
btn2.addEventListener("click", function() {
    btn2.textContent = "Staring.......";
    btn2.style.backgroundColor = "red";
});

btn2.addEventListener("dblclick", function() {});
btn2.addEventListener("mouseover", function() {});
btn2.addEventListener("mouseleave", function() {});


// Event Object

document.querySelector("body")
.addEventListener("mousemove", function(dets) {
    console.log(dets)
})

