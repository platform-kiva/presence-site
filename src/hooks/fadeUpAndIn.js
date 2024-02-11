import { useInView } from 'react-intersection-observer';

export const useFadeInUpAnimation = (delay = 0) => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = { 
    duration: 0.5,
    delay: delay
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return {
    ref,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition,
    variants: fadeInUpVariants,
  };
};
