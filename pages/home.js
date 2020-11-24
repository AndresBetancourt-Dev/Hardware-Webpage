import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const videoRef = useRef();

  useEffect(() => {
    setInterval(() => {
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}></div>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          loop
          autoPlay
          muted
          src={require("../static/videos/neon-lounge.mp4")}
        />
        <div className={styles.videoContent}>
          <h1 className={styles.videoContentText}>Mantenimiento y Ensamble</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
