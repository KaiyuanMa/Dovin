import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function myAnimation(className, duration, stagger) {
  let elements = document.querySelectorAll("." + className);
  console.log(elements);
  var tl = gsap.timeline();
  tl.from(elements, {
    duration: duration,
    opacity: 0,
    y: 10,
    stagger: stagger,
    ease: "cubic-bezier(.215,.61,.355,1)",
    overwrite: true,
  });
  ScrollTrigger.create({
    trigger: elements,
    start: "top 90%",
    animation: tl,
    toggleActions: "play none none none",
  });
  return tl;
}
