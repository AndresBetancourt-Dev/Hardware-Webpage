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
      <Link href={"/Componentes"}>
        <a className={styles.NavbarLink}>Components</a>
      </Link>
    </div>
  );
};

export default Navbar;
