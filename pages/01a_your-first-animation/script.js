gsap.to(".card", {
	opacity: 1,
	scale: 1,
	duration: 1,
	onComplete: () => {
		gsap.to(".card", {
			y: -20,
			boxShadow: "0 20px 50px rgba(255, 255, 255, 0.4)", // added this for pulse effect
			repeat: -1,
			yoyo: true,
			delay: 0.5,
		});
	},
});
