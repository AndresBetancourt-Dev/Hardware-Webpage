import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href={"/"}>
        <a className={styles.NavbarLink}>Home</a>
      </Link>
      <Link href={"/Calculator"}>
        <a className={styles.NavbarLink}>Calculator</a>
      </Link>
    </div>
  );
};

export default Navbar;
