import { motion } from "framer-motion";
import DocumentTitle from "../../components/DocumentTitle";
import css from "../Home/Home.module.css";

export default function Home() {
  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3, // задержка для плавного появления
      },
    },
  };

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <motion.h1
          className={css.mainTitle}
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          Welcome contacts page
        </motion.h1>
      </div>
    </>
  );
}
