// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");
// var que = document.querySelector("#que");
// var homeText = document.querySelector("#homeText");
// var aboutText = document.querySelector("#aboutText");
// var contactText = document.querySelector("#contactText");

// homeText.style.display = "block";
// homeText.style.width = "50%";
// // homeText.style.margin-top = "20px";

// home.addEventListener("click", function() {
//     removeText();
//     homeText.style.display = "block";
//     homeText.style.width = "50%";
//     que.style.display = "block";
// });

// about.addEventListener("click", function() {
//     removeText();
//     aboutText.style.display = "block";
//     aboutText.style.width = "50%";
//     que.style.display = "block";
// });

// contact.addEventListener("click", function() {
//     removeText();
//     contactText.style.display = "block";
//     contactText.style.width = "50%";
//     que.style.display = "block";
// });

// function removeText() {
//     document.querySelectorAll("h3").forEach(function(h3) {
//         h3.style.display = "none";
//     })
// }

// OR

var divs = document.querySelectorAll('.tab');
var texts = document.querySelectorAll('h3');
var que = document.querySelector("#que");

texts[1].style.display = 'block';
texts[1].style.width = '50%';

divs.forEach(function (div, index) {
    div.addEventListener("click", function () {
        hideAllText();
        texts[index + 1].style.display = "block";
        texts[index + 1].style.width = "50%";
        que.style.display = "block";
    });
});

function hideAllText() {
    texts.forEach(function (text) {
        text.style.display = "none";
    });
}



