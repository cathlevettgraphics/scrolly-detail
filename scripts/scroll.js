const box = document.getElementById('box');
const box2 = document.getElementById('box2');

gsap.registerPlugin(ScrollTrigger);

gsap.to('.step-1', {
  scrollTrigger: {
    trigger: '.step-1',
    endTriigger: '.step-3',
    pin: true,
  },
});

gsap.to('.step-2', {
  scrollTrigger: {
    trigger: '.step-2',
    pin: true,
  },
});

gsap.to('.step-3', {
  scrollTrigger: {
    trigger: '.step-3',
    pin: true,
  },
});

gsap.to(box2, {
  scrollTrigger: {
    trigger: box2,
    start: 'center center',
  },
});
