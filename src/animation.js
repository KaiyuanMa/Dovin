import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function myAnimation(className, duration, stagger) {
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
    markers: true,
    toggleActions: "play none none reset",
  });
  return tl;
}
