import tippy, {followCursor} from 'tippy.js';
import initClipboard from '../clipboard/init-clipboard.js';

const initTippySuccessfully = () => {
  tippy('[data-tippy-successfully]', {
    trigger: 'click',
    theme: 'white',
    arrow: false,
    placement: 'bottom',
    popperOptions: {
      strategy: 'fixed',
    },
    onMount(instance) {
      instance.setProps({
        getReferenceClientRect: ()=>({
          width: window.innerWidth,
          height: window.innerHeight,
          left: 0,
          top: window.innerHeight-60,
        }),
        popperOptions: {
          strategy: 'fixed',
        }
      });
    }
  });
}

const initTippyContent = () => {
  tippy('[data-tippy-content]', {
    allowHTML: true,
    trigger: 'click',
    interactive: true,
    theme: 'white',
    placement: 'bottom',
    arrow: true,
    onShown() {
      initClipboard();
      initTippySuccessfully();
    }
  });
};

export default initTippyContent;
