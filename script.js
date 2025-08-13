// GSAP plugin registration
gsap.registerPlugin(ScrollTrigger);

// Typed.js for hero text
var typedMain = new Typed('#element', {
    strings: ['Performance first. Beauty always.', 'Animating details that users feel.'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    onBegin: () => {
        gsap.from("#element", {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power4.out"
        });
    }
});

// Typed.js for section heading
var typedH1 = new Typed('#h1', {
    strings: ['Design is intelligence made visible'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    onBegin: () => {
        gsap.from("#h1", {
            opacity: 0,
            x: -50,
            duration: 1.5,
            ease: "power4.out"
        });
    }
});

// Section fade-in animation
gsap.from("section", {
    opacity: 0,
    y: 100,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Background subtle animation
gsap.to("body", {
    backgroundPosition: "200% center",
    duration: 8,
    ease: "linear",
    repeat: -1,
    yoyo: true
});