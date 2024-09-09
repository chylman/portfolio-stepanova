import tippy from 'tippy.js';
import initClipboard from '../clipboard/init-clipboard.js';

const initTippySuccessfully = () => {
  tippy('[data-tippy-successfully]', {
    trigger: 'click',
    theme: 'white',
    arrow: false,
    placement: 'bottom',
    delay: [null, 2000],
    popperOptions: {
      strategy: 'fixed',
    },
    onMount(instance) {
      instance.setProps({
        getReferenceClientRect: ()=>({
          width: window.innerWidth,
          height: window.innerHeight,
          left: 0,
          top: window.innerHeight - 60,
        }),
        popperOptions: {
          strategy: 'fixed',
        },
      });
    },
    onShown(instance) {
      setTimeout(instance.hide, 1500);
    },
  });
};

const initTippyContent = () => {
  tippy('[data-tippy-content]', {
    allowHTML: true,
    trigger: 'click',
    interactive: true,
    theme: 'white',
    placement: 'bottom',
    arrow: true,
    onShown(instance) {
      initClipboard();
      initTippySuccessfully();
      instance.hideWithInteractivity('scroll');
    },
  });
};

export default initTippyContent;
