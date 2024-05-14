export const animationMap = {
  fadeInOut: {
    open: {
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    close: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  },
  spinTransition: {
    repeat: Infinity,
    ease: 'linear',
    duration: 1,
    Infinity: true,
  },
  testContainerAnimation: {
    close: { height: 80, transition: { duration: 0.5 } },
    open: { height: 300, transition: { when: 'beforeChildren', duration: 0.5 } },
  },
  testContneBoxAnimation: {
    close: { opacity: 0 },
    open: { opacity: 1, transition: { delay: 0.25, duration: 0.25 } },
    exit: { opacity: 0 },
  },
  commetnContainerAnimation: {
    open: { x: 0, transition: { duration: 0.5 } },
    close: { x: 855, transition: { duration: 0.5 } },
  },
};
