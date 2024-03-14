import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SlideInLeft = ({ children } : { children : string}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0, opacity: 1 });
  }, [controls]);

  return (
    <motion.li
      initial={{ x: -100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.li>
  );
};

export default SlideInLeft;
