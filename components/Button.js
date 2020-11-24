import Link from "next/link";
import styles from "../styles/Button.module.css";

const Button = ({ title, path, type }) => {
  if (path.charAt(0) === "#") {
    return (
      <a href={path} className={!type ? styles.Button : styles.ButtonXbox}>
        {title}
      </a>
    );
  } else {
    return (
      <Link href={path}>
        <a className={!type ? styles.Button : styles.ButtonXbox}>{title}</a>
      </Link>
    );
  }
};

export default Button;
