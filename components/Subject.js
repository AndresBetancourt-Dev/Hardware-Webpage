import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Subject.module.css";
import { useEffect } from "react";

const Subject = ({ image, title, path, alternative }) => {
  useEffect(() => {
    console.log(image, title, path, alternative);
  }, []);
  return (
    <Link href={path}>
      <a className={styles.Subject}>
        <Image
          src={image}
          alt={alternative}
          layout={"responsive"}
          width={200}
          height={200}
          className={styles.Image}
          loading={"lazy"}
        />
        <div className={styles.Content}>
          <h3 className={styles.Title}>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default Subject;
