
// gsap.to("#box", {
//     x:750,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// });


// gsap.from("#box", {
//     x:750,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// });

var tl = gsap.timeline();

tl.to("#box1", {
    x: 900,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    delay: 1
});

tl.to("#box2", {
    x: 900,
    rotate: 360,
    scale: 0.5,
    duration: 2,
});

tl.to("#box3", {
    x: 900,
    rotate: 360,
    scale: 0.5,
    duration: 2,
});






