gsap.to("#page2 h1", {
    transform: "translateX(-130%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        scub: 2,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
});










