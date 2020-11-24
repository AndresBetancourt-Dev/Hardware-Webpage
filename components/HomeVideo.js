import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const HomeVideo = () => {
  const videoRef = useRef();

  useEffect(() => {}, []);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        loop
        autoPlay
        muted
        src={require("../public/videos/neon-lounge.mp4")}
      />
      <div className={styles.videoContent}>
        <h1 className={styles.videoContentText}>Mantenimiento y Ensamble</h1>
      </div>
    </div>
  );
};

export default HomeVideo;
