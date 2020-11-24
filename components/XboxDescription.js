import styles from "../styles/Xbox.module.css";
import Image from "next/image";
import { useRef } from "react";

const XboxDescription = () => {
  const videoRef = useRef();
  return (
    <div className={styles.ContentContainer} id="descripcion">
      <h2 className={styles.Title}>Descripción</h2>
      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionItem}>
          <p className={styles.Text}>
            Nuestro curso se llama Mantenimiento y Ensamble <br />
            de Hardware, eso no significa que estemos limitados a Computadores{" "}
            <br />
            <br />
            Al contrario se podría explorar el Hardware de las Consolas de
            Videojuegos. <br /> <br />
            En este caso se propone el Xbox.
          </p>
        </div>
        <div className={styles.DescriptionItem}>
          <Image
            src={"/images/Subjects/Xbox.png"}
            alt={"Imagen Xbox"}
            layout={"responsive"}
            width={200}
            height={200}
            className={styles.DescriptionImage}
            loading={"lazy"}
          />
        </div>
      </div>

      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionItem}>
          <video
            ref={videoRef}
            className={styles.Video}
            loop
            autoPlay
            muted
            src={require("../public/videos/xbox-controller.mp4")}
          />
        </div>
        <div className={styles.DescriptionItem}>
          <p className={styles.Text}>
            Puede ser una opción bastante polémica dado que de pronto no se
            cuente con la Consola, pero no esta limitado al Xbox, pueden ser
            consolas antiguas o similares, el caso es estudiar los diferentes
            componentes que tienen estas.
            <br />
            <br />
            También puede ser Periféricos de Consolas o de Computadores
          </p>
        </div>
      </div>
    </div>
  );
};

export default XboxDescription;
