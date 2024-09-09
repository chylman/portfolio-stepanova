import tippy from 'tippy.js';
const initClipboard = () => {
  const clipboardBlocks = document.querySelectorAll('[data-clipboard]')

  clipboardBlocks.forEach((item) => {
    if (!item) {
      return;
    }

    const textItem = item.querySelector('[data-clipboard-text]');
    const trigger = item.querySelector('[data-clipboard-button]');


    if (!textItem || !trigger) {
      return;
    }

    const handleTriggerClick = () => {
      const text = textItem.dataset.clipboardText;
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('успех')
        })
        .catch(() => {
          console.log('Ошибка')
        })
    }

    trigger.addEventListener('click', handleTriggerClick);
  })
}

export default initClipboard;
