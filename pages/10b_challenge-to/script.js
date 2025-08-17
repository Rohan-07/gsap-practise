import { gsap } from "gsap";

const animateToasts = () => {
	// Toast 1: Rise up and fade in
	gsap.to(".toast.one", {
		y: -120,
		opacity: 1,
		scale: 1,
		duration: 0.6,
		ease: "back.out(1.7)",
		onComplete: () => {
			// Toast 1: Slide away after holding for visibility
			gsap.to(".toast.one", {
				y: -100,
				opacity: 0,
				duration: 0.6,
				ease: "power2.in",
				onComplete: () => {
					// Toast 2: Rise up when first toast starts sliding away
					gsap.to(".toast.two", {
						y: -120,
						opacity: 1,
						scale: 1,
						duration: 0.6,
						ease: "back.out(1.7)",
						onComplete: () => {
							// Toast 2: Slide away after holding for visibility
							gsap.to(".toast.two", {
								y: -100,
								opacity: 0,
								duration: 0.8,
								ease: "power2.in",
								onComplete: () => {
									setTimeout(() => animateToasts(), 2000);
								},
							});
						},
					});
				},
			});
		},
	});
};

animateToasts();
