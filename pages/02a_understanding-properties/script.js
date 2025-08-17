import { gsap } from "gsap";

gsap.to(".box", {
	opacity: 1,
	rotationY: 360,
	background: "#ff6f61",
	scale: 1,
	duration: 2,
	delay: 0.5,
	ease: "bounce",
	// repeat: -1,
	// yoyo: true,
	// repeatDelay: 2
	// paused: true,
	// stagger: 1,
});
