import { useRef } from "react";
import styles from "../styles/Home.module.css";
import Button from "./Button";

const HomeVideo = () => {
  const videoRef = useRef();
  return (
    <div className={styles.VideoContainer}>
      <video
        ref={videoRef}
        className={styles.Video}
        loop
        autoPlay
        muted
        src={require("../public/videos/neon-lounge.mp4")}
      />
      <div className={styles.VideoContent}>
        <h1 className={styles.VideoContentTitle}>
          Mantenimiento y Ensamble de Hardware
        </h1>
        <p className={styles.Text}>
          Esta página esta hecha con el propósito de definir que prácticas{" "}
          <br />
          se podrían hacer en la materia
        </p>
        <Button title={"Temas"} path={"#temas"} />
      </div>
    </div>
  );
};

export default HomeVideo;
