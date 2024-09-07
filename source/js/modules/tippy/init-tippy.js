import tippy from 'tippy.js';

const initTippy = () => {
  tippy('[data-tippy-content]', {
    allowHTML: true,
    trigger: 'click',
    interactive: true,
    theme: 'white',
    placement: 'bottom',
    arrow: true,
  });
};

export default initTippy;
