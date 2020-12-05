import React from "react";
import styles from "../styles/Motherboard.module.css";
import Link from "next/link";
const NavComponents = () => {
  return (
    <div className={styles.Nav}>
      <Link href={"/home"}>
        <a className={styles.Text}>Circuitos</a>
      </Link>
    </div>
  );
};

export default NavComponents;
