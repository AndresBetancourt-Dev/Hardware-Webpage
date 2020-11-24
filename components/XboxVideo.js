import { useRef } from "react";
import styles from "../styles/Xbox.module.css";
import Button from "./Button";

const XboxVideo = () => {
  const videoRef = useRef();
  return (
    <div className={styles.VideoContainer}>
      <video
        ref={videoRef}
        className={styles.Video}
        loop
        autoPlay
        muted
        src={require("../public/videos/xbox-shot.mp4")}
      />
      <div className={styles.VideoContent}>
        <h1 className={styles.VideoContentTitle}>Mantenimiento Xbox</h1>
        <p className={styles.Text}>
          Conocer el interior de una de las consolas Top del mercado <br />
          o de sus periféricos
          <br />
        </p>
        <Button title={"Leer Más"} path={"#descripcion"} type="xbox" />
      </div>
    </div>
  );
};

export default XboxVideo;
