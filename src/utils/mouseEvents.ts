const mouseOverEvent = new MouseEvent('mouseover', {
  bubbles: true,
  cancelable: true,
  view: window,
});

const mouseOutEvent = new MouseEvent('mouseout', {
  bubbles: true,
  cancelable: true,
  view: window,
});

export { mouseOverEvent, mouseOutEvent };
export default { mouseOverEvent, mouseOutEvent };
