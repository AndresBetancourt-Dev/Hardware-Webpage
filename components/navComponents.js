import React from "react";
import styles from "../styles/Motherboard.module.css";
import Link from "next/link";
const NavComponents = () => {
  return (
    <div className={styles.Nav}>
      <Link href={"/home"}>
        <a className={styles.Text}>Componentes</a>
      </Link>
      <Link href={"/procesador"}>
        <a className={styles.SubText}>Procesador</a>
      </Link>
      <Link href={"/motherboard"}>
        <a className={styles.SubText}>Motherboard</a>
      </Link>
      <Link href={"/keyboard"}>
        <a className={styles.SubText}>Teclado</a>
      </Link>
      <Link href={"/ram"}>
        <a className={styles.SubText}>RAM</a>
      </Link>
    </div>
  );
};

export default NavComponents;
