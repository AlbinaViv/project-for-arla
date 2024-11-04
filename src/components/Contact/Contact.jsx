import { motion } from "framer-motion";
import css from "./Contact.module.css";
import { CgGirl } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const contactVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <motion.li
      className={css.contact}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={contactVariants}
      transition={{ duration: 0.5 }}
    >
      <div className={css.wrap}>
        <p className={css.content}>
          <span>
            <CgGirl />
          </span>
          {name}
        </p>
        <p className={css.content}>
          <span>
            <FaPhoneAlt />
          </span>
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </motion.li>
  );
};
