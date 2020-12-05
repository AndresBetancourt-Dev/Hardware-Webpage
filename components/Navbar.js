import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href={"/"}>
        <a className={styles.NavbarLink}>Home</a>
      </Link>
      <Link href={"/#temas"}>
        <a className={styles.NavbarLink}>Temas</a>
      </Link>
      <Link href={"/Calculator"}>
        <a className={styles.NavbarLink}>Calculadora</a>
      </Link>
      <Link href={"/circuitos"}>
        <a className={styles.NavbarLink}>Circuitos</a>
      </Link>
      <Link href={"/procesador"}>
        <a className={styles.NavbarLink}>Componentes</a>
      </Link>
    </div>
  );
};

export default Navbar;
