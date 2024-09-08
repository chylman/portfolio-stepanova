const initAnimation = () => {
  gsap.to('[data-animation-contacts="opacity"]', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '[data-animation-contacts="opacity"]', // отсматриваем этот блок по скроллу
      start: 'top 120px', // начало анимации, когда центр блока стоит по центру экрана
      scrub: true, // обязательный параметр, чтобы анимация работала по скроллу. можно давать числовое значение
    },
  });
  gsap.to('[data-animation-contacts-header="opacity"]', {
    opacity: 1,
    pointerEvents: 'initial',
    duration: 2,
    startAt: {
      opacity: 0,
      pointerEvents: 'none',
    },
    scrollTrigger: {
      trigger: '[data-animation-contacts="opacity"]', // отсматриваем этот блок по скроллу
      start: 'top 60px', // начало анимации, когда центр блока стоит по центру экрана
      scrub: true, // обязательный параметр, чтобы анимация работала по скроллу. можно давать числовое значение
    },
  });
}

export default initAnimation;
