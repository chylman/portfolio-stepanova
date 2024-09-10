let isPlayed = false;
const initAnimation = () => {
  const contactsOpacityHeader = gsap.to('[data-animation-contacts-header="opacity"]', {
    paused: true,
    opacity: 1,
    pointerEvents: 'initial',
    duration: 0.3,
    ease: "power4.out",
    // scrollTrigger: {
    //   trigger: '[data-animation-contacts="opacity"]',
    //   start: 'center',
    //   toggleActions: 'play none reverse none',
    // },
  });
  const contactsOpacity = gsap.to('[data-animation-contacts="opacity"]', {
    opacity: 0,
    duration: 0.3,
    ease: "power4.out",
    pointerEvents: 'none',
    scrollTrigger: {
      trigger: '[data-animation-contacts="opacity"]',
      start: 'top',
      end: 'top',
      toggleActions: 'play none reverse none',
    },
    onStart() {
      contactsOpacityHeader.play();
    },
    onReverseComplete() {
      contactsOpacityHeader.reverse();
    }
  });
}

export default initAnimation;
