var prg = document.querySelector("#progress");
var center = document.querySelector("#center");
var h3 = center.querySelector("h3");
var count = 4;


// var int = setInterval(function() {
//     if (count >= 100) {
//         h3.style.opacity = 1;
//         clearInterval(int);
//     } else {
//         count++;
//         prg.style.width = count + '%';
//         prg.style.backgroundColor = `rgb(${255 - count * 2}, ${180 + count}, 65)`;
//     }
// }, 50);

// OR

const intervalDuration = 50;
const progressIncrement = 1;

var int = setInterval(function() {
    if (count >= 100) {
        h3.style.opacity = 1;
        clearInterval(int);
    } else {
        count += progressIncrement;
        prg.style.width = count + '%';
        prg.style.backgroundColor = `rgb(${255 - count * 2}, ${180 + count}, 65)`;
    }
}, intervalDuration);



