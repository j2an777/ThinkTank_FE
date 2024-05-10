export const animationMap = {
  subMenuAnimate: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  },
  spinTransition: {
    loop: Infinity,
    ease: 'linear',
    duration: 1,
    Infinity: true,
  },
};
