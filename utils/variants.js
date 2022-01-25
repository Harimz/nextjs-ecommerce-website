export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const menuVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "0vw",
    opacity: 1,
    transition: { delay: 0.25, stiffness: 300 },
  },
};
