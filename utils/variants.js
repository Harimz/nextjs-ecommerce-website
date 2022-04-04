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

export const displayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const displayChildVariants = {
  hidden: { opacity: 0, y: "5rem" },
  visible: { opacity: 1, y: "0rem" },
};

export const userMenuVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};
