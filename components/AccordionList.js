import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styles from "../styles/AccordionList.module.css";

export default function AccordionList() {
  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        initial={{ borderRadius: 25 }}
        className={styles.UnorganizedList}
      >
        {items.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      className={styles.ListItem}
    >
      <motion.div className={styles.Avatar} layout />
      <AnimatePresence>{isOpen && <Content item={item} />}</AnimatePresence>
    </motion.li>
  );
}

function Content({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.Row}>{item.title}</div>
    </motion.div>
  );
}

const items = [
  { key: "1", title: "Mantenimiento Xbox" },
  { key: "2", title: "Mantenimiento Celulares" },
  { key: "3", title: "Programar Propia Calculadora" },
];
