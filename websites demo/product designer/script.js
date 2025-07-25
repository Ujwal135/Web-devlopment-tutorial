// smooth scrolling

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circlemousefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
circlemousefollower(    );

function animationfirstpage() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });

  tl.to(".boundingelem", {
    y: "0",
    duration: 1.5,
    ease: Expo.easeInOut,
    duration: 1,

    stagger: 0.2,
  });
}
animationfirstpage();
// mouse minicircle animation
var xscale = 1;
var yscale = 1;

var xprev = 0;
var yprev = 0;
let timeout ;

function mousespeedvar() {
  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    timeout = setTimeout(function() {
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
    }, 100);

    circlemousefollower(xscale, yscale);
  });
}

mousespeedvar();