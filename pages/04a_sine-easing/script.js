import { gsap } from "gsap";

// const scrollToTop = document.querySelector(".scroll-to-top");

// gsap.to(".scroll-to-top", {
// 	opacity: 1,
// 	y: -50,
// 	duration: 1,
// 	ease: "sine.inOut",
// });

const scrollToTop = document.querySelector(".scroll-to-top");
let isFloating = false;
window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		scrollToTop.classList.add("show");

		if (!isFloating) {
			gsap.to(scrollToTop, {
				y: -15,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			isFloating = true;
		}
	} else {
		scrollToTop.classList.remove("show");
	}
});

scrollToTop.addEventListener("mouseenter", () => {
	gsap.to(scrollToTop, {
		scale: 1.1,
		duration: 0.2,
	});
});

scrollToTop.addEventListener("mouseleave", () => {
	gsap.to(scrollToTop, {
		scale: 1.0,
		duration: 0.2,
	});
});

scrollToTop.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
