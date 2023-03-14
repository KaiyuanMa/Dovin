import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function fadeIn(className, duration) {
  var tl = gsap.timeline();
  tl.from(className, {
    duration: duration,
    y: 10,
    autoAlpha: 0.01,
    ease: "cubic-bezier(.215,.61,.355,1)",
  });
  return tl;
}

export function fadeInNav(nav) {
  var tl = gsap.timeline();
  tl.fromTo(
    nav,
    {
      delay: 0.3,
      y: 10,
      autoAlpha: 0.01,
      backgroundColor: "transparent",
      ease: "cubic-bezier(.215,.61,.355,1)",
    },
    {
      delay: 0.3,
      duration: 0.3,
      y: 0,
      autoAlpha: 1,
      backgroundColor: "#eae7dc",
      ease: "cubic-bezier(.215,.61,.355,1)",
    }
  );
  return tl;
}

export function fadeInStagger(className, duration, stagger) {
  let elements = document.querySelectorAll("." + className);
  var tl = gsap.timeline();
  tl.fromTo(
    elements,
    {
      autoAlpha: 0.01,
      y: 10,
      stagger: stagger,
      overwrite: true,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: stagger,
      duration: duration,
      ease: "cubic-bezier(.215,.61,.355,1)",
    }
  );
  ScrollTrigger.create({
    trigger: elements,
    start: "top 100%",
    animation: tl,
    // markers: true,
    toggleActions: "play none none none",
  });
  return tl;
}

export function fadeInCustomPageStarter(title, rest) {
  var tl = gsap.timeline();
  tl.from(title, {
    duration: 0.4,
    y: 10,
    autoAlpha: 0.01,
    ease: "cubic-bezier(.215,.61,.355,1)",
  }).from(rest, {
    duration: 0.4,
    y: 10,
    autoAlpha: 0.01,
    ease: "cubic-bezier(.215,.61,.355,1)",
  });
  return tl;
}
