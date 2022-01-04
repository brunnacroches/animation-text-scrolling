import LocomotiveScroll from 'locomotive-scroll';

// initialize Locomotive Scroll
const LocomotiveScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {smooth: true},
  tablet: {smooth: true}
});

export {
  LocomotiveScroll
};