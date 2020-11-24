import Link from "next/link";
import styles from "../styles/Button.module.css";

const Button = ({ title, path }) => {
  if (path.charAt(0) === "#") {
    return (
      <a href={path} className={styles.Button}>
        {title}
      </a>
    );
  }

  return <Link href={path}></Link>;
};

export default Button;
