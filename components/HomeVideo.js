import { useRef } from "react";
import styles from "../styles/Home.module.css";

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
        <h1 className={styles.VideoContentText}>Mantenimiento y Ensamble</h1>
      </div>
    </div>
  );
};

export default HomeVideo;
